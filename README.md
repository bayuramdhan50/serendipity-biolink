# Biolink Serendipity Community

Biolink minimalis, responsif (mobile-first), dan berkinerja tinggi untuk mengarahkan audiens media sosial (seperti TikTok) ke berbagai platform resmi **Serendipity Community**.

## 🚀 Fitur Utama
- **Desain Modern & Imersif**: Menggunakan tema gelap modern (Dark Modern Gaming) dengan efek ambient glow lembut dan transisi mulus.
- **Responsif & Ringan**: Dibangun dengan HTML5, CSS3, dan Vanilla JS murni tanpa framework eksternal, menjamin pemuatan halaman yang sangat cepat di perangkat seluler.
- **Efek Transisi & Hover**: Respons visual (skala tombol, perubahan warna, efek glowing, dan pergeseran ikon panah) saat kursor diarahkan atau disentuh.
- **Animasi Masuk Staggered**: Efek fade-in berurutan pada setiap tautan saat halaman pertama kali dimuat.
- **SEO Friendly**: Struktur HTML semantik dengan metadata dasar terkonfigurasi.

## 📁 Struktur Direktori
```text
serendipity-biolink/
├── index.html
├── design.md
├── README.md
└── assets/
    ├── css/
    │   ├── style.css
    │   └── variables.css
    ├── js/
    │   └── main.js
    └── images/
        ├── favicon.ico
        ├── profile-pic.jpg
        ├── logo-discord.svg
        ├── logo-roblox.svg
        └── logo-saweria.svg
```

## 🛠️ Penggunaan & Modifikasi

### 1. Mengubah Tautan Tujuan
Buka file `index.html` dan cari bagian tag `<a>` dengan ID berikut untuk mengganti atribut `href` dengan tautan komunitas Anda yang asli:
- `link-saweria` untuk Saweria (Donasi)
- `link-discord` untuk server Discord
- `link-roblox-map` untuk map permainan Roblox
- `link-roblox-group` untuk profil grup Roblox

### 2. Mengubah Foto Profil
Ganti berkas `assets/images/profile-pic.jpg` dengan gambar persegi (1:1) pilihan Anda.

### 3. Mengubah Deskripsi / Bio
Sesuaikan nama profil dalam tag `<h1>` dan bio dalam tag `<p>` di dalam berkas `index.html`.

## 💻 Cara Menjalankan Lokal
Cukup buka berkas `index.html` langsung di browser Anda, atau jalankan menggunakan ekstensi live server di editor teks Anda (seperti VS Code Live Server).
