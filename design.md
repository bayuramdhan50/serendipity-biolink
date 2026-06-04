# Spesifikasi Desain UI/UX - Biolink Serendipity Community

## 1. Tema & Nuansa
- **Tema**: Dark Modern Gaming / Neon Cyberpunk Subtle
- **Karakteristik**: Estetika modern, minimalis dengan efek neon glow lembut pada interaksi, latar belakang gelap dengan saturasi biru/slate yang menenangkan mata, transisi super halus (smooth transition), ramah seluler (mobile-first).

## 2. Palet Warna (CSS Variables)
Sistem warna menggunakan palet Slate dan aksen biru elektrik:
- `---bg-color`: `#0f172a` (Slate 900) - Latar belakang utama.
- `--text-primary`: `#f8fafc` (Slate 50) - Teks judul dan konten utama.
- `--text-secondary`: `#94a3b8` (Slate 400) - Deskripsi dan detail kecil.
- `--btn-bg`: `#1e293b` (Slate 800) - Latar belakang tombol default.
- `--btn-hover`: `#334155` (Slate 700) - Keadaan hover tombol.
- `--accent-color`: `#3b82f6` (Blue 500) - Warna aksen/sorotan/glow.
- `--accent-glow`: `rgba(59, 130, 246, 0.15)` - Bayangan glow untuk interaksi.
- `--border-color`: `rgba(255, 255, 255, 0.05)` - Batas tipis yang elegan.

## 3. Tipografi
Menggunakan font **'Inter'** (primer) dan **'Poppins'** (opsional untuk judul) yang dimuat dari Google Fonts untuk tampilan profesional.
- **Judul Profil**: `20px` / Font Weight: `700` (Bold)
- **Teks Deskripsi / Bio**: `14px` / Font Weight: `400` (Regular)
- **Label Tombol**: `16px` / Font Weight: `600` (Semi-Bold)
- **Teks Footer**: `12px` / Font Weight: `400` (Regular)

## 4. Spasi (Spacing) & Tata Letak (Layout)
- **Lebar Maksimum**: `600px` (terpusat secara horizontal di desktop, lebar penuh dengan margin di mobile).
- **Padding Tombol**: `16px 24px` untuk memberikan area sentuh yang luas sesuai standar kegunaan mobile (min. 48px).
- **Jarak Antar Tombol**: `16px` (gap pada flex container).
- **Padding Kontainer Utama**: `40px 24px` di desktop, `32px 16px` di mobile.
- **Struktur Layout**:
  - `body`: Flexbox terpusat (`justify-content: center`, `align-items: center` jika di desktop dengan min-height `100vh`).
  - `.container`: Flexbox vertikal (`flex-direction: column`).
  - `.links-container`: Flexbox vertikal dengan `gap: 16px`.

## 5. Efek Visual & Transisi
- **Transisi**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` untuk perubahan halus.
- **Hover/Touch State**:
  - Skala membesar menjadi `1.02` (`transform: scale(1.02)`).
  - Glow tipis di sekeliling tombol (`box-shadow`).
  - Pergeseran warna tombol ke `--btn-hover` dan sedikit kecerahan pada teks.
- **Animasi Masuk (Fade In)**: Elemen profil dan tombol masuk satu per satu secara berurutan (staggered delay) menggunakan animasi CSS keyframes dengan manipulasi kelas aktif via JavaScript.
