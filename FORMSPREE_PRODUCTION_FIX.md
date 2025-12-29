# Formspree Production Hatası - Çözüm Kılavuzu

## 🔍 Sorun Tespiti

Production'da form gönderirken "Gönderim sırasında sorun oluştu" hatası alıyorsunuz.

## ✅ Çözüm Adımları

### 1. Vercel'de Environment Variable Kontrolü

**Vercel Dashboard'da:**
1. Projenize gidin: https://vercel.com/dashboard
2. **Settings** → **Environment Variables** bölümüne gidin
3. `REACT_APP_FORMSPREE_ENDPOINT` değişkeninin olup olmadığını kontrol edin

**Eğer YOKSA:**
1. **Add New** butonuna tıklayın
2. **Name:** `REACT_APP_FORMSPREE_ENDPOINT`
3. **Value:** `https://formspree.io/f/mpqzbqqa` (veya kendi form ID'niz)
4. **Environment:** Production, Preview, Development (hepsini seçin)
5. **Save** butonuna tıklayın

### 2. Formspree Endpoint Doğrulama

Formspree endpoint'inizin doğru olduğundan emin olun:

1. https://formspree.io/ adresine gidin
2. Formunuzu açın
3. **Settings** → **Integration** bölümünde endpoint URL'ini kontrol edin
4. Format: `https://formspree.io/f/YOUR_FORM_ID`

### 3. Vercel'de Redeploy

Environment variable ekledikten sonra:

1. Vercel Dashboard'da projenize gidin
2. **Deployments** sekmesine gidin
3. Son deployment'ın yanındaki **⋯** (üç nokta) menüsüne tıklayın
4. **Redeploy** seçeneğini seçin
5. **Use existing Build Cache** seçeneğini **KAPALI** bırakın (environment variable'ların yeniden yüklenmesi için)

### 4. Browser Console'da Hata Kontrolü

Production'da test ederken:

1. Tarayıcıda **F12** veya **Cmd+Option+I** (Mac) ile Developer Tools'u açın
2. **Console** sekmesine gidin
3. Formu göndermeyi deneyin
4. Hata mesajlarını kontrol edin

**Beklenen hatalar:**
- `Formspree endpoint yapılandırılmamış` → Environment variable eksik
- `404` → Endpoint URL yanlış
- `429` → Rate limit aşıldı
- `CORS error` → Formspree ayarları yanlış

### 5. Formspree Ayarları Kontrolü

Formspree dashboard'da:

1. **Settings** → **Email Notifications** bölümüne gidin
2. **Email recipient** alanında `info@redmobile.com.tr` olduğundan emin olun
3. **Email notifications** aktif olduğundan emin olun
4. **Spam protection** ayarlarını kontrol edin (honeypot aktif olmalı)

### 6. Test Endpoint'i

Terminal'de test edebilirsiniz:

```bash
curl -X POST https://formspree.io/f/mpqzbqqa \
  -H "Accept: application/json" \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "message=Test message"
```

**Beklenen yanıt:**
```json
{
  "next": "https://formspree.io/f/mpqzbqqa/thanks"
}
```

## 🔧 Debug İçin Geliştirilmiş Hata Mesajları

Kod güncellendi, artık daha detaylı hata mesajları göreceksiniz:

- **Endpoint yok:** "Formspree endpoint yapılandırılmamış..."
- **404:** "Formspree endpoint bulunamadı..."
- **429:** "Çok fazla istek gönderildi..."
- **500+:** "Formspree sunucu hatası..."
- **Network:** "Ağ hatası. Formspree servisine bağlanılamadı..."

## 📋 Kontrol Listesi

- [ ] Vercel'de `REACT_APP_FORMSPREE_ENDPOINT` environment variable var mı?
- [ ] Environment variable değeri doğru mu? (`https://formspree.io/f/...`)
- [ ] Vercel'de redeploy yapıldı mı?
- [ ] Formspree'de email recipient ayarlı mı? (`info@redmobile.com.tr`)
- [ ] Browser console'da hata var mı? (F12 → Console)
- [ ] Formspree dashboard'da submission'lar görünüyor mu?

## 🚨 Yaygın Hatalar ve Çözümleri

### Hata: "Formspree endpoint yapılandırılmamış"
**Çözüm:** Vercel'de environment variable ekleyin (Yukarıdaki Adım 1)

### Hata: "404 Not Found"
**Çözüm:** 
- Formspree endpoint URL'ini kontrol edin
- Form ID'nin doğru olduğundan emin olun
- Formspree'de form'un aktif olduğunu kontrol edin

### Hata: "429 Too Many Requests"
**Çözüm:**
- Birkaç dakika bekleyin
- Formspree free plan'da günlük limit var (50 submission/gün)
- Premium plan'a geçmeyi düşünün

### Hata: CORS hatası
**Çözüm:**
- Formspree'de **Settings** → **Security** bölümüne gidin
- **Allowed domains** listesine production domain'inizi ekleyin
- Örnek: `redmobil.com`, `www.redmobil.com`

## 📞 Sonraki Adımlar

1. Vercel'de environment variable'ı ekleyin
2. Redeploy yapın
3. Test edin
4. Browser console'da hata varsa, hata mesajını paylaşın

---

**Not:** Environment variable ekledikten sonra mutlaka redeploy yapın, aksi halde değişiklikler aktif olmaz!

