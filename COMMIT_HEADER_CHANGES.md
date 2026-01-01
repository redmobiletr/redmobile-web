# Commit Komutları - Header Değişiklikleri

Aşağıdaki komutları **sırayla** terminal'de çalıştırın:

## 1. Sadece Header Dosyalarını Stage'e Al

```bash
cd /Users/vidin/redmobile-react-web
git add src/components/Header/index.tsx src/components/Header/styles.ts
```

## 2. Commit Oluştur

```bash
git commit -m "feat: Mobil görünümde Cihaz Sat butonu hamburger menü yanına taşındı - Profesyonel tasarım iyileştirmeleri"
```

## 3. GitHub'a Push Et

```bash
git push origin main
```

---

## ⚠️ Not: package-lock.json

`package-lock.json` değişmiş görünüyor ama local config olarak kabul edip commit etmedik. Eğer dependency değişiklikleri varsa ve commit etmek isterseniz:

```bash
git add package-lock.json
git commit -m "chore: Update package-lock.json"
```

Ama genelde sadece Header değişikliklerini commit etmek yeterli.

---

## ✅ Tamamlandı!

Değişiklikler GitHub'a gönderildi. Vercel otomatik olarak yeni deployment başlatacak.

