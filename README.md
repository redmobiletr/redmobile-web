# Red Mobile - İkinci El Telefon Alım & Satım Platformu

![Red Mobile](https://img.shields.io/badge/Red%20Mobile-React-blue)
![TypeScript](https://badgen.net/npm/types/tslib)
![License](https://img.shields.io/badge/license-MIT-green)

Red Mobile, ikinci el telefon satışını geri alım opsiyonu ile güvenli, esnek ve pişmanlıksız hale getiren yenilikçi mobil ticaret platformudur.

## 🚀 Özellikler

- **Modern React Stack** – React 18, TypeScript, Styled Components
- **Responsive Tasarım** – Tüm cihazlarda mükemmel görünüm
- **Hızlı Performans** – Optimize edilmiş kod ve lazy loading
- **Formspree Entegrasyonu** – Güvenli, backendless form gönderimi
- **SEO Optimizasyonu** – Google arama motorları için optimize edilmiş
- **Güvenlik** – CSP headers, honeypot spam koruması, KVKK uyumlu
- **Çok Dilli Destek** – Türkçe, İngilizce, İspanyolca

## 📋 Gereksinimler

- Node.js 10.16.0 veya üzeri (LTS önerilir)
- npm veya yarn

## 🛠️ Kurulum

1. **Repository'yi klonlayın:**
   ```bash
   git clone <repository-url>
   cd redmobile-react-web
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Environment değişkenlerini ayarlayın:**
   ```bash
   cp .env.example .env
   ```
   
   `.env` dosyasını düzenleyin:
   ```env
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

4. **Development server'ı başlatın:**
   ```bash
   npm start
   ```

5. **Production build:**
   ```bash
   npm run build
   ```

## 📧 Formspree Kurulumu

İletişim formu [Formspree](https://formspree.io/) kullanarak güvenli email gönderimi yapar.

### Hızlı Kurulum

1. **Formspree hesabı oluşturun:**
   - https://formspree.io/ adresine gidin
   - Ücretsiz hesap oluşturun
   - Yeni form oluşturun
   - Form endpoint URL'ini kopyalayın

2. **Environment değişkenini ayarlayın:**
   - `.env` dosyasında `REACT_APP_FORMSPREE_ENDPOINT` değerini ayarlayın

3. **Formspree'de email alıcısını yapılandırın:**
   - Formspree dashboard'da form ayarlarına gidin
   - Email alıcısını `info@redmobile.com.tr` olarak ayarlayın
   - Email bildirimlerini etkinleştirin

### Form Özellikleri

- ✅ Client-side validation (zorunlu alanlar + email formatı)
- ✅ KVKK onay checkbox'ı (GDPR uyumluluğu için zorunlu)
- ✅ Honeypot spam koruması
- ✅ Gönderim sırasında loading durumu
- ✅ Başarı/hata bildirimleri
- ✅ Telefon alanı (opsiyonel)

## 🏗️ Proje Yapısı

```
src/
 ├── assets/          # Görseller, ikonlar, logolar
 ├── components/      # Yeniden kullanılabilir UI bileşenleri
 ├── pages/           # Sayfa seviyesi bileşenler
 ├── features/        # Özellik bazlı bileşenler (contact, hero, vb.)
 ├── utils/           # Yardımcı fonksiyonlar
 ├── styles/          # Global CSS / tema stilleri
 ├── content/         # JSON içerik dosyaları
 ├── context/         # React Context API
 └── data/            # Veri dosyaları
```

## 🔒 Güvenlik

- **Content Security Policy (CSP)** – XSS saldırılarına karşı koruma
- **Security Headers** – HSTS, X-Frame-Options, vb.
- **Honeypot** – Spam koruması
- **Input Sanitization** – Form verilerinin temizlenmesi
- **Environment Variables** – Hassas bilgilerin güvenli saklanması

Detaylı güvenlik raporu için `SECURITY_REPORT.md` dosyasına bakın.

## 🚀 Vercel Deployment

1. **Vercel hesabınıza giriş yapın:**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Projeyi deploy edin:**
   ```bash
   vercel
   ```

3. **Environment değişkenlerini ayarlayın:**
   - Vercel dashboard'da proje ayarlarına gidin
   - Environment Variables bölümüne `REACT_APP_FORMSPREE_ENDPOINT` ekleyin

4. **Production URL'ini güncelleyin:**
   - `vercel.json` ve `public/index.html` dosyalarında URL'leri güncelleyin

## 📝 Scripts

- `npm start` – Development server başlatır
- `npm run build` – Production build oluşturur
- `npm test` – Testleri çalıştırır
- `npm run audit` – Güvenlik audit'i çalıştırır
- `npm run security:check` – Orta seviye ve üzeri güvenlik açıklarını kontrol eder

## 🛡️ Güvenlik Kontrolleri

Production'a geçmeden önce:

- [ ] `npm run security:check` çalıştırıldı
- [ ] Environment değişkenleri ayarlandı
- [ ] Formspree endpoint yapılandırıldı
- [ ] Security headers kontrol edildi
- [ ] Console.log'lar kaldırıldı
- [ ] Build başarıyla tamamlandı

Detaylı deployment checklist için `DEPLOYMENT_CHECKLIST.md` dosyasına bakın.

## 📄 Lisans

MIT License - Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- Email: info@redmobile.com.tr
- Website: https://redmobil.com

---

**Red Mobile** - Bir tıkla sat istediğinde geri al.
