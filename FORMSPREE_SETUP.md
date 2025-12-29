# Formspree Integration Guide

## Overview

The contact form has been integrated with [Formspree](https://formspree.io/) for secure, backendless email submissions. This solution works perfectly with static hosting (like Vercel) and requires no backend infrastructure.

## Features

✅ **Backendless** - No server required  
✅ **Secure** - Formspree handles email delivery securely  
✅ **Spam Protection** - Built-in honeypot field  
✅ **KVKK Compliant** - Required consent checkbox  
✅ **TypeScript** - Fully typed implementation  
✅ **Vercel Ready** - Works with static hosting  

## Setup Instructions

### 1. Create Formspree Account

1. Go to https://formspree.io/
2. Sign up for a free account (200 submissions/month on free tier)
3. Click "New Form" to create a form
4. Copy your form endpoint URL (e.g., `https://formspree.io/f/xpzgkqyz`)

### 2. Configure Email Recipient

1. In your Formspree dashboard, open your form settings
2. Go to "Email" tab
3. Set the recipient email to: **info@redmobile.com.tr**
4. Enable email notifications
5. (Optional) Customize email subject and template

### 3. Set Environment Variable

1. Copy `.env.example` to `.env` in the project root:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and set your Formspree endpoint:
   ```env
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

3. Replace `YOUR_FORM_ID` with your actual Form ID from Formspree

### 4. Restart Development Server

```bash
npm start
```

## Form Fields

The form includes the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | text | ✅ Yes | Full name |
| email | email | ✅ Yes | Email address (validated) |
| phone | tel | ❌ No | Phone number (optional) |
| message | textarea | ✅ Yes | Message content |
| kvkkConsent | checkbox | ✅ Yes | KVKK consent (required) |
| _gotcha | hidden | - | Honeypot spam protection |

## Form Behavior

### Client-Side Validation

- **Name**: Required, non-empty
- **Email**: Required, valid email format
- **Phone**: Optional, but if provided, must be valid format
- **Message**: Required, non-empty
- **KVKK Consent**: Required checkbox

### Submission Flow

1. User fills out the form
2. Client-side validation runs
3. If validation passes:
   - Submit button shows "Gönderiliyor..." (Sending...)
   - Form data is sent to Formspree endpoint
   - Honeypot field is checked (if filled, submission is silently rejected)
4. On success:
   - Success notification: "Talebiniz alındı. En kısa sürede dönüş yapacağız."
   - Form fields are reset
5. On error:
   - Error notification: "Gönderim sırasında sorun oluştu. Lütfen tekrar deneyin."

## Security Features

### Honeypot Field

A hidden `_gotcha` field is included in the form. If this field is filled (by bots), the submission is silently rejected without showing an error to the user.

### Spam Protection

Formspree includes built-in spam protection:
- Honeypot detection
- Rate limiting
- IP-based blocking
- Content filtering

## Email Format

When a form is submitted, Formspree sends an email to `info@redmobile.com.tr` with:

- **Subject**: "Yeni Satış Talebi - {name}"
- **From**: The user's email address
- **Reply-To**: The user's email address
- **Body**: Includes all form fields (name, email, phone, message)

## Vercel Deployment

### Environment Variables in Vercel

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add:
   - **Key**: `REACT_APP_FORMSPREE_ENDPOINT`
   - **Value**: `https://formspree.io/f/YOUR_FORM_ID`
4. Redeploy your application

### Build Configuration

No special build configuration is needed. The form works with standard Create React App build process.

## Troubleshooting

### Form not submitting

1. Check that `REACT_APP_FORMSPREE_ENDPOINT` is set correctly
2. Verify the endpoint URL in browser console (should not contain `FORM_ID`)
3. Check Formspree dashboard for submission logs
4. Verify email recipient is set in Formspree settings

### Email not received

1. Check Formspree dashboard for submission status
2. Verify email recipient is set to `info@redmobile.com.tr`
3. Check spam folder
4. Verify Formspree account email notifications are enabled

### Validation errors

- Ensure all required fields are filled
- Check email format is valid
- Verify KVKK consent checkbox is checked

## Testing

1. Fill out the form with test data
2. Check KVKK consent checkbox
3. Submit the form
4. Verify success notification appears
5. Check `info@redmobile.com.tr` inbox for email
6. Check Formspree dashboard for submission record

## Support

- Formspree Documentation: https://help.formspree.io/
- Formspree Dashboard: https://formspree.io/forms
- Formspree Status: https://status.formspree.io/

