# Commit ve Deploy Komutları

Aşağıdaki komutları **sırayla** terminal'de çalıştırın:

## 1. Commit Oluştur

```bash
git commit -m "feat: Footer kurumsal yapıya çevrildi, dil seçenekleri kaldırıldı, URL'ler güncellendi

- Footer kurumsal yapıya çevrildi (İletişim, Hizmetler, Şirket, Sosyal Medya)
- Dil seçenekleri kaldırıldı
- İletişim email'i eklendi: info@redmobile.com.tr
- Tüm URL referansları redmobile.com.tr olarak güncellendi
- Copyright bilgisi eklendi
- Profesyonel footer tasarımı"
```

## 2. GitHub'a Push Et

```bash
git push origin main
```

---

## ✅ Sonraki Adımlar

1. **Vercel otomatik deploy:** Push sonrası Vercel otomatik olarak yeni deployment başlatacak
2. **Deployment kontrolü:** Vercel dashboard'da deployment durumunu kontrol edin
3. **Test:** Production URL'de footer'ı test edin

---

## 📋 Değişiklik Özeti

- ✅ Footer kurumsal yapıya çevrildi
- ✅ Dil seçenekleri kaldırıldı
- ✅ İletişim email'i eklendi
- ✅ URL'ler güncellendi (redmobile.com.tr)
- ✅ Copyright eklendi
- ✅ Responsive tasarım iyileştirildi

---

**Not:** `package-lock.json` commit edilmedi (local config olarak kabul edildi).

