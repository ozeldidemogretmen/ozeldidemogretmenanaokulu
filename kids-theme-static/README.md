# 🎈 Kids Theme - Statik Site

**Orijinal Tema:** cmsmasters Kids WordPress Theme  
**Tip:** Tamamen statik HTML/CSS/JS klonu (WordPress gerektirmez)  
**Platform:** GitHub Pages uyumlu

---

## 📁 Dosya Yapısı

```
kids-theme-static/
├── index.html          # Ana sayfa
├── css/
│   └── style.css       # Tüm stiller
├── js/
│   └── main.js         # Animasyonlar ve etkileşimler
└── img/                # Görseller (sen ekleyeceksin)
    ├── hero.jpg
    ├── post1.jpg ~ post6.jpg
    └── gallery1.jpg ~ gallery6.jpg
```

---

## 🚀 GitHub Pages'de Yayınlama

### 1. Repo Oluştur
- GitHub'da yeni repo aç (örn: `kids-anaokulu`)
- Public yap

### 2. Dosyaları Yükle
```bash
cd kids-theme-static
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/kids-anaokulu.git
git push -u origin main
```

### 3. GitHub Pages Aktif Et
- Repo → **Settings** → **Pages**
- Branch: `main`, Folder: `/ (root)`
- Kaydet ve 1-2 dakika bekle
- Site adresin: `https://kullanici_adin.github.io/kids-anaokulu`

---

## 🖼️ Görselleri Değiştirme

### Yöntem 1: Kendi Görsellerini Koy (Önerilen)
`img/` klasörüne aşağıdaki isimlerde görseller ekle:

| Dosya Adı | Boyut Önerisi | Açıklama |
|-----------|--------------|----------|
| `hero.jpg` | 800x500 | Ana sayfa büyük görsel |
| `post1.jpg` ~ `post6.jpg` | 600x400 | Blog yazı kapakları |
| `gallery1.jpg` ~ `gallery6.jpg` | 600x450 | Galeri görselleri |

> 💡 **İpucu:** Görselleri eklemeden önce siteyi açarsan, Unsplash'dan otomatik placeholder görseller gelir. Bunları gördüğün yerde kendi görsellerini koy.

### Yöntem 2: Unsplash Placeholder (Hızlı Test)
Görselleri eklemezsen, `onerror` özelliği sayesinde otomatik olarak ücretsiz Unsplash görselleri yüklenir.

---

## ✏️ İçerik Düzenleme

### Metinleri Değiştir
- `index.html` dosyasını bir metin editörü (VS Code, Notepad++, vb.) ile aç
- İstediğin metni bul ve değiştir
- Kaydet ve GitHub'a push et

### Renkleri Değiştir
`css/style.css` dosyasının en üstündeki `:root` bölümünde:
```css
:root {
  --color-primary: #ff6b35;    /* Ana turuncu */
  --color-secondary: #f7c948;  /* Sarı */
  --color-accent-green: #4ecdc4; /* Yeşil */
  --color-accent-pink: #ff6b9d;  /* Pembe */
  --color-accent-purple: #9b59b6; /* Mor */
  ...
}
```

### Yeni Blog Yazısı Ekle
`index.html`'de `<div class="posts-grid">` içine yeni bir `<article class="post-card">` bloğu kopyala-yapıştır.

### Yeni Galeri Fotoğrafı Ekle
`index.html`'de `<div class="gallery-grid">` içine yeni bir `<div class="gallery-item">` bloğu ekle.

---

## 🎨 Tasarım Özellikleri

| Özellik | Açıklama |
|---------|----------|
| **Responsive** | Mobil, tablet ve masaüstü uyumlu |
| **Animasyonlar** | Scroll reveal, hover efektleri, floating cards |
| **Lightbox** | Galeri görsellerine tıklayınca büyük görünüm |
| **Smooth Scroll** | Menü linklerine tıklayınca yumuşak kaydırma |
| **Sticky Header** | Sayfayı aşağı kaydırınca header sabit kalır |
| **Mobile Menu** | Hamburger menü (768px altında) |
| **Parallax** | Arka plan şekilleri parallax efekti |

---

## 📱 Tarayıcı Desteği

- ✅ Chrome / Edge / Safari / Firefox (son 2 versiyon)
- ✅ iOS Safari / Android Chrome
- ✅ IE11 desteklenmez (ES6+ kullanılıyor)

---

## ⚡ Performans İpuçları

1. Görselleri WebP formatında kaydet (daha hızlı yüklenir)
2. Görselleri [TinyPNG](https://tinypng.com/) ile sıkıştır
3. Font Awesome yerine inline SVG kullanıldı (ek HTTP isteği yok)

---

## 📄 Lisans

Bu statik klon kişisel ve ticari kullanım için uygundur. Orijinal WordPress teması cmsmasters'a aittir.

---

**Hazırlayan:** Statik klon - GitHub Pages uyumlu  
**Son Güncelleme:** 2025
