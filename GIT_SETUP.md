# Git Repository Kurulum Komutları

Bu dosyadaki komutları **sırayla** terminal'de çalıştırın.

## ⚠️ ÖNEMLİ: Her komutu ayrı satırda çalıştırın!

---

## 1. Mevcut Remote'u Kontrol Et

```bash
git remote -v
```

**Beklenen çıktı:** Eski template repo'yu göreceksiniz. Bu normal, düzelteceğiz.

---

## 2. Eski Remote'u Kaldır

```bash
git remote remove origin
```

**Hata alırsanız:** Eğer "error: No such remote 'origin'" hatası alırsanız, remote zaten yok demektir, devam edin.

---

## 3. Yeni Remote'u Ekle

```bash
git remote add origin https://github.com/redmobiletr/redmobile-web.git
```

---

## 4. Remote'un Doğru Eklendiğini Kontrol Et

```bash
git remote -v
```

**Beklenen çıktı:**
```
origin  https://github.com/redmobiletr/redmobile-web.git (fetch)
origin  https://github.com/redmobiletr/redmobile-web.git (push)
```

---

## 5. Tüm Değişiklikleri Stage'e Al

```bash
git add .
```

Bu komut:
- Değiştirilmiş dosyaları ekler
- Silinmiş dosyaları ekler
- Yeni dosyaları ekler

---

## 6. Commit Oluştur

```bash
git commit -m "Initial commit: Red Mobile production-ready project"
```

**Hata alırsanız:** Eğer "nothing to commit" hatası alırsanız, zaten commit edilmiş demektir, devam edin.

---

## 7. Branch'i main'e Çevir (master → main)

```bash
git branch -M main
```

Bu komut mevcut branch'i (master) main olarak yeniden adlandırır.

---

## 8. GitHub'a Push Et

```bash
git push -u origin main
```

**⚠️ AUTHENTICATION GEREKEBİLİR:**

Eğer authentication hatası alırsanız:

### Seçenek 1: Personal Access Token (Önerilen)
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" tıklayın
3. `repo` scope'unu seçin
4. Token'ı kopyalayın
5. Push yaparken password yerine bu token'ı kullanın

### Seçenek 2: GitHub CLI
```bash
gh auth login
```

### Seçenek 3: SSH Key (Uzun vadeli çözüm)
SSH key'iniz varsa remote URL'i değiştirin:
```bash
git remote set-url origin git@github.com:redmobiletr/redmobile-web.git
git push -u origin main
```

---

## 9. Push Başarılı mı Kontrol Et

```bash
git status
```

**Beklenen çıktı:**
```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

## ✅ TAMAMLANDI!

Projeniz artık GitHub'da: https://github.com/redmobiletr/redmobile-web

---

## 🔧 Yaygın Hatalar ve Çözümleri

### Hata: "remote origin already exists"
**Çözüm:**
```bash
git remote remove origin
git remote add origin https://github.com/redmobiletr/redmobile-web.git
```

### Hata: "failed to push some refs"
**Çözüm:** GitHub'da repo boş değilse:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Hata: "authentication failed"
**Çözüm:** Personal Access Token kullanın (yukarıdaki Seçenek 1)

### Hata: "branch 'main' does not exist"
**Çözüm:** Branch zaten main ise:
```bash
git branch
# Eğer main görüyorsanız:
git push -u origin main
```

---

## 📋 Özet Komut Listesi (Kopyala-Yapıştır)

```bash
git remote -v
git remote remove origin
git remote add origin https://github.com/redmobiletr/redmobile-web.git
git remote -v
git add .
git commit -m "Initial commit: Red Mobile production-ready project"
git branch -M main
git push -u origin main
```

**Not:** Her komutu ayrı satırda çalıştırın!

