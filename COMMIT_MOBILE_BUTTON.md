# Commit ve Deploy Komutları

Aşağıdaki komutları **sırayla** terminal'de çalıştırın:

## 1. Değişiklikleri Stage'e Al

```bash
git add src/components/Header/index.tsx src/components/Header/styles.ts
```

veya tüm değişiklikleri eklemek için:

```bash
git add .
```

## 2. Commit Oluştur

```bash
git commit -m "feat: Mobil görünümde Cihaz Sat butonu logonun yanına taşındı"
```

## 3. GitHub'a Push Et

```bash
git push origin main
```

---

## ✅ Sonraki Adımlar

1. **Vercel otomatik deploy:** Push sonrası Vercel otomatik olarak yeni deployment başlatacak
2. **Deployment kontrolü:** Vercel dashboard'da deployment durumunu kontrol edin
3. **Test:** Production URL'de mobil görünümü test edin

---

## 📱 Test Checklist

- [ ] Mobil görünümde (890px altı) "Cihaz Sat" butonu logonun yanında görünüyor mu?
- [ ] Drawer menüsünde "Cihaz Sat" butonu yok mu?
- [ ] Desktop görünümde (890px üstü) eski görünüm korunuyor mu?
- [ ] Buton tıklanabilir ve doğru yere scroll ediyor mu?
- [ ] Farklı ekran boyutlarında (768px, 480px, 360px) görünüm düzgün mü?

---

**Not:** Vercel deployment genellikle 1-2 dakika sürer. Deployment tamamlandıktan sonra test edin.

