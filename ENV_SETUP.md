# Environment Variable Setup

## Hızlı Kurulum

Proje kök dizininde (package.json'un bulunduğu yerde) `.env` dosyası oluşturun:

### Windows (PowerShell)
```powershell
echo "REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/mpqzbqqa" > .env
```

### Mac/Linux (Terminal)
```bash
echo "REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/mpqzbqqa" > .env
```

### Manuel Oluşturma

1. Proje kök dizininde `.env` adında yeni bir dosya oluşturun
2. İçine şunu yazın:
   ```
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/mpqzbqqa
   ```
3. Dosyayı kaydedin

## Önemli Notlar

- `.env` dosyası proje kök dizininde olmalı (package.json ile aynı seviyede)
- Dosya adı tam olarak `.env` olmalı (başında nokta var, uzantı yok)
- Development server'ı yeniden başlatmanız gerekebilir:
  ```bash
  # Ctrl+C ile durdurun, sonra:
  npm start
  ```

## Doğrulama

`.env` dosyasını oluşturduktan sonra:

1. Development server'ı yeniden başlatın
2. Formu test edin
3. Hata mesajı gitmeli

## Vercel Deployment

Vercel'de environment variable eklemek için:

1. Vercel dashboard'a gidin
2. Projenizi seçin
3. Settings > Environment Variables
4. Yeni variable ekleyin:
   - **Key**: `REACT_APP_FORMSPREE_ENDPOINT`
   - **Value**: `https://formspree.io/f/mpqzbqqa`
5. Redeploy yapın

