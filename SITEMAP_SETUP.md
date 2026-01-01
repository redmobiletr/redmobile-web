# Sitemap ve Robots.txt Kurulumu

## ✅ Oluşturulan Dosyalar

1. **public/sitemap.xml** - XML sitemap dosyası
2. **public/robots.txt** - Robots.txt dosyası (güncellendi)
3. **vercel.json** - Sitemap ve robots.txt için özel route'lar eklendi

## 📋 Dosya İçerikleri

### public/sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://redmobile.com.tr/</loc>
    <lastmod>2024-12-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### public/robots.txt
```
User-agent: *
Allow: /

Sitemap: https://redmobile.com.tr/sitemap.xml
```

## 🧪 Test Adımları

### 1. Local Test (Build Sonrası)

```bash
npm run build
```

Build sonrası `build/` klasöründe şu dosyalar olmalı:
- `build/sitemap.xml`
- `build/robots.txt`

### 2. Production Test

Deploy sonrası şu URL'leri tarayıcıda açın:

**Sitemap XML:**
- URL: https://redmobile.com.tr/sitemap.xml
- **Beklenen:** XML içeriği görünmeli (HTML değil!)
- **Content-Type:** `application/xml` veya `text/xml`

**Robots.txt:**
- URL: https://redmobile.com.tr/robots.txt
- **Beklenen:** Text içeriği görünmeli
- **Content-Type:** `text/plain`

### 3. cURL ile Test

```bash
# Sitemap test
curl -I https://redmobile.com.tr/sitemap.xml

# Beklenen header:
# Content-Type: application/xml

# Robots.txt test
curl -I https://redmobile.com.tr/robots.txt

# Beklenen header:
# Content-Type: text/plain
```

### 4. Browser Developer Tools ile Test

1. F12 → Network sekmesi
2. https://redmobile.com.tr/sitemap.xml açın
3. Response Headers'da `Content-Type: application/xml` olmalı
4. Response body XML formatında olmalı (HTML değil)

## 🔍 Google Search Console'da Tekrar Gönderme

### Adımlar:

1. **Google Search Console'a giriş yapın:**
   - https://search.google.com/search-console

2. **Sitemap'ı gönderin:**
   - Sol menüden **Sitemaps** seçeneğine tıklayın
   - "Yeni sitemap ekle" bölümüne şunu yazın:
     ```
     sitemap.xml
     ```
   - **Gönder** butonuna tıklayın

3. **Doğrulama:**
   - Birkaç dakika bekleyin
   - Status: "Başarılı" olmalı
   - "Sitemap HTML'dir" hatası artık görünmemeli

4. **Hata durumunda:**
   - Sitemap URL'ini tarayıcıda açın
   - XML içeriği görünüyor mu kontrol edin
   - Response headers'ı kontrol edin (Content-Type)

## ⚠️ Sorun Giderme

### Sorun: Sitemap hala HTML dönüyor

**Çözüm 1:** Vercel cache'i temizleyin
- Vercel Dashboard → Deployments → Son deployment'ı Redeploy edin

**Çözüm 2:** Vercel.json'u kontrol edin
- `sitemap.xml` ve `robots.txt` için özel route'lar var mı?

**Çözüm 3:** Build klasörünü kontrol edin
```bash
npm run build
ls -la build/ | grep -E "sitemap|robots"
```

### Sorun: 404 hatası

**Çözüm:** Dosyaların `public/` klasöründe olduğundan emin olun
- `public/sitemap.xml` ✓
- `public/robots.txt` ✓

## 📝 Kontrol Listesi

- [x] `public/sitemap.xml` oluşturuldu
- [x] `public/robots.txt` güncellendi (sitemap referansı eklendi)
- [x] `vercel.json` güncellendi (sitemap ve robots için route'lar eklendi)
- [ ] Build test edildi (`npm run build`)
- [ ] Production'da sitemap.xml test edildi
- [ ] Production'da robots.txt test edildi
- [ ] Google Search Console'da sitemap gönderildi
- [ ] Search Console'da hata kontrol edildi

## 🚀 Deploy Sonrası

1. **Deploy tamamlandıktan sonra:**
   ```bash
   # Sitemap'i kontrol et
   curl https://redmobile.com.tr/sitemap.xml
   
   # Robots.txt'yi kontrol et
   curl https://redmobile.com.tr/robots.txt
   ```

2. **Google Search Console:**
   - Sitemap'i tekrar gönderin
   - Birkaç saat sonra durumu kontrol edin

---

**Not:** React SPA'da `public/` klasöründeki dosyalar build sırasında otomatik olarak `build/` klasörüne kopyalanır. Vercel.json'daki route'lar bu dosyaların doğru şekilde serve edilmesini sağlar.

