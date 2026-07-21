# PTN INFO - Informasi Perguruan Tinggi Negeri Indonesia

**Project Pembelajaran Frontend - Semester 1**

---

## Tentang Project

PTN INFO adalah website informasi yang menyediakan data lengkap tentang Perguruan Tinggi Negeri (PTN) terkemuka di Indonesia. Project ini dibuat sebagai **startline (project awal) pembelajaran frontend** pada semester 1 untuk mempelajari dasar-dasar HTML, CSS, dan JavaScript.

**Author:** Karim  
**Kolaborator but in irl:** Altaf

**Tujuan web bg toyib ini dibuat:** Membantu calon mahasiswa menemukan dan mempelajari informasi lengkap tentang universitas negeri pilihan mereka sebelum mendaftar.

---

## Fitur Utama

### 1. **Homepage dengan Daftar Kampus**
- Halaman utama yang menampilkan grid 16 PTN terkemuka Indonesia
- Setiap kampus ditampilkan dalam kartu dengan gambar dan deskripsi singkat
- Koneksi ke halaman detail masing-masing universitas

### 2. **Fitur Pencarian Real-Time**
- Search bar di bagian atas untuk mencari kampus berdasarkan nama atau deskripsi
- Filtering otomatis saat user mengetik
- Pesan notifikasi jika kampus tidak ditemukan
- Normalisasi teks untuk hasil pencarian yang akurat (lowercase, hapus spesial char)

### 3. **Dark Mode Toggle**
- Tombol toggle dark mode di pojok kanan bawah (fixed position)
- Meningkatkan UX dengan opsi mode gelap untuk penggunaan malam hari

### 4. **Halaman Detail Universitas**
Setiap kampus memiliki halaman detail dengan sub-menu:
- **Akademik** - Fakultas, program studi, dan kurikulum
- **Riset dan Inovasi** - Pusat penelitian dan proyek inovasi
- **Kampus** - Fasilitas, infrastruktur, dan lokasi
- **Kemahasiswaan** - Kegiatan, organisasi, dan beasiswa
- **Berita dan Pengumuman** - Update terkini universitas
- **Tentang** - Informasi sejarah dan profil kampus

### 5. **Navigation Menu**
- Header dengan navigation bar yang berisi ikon-ikon (Home, University, Book, Users, Phone)
- Design yang clean dan intuitif
- Sticky header untuk kemudahan navigasi

---

## Cara Menjalankan Project

1. **Buka Folder Project**
   ```
   Buka folder "2" di VS Code atau text editor pilihan Anda
   ```

2. **Jalankan di Browser**
   - Klik kanan pada file `2.html`
   - Pilih "Open with Live Server" (jika menggunakan Live Server extension)
   - Atau buka file langsung di browser: `file:///D:/2/2.html`

3. **Navigasi**
   - Gunakan search bar untuk mencari kampus
   - Klik kartu kampus untuk melihat detail
   - Gunakan menu navigasi untuk menjelajahi sub-menu
   - Toggle dark mode dengan tombol moon icon di pojok kanan bawah

---

## Teknologi yang Digunakan

### Frontend Stack:
- **HTML5** - Struktur dan semantik halaman
- **CSS3** - Styling dan layout responsif
- **Vanilla JavaScript** - Interaktivitas (pencarian)

### Library & Framework:
- **Font Awesome 6.4.0** - Ikon-ikon website
- **CDN** - Font Awesome di-load dari CDN

## Konsep Pembelajaran yang Digunakan

Project ini mencakup pembelajaran dasar frontend:

### 1. **HTML**
- Struktur semantic HTML5
- Form input untuk search
- Linking antar halaman
- Meta tags untuk responsivitas

### 2. **CSS**
- Flexbox dan Grid layout
- Styling cards dan components
- Responsive design (mobile-first approach)
- Pseudo-classes dan transitions
- Dark mode dengan CSS variables 

### 3. **JavaScript**
- Event listeners (DOMContentLoaded, input events)
- DOM manipulation (querySelector, style manipulation)
- String methods (toLowerCase, replace, includes, trim)
- Conditional logic dan loops
- Function untuk normalisasi text

### 4. **UX/UI Principles**
- Navigation intuitif
- Search functionality
- Visual hierarchy
- Responsive design
- Accessibility dengan icons

---

## Pembelajaran Kunci dari Project Ini

Sebagai project **startline semester 1**, berikut adalah pembelajaran penting yang didapat:

**Fundamental HTML/CSS**
- Membuat struktur halaman yang terorganisir
- Styling dengan CSS yang efisien
- Responsive layout untuk berbagai ukuran layar

**Interaktivitas JavaScript**
- Menangani user input
- DOM manipulation
- Event handling
- String processing dan normalisasi data

**File Organization**
- Struktur folder yang terorganisir
- Separation of concerns (HTML, CSS, JS terpisah)
- Naming convention yang konsisten


