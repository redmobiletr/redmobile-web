# Server Hatası Düzeltme Komutları

Hata eski klasör path'i (`landy-react-template`) cache'lenmiş olabilir. Aşağıdaki komutları **sırayla** çalıştırın:

## 1. Çalışan Server'ı Durdur

Eğer server çalışıyorsa, terminal'de `Ctrl+C` tuşlarına basın.

## 2. Webpack Cache'ini Temizle

```bash
cd /Users/vidin/redmobile-react-web
rm -rf node_modules/.cache
```

## 3. NPM Cache'ini Temizle

```bash
npm cache clean --force
```

## 4. Node Modules'ü Yeniden Yükle

```bash
rm -rf node_modules package-lock.json
npm install
```

**Not:** Eğer `rm -rf node_modules` komutu permission hatası verirse, terminal'i yönetici olarak açmayın. Bunun yerine:

```bash
sudo rm -rf node_modules package-lock.json
npm install
```

## 5. Server'ı Başlat

```bash
npm start
```

---

## Alternatif Çözüm (Eğer yukarıdakiler işe yaramazsa)

### Webpack config'i kontrol et:

Bazı durumlarda webpack config dosyasında eski path olabilir. Kontrol edin:

```bash
grep -r "landy-react-template" . --exclude-dir=node_modules --exclude-dir=.git
```

Eğer bir sonuç bulursanız, o dosyalardaki path'leri güncelleyin.

---

## Hızlı Çözüm (En Basit)

Eğer yukarıdakiler çok uzunsa, sadece cache'i temizleyip tekrar başlatın:

```bash
cd /Users/vidin/redmobile-react-web
rm -rf node_modules/.cache
npm start
```

Bu genellikle sorunu çözer.

