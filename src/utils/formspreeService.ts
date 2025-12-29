/**
 * Formspree Service
 * Handles form submissions to Formspree endpoint
 */

export interface FormspreeSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  _gotcha?: string; // Honeypot field
}

export interface FormspreeResponse {
  success: boolean;
  message?: string;
  errors?: Array<{ field: string; message: string }>;
}

/**
 * Get Formspree endpoint from environment variable
 * Supports both CRA (REACT_APP_) and Vite (VITE_) prefixes
 */
const getFormspreeEndpoint = (): string => {
  // Try CRA format first (REACT_APP_)
  const craEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;
  if (craEndpoint && !craEndpoint.includes('FORM_ID')) {
    return craEndpoint;
  }

  // Try Vite format (VITE_)
  const viteEndpoint = process.env.VITE_FORMSPREE_ENDPOINT;
  if (viteEndpoint && !viteEndpoint.includes('FORM_ID')) {
    return viteEndpoint;
  }

  // Fallback to provided endpoint (for development)
  // In production, always use environment variable
  if (process.env.NODE_ENV === 'development') {
    return 'https://formspree.io/f/mpqzbqqa';
  }

  // Production fallback (will show error)
  return 'https://formspree.io/f/FORM_ID';
};

/**
 * Submit form to Formspree using FormData
 */
export const submitToFormspree = async (
  data: FormspreeSubmission
): Promise<FormspreeResponse> => {
  const endpoint = getFormspreeEndpoint();

  // Validate endpoint
  if (!endpoint || endpoint.includes('FORM_ID')) {
    const envCheck = process.env.NODE_ENV === 'production' 
      ? 'Production ortamında REACT_APP_FORMSPREE_ENDPOINT environment variable\'ı ayarlanmamış.'
      : 'Development ortamında environment variable ayarlanmamış. .env dosyasını kontrol edin.';
    
    if (process.env.NODE_ENV === 'development') {
      console.warn('Formspree endpoint not configured. Using fallback endpoint for development.');
    }
    
    return {
      success: false,
      message: `Formspree endpoint yapılandırılmamış. ${envCheck} Lütfen REACT_APP_FORMSPREE_ENDPOINT veya VITE_FORMSPREE_ENDPOINT environment variable'ını ayarlayın.`,
    };
  }

  try {
    // Create FormData and sanitize inputs
    const formData = new FormData();
    
    // Sanitize and trim inputs to prevent injection
    const sanitizedName = data.name.trim().substring(0, 200);
    const sanitizedEmail = data.email.trim().substring(0, 254);
    const sanitizedMessage = data.message.trim().substring(0, 5000);
    
    formData.append('name', sanitizedName);
    formData.append('email', sanitizedEmail);
    if (data.phone) {
      const sanitizedPhone = data.phone.trim().substring(0, 50);
      formData.append('phone', sanitizedPhone);
    }
    formData.append('message', sanitizedMessage);
    if (data.subject) {
      const sanitizedSubject = data.subject.trim().substring(0, 200);
      formData.append('subject', sanitizedSubject);
    }
    // Honeypot field (should be empty)
    if (data._gotcha !== undefined) {
      formData.append('_gotcha', data._gotcha);
    }
    
    // Add Reply-To header via Formspree convention
    formData.append('_replyto', sanitizedEmail);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    // Check if response is JSON
    let responseData;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      // If not JSON, read as text for debugging
      const textResponse = await response.text();
      if (process.env.NODE_ENV === 'development') {
        console.error('Formspree non-JSON response:', textResponse);
      }
      return {
        success: false,
        message: `Formspree hatası: ${response.status} ${response.statusText}. Lütfen endpoint'i kontrol edin.`,
      };
    }

    if (response.ok) {
      return {
        success: true,
        message: 'Form başarıyla gönderildi',
      };
    } else {
      // Handle Formspree error responses with detailed info
      let errorMessage = 'Form gönderilirken bir hata oluştu';
      
      if (responseData.error) {
        errorMessage = responseData.error;
      } else if (responseData.message) {
        errorMessage = responseData.message;
      } else if (responseData.errors && Array.isArray(responseData.errors)) {
        // Format validation errors
        const errorList = responseData.errors
          .map((err: any) => err.message || err)
          .join(', ');
        errorMessage = `Formspree doğrulama hatası: ${errorList}`;
      } else if (response.status === 404) {
        errorMessage = 'Formspree endpoint bulunamadı. Lütfen endpoint URL\'ini kontrol edin.';
      } else if (response.status === 429) {
        errorMessage = 'Çok fazla istek gönderildi. Lütfen birkaç dakika sonra tekrar deneyin.';
      } else if (response.status >= 500) {
        errorMessage = 'Formspree sunucu hatası. Lütfen daha sonra tekrar deneyin.';
      }

      // Log detailed error in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Formspree error response:', {
          status: response.status,
          statusText: response.statusText,
          data: responseData,
        });
      }

      return {
        success: false,
        message: errorMessage,
        errors: responseData.errors,
      };
    }
  } catch (error: any) {
    // Log error without exposing sensitive data
    if (process.env.NODE_ENV === 'development') {
      console.error('Formspree submission error:', error);
    }
    
    // Provide more specific error messages
    let errorMessage = 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.';
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = 'Ağ hatası. Formspree servisine bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.';
    } else if (error.message) {
      // In development, show more details
      if (process.env.NODE_ENV === 'development') {
        errorMessage = `Hata: ${error.message}`;
      }
    }
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

