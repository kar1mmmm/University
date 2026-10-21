# PTN INFO - Informasi Perguruan Tinggi Negeri Indonesia

Project pembelajaran frontend semester 1.

**Nama:** Karim
**NIM:** 2511532029
**Kolaborator:** Altaf

## Tentang Project

PTN INFO adalah website informasi Perguruan Tinggi Negeri (PTN) di Indonesia, dibuat sebagai project awal untuk belajar dasar HTML, CSS, dan JavaScript. Tujuannya membantu calon mahasiswa mencari informasi PTN sebelum mendaftar.

## Fitur

- Homepage menampilkan daftar PTN; data dimuat dari `data.json` lewat `fetch()` dan dirender ke DOM (`main.js`)
- Pencarian real-time berdasarkan nama atau deskripsi kampus
- Dark mode toggle, preferensi disimpan di `localStorage`
- Form kontak dengan validasi sisi klien (nama, email, pesan)
- PWA: `manifest.json`, service worker (`sw.js`), dan halaman fallback `offline.html`
- Halaman detail tiap kampus: Akademik, Riset dan Inovasi, Kampus, Kemahasiswaan, Berita, Tentang

## Cara Menjalankan

Project wajib dijalankan lewat server lokal (bukan `file://`), karena memakai `fetch()` ke `data.json` dan service worker yang hanya bekerja di `http(s)://` atau `localhost`.

- Python: `python -m http.server 8000` lalu buka `http://localhost:8000/2.html`
- VS Code: klik kanan `2.html` → "Open with Live Server"

Menguji fitur offline: buka situs lewat server lokal, buka DevTools (F12) → tab **Application** → **Service Workers** untuk memastikan `sw.js` aktif, lalu centang **Offline** di tab **Network** dan refresh. Halaman utama tetap tampil dari cache; halaman yang belum pernah dibuka akan menampilkan `offline.html`.

## Catatan

- Form kontak baru validasi di sisi klien, belum mengirim data ke server
- Ikon PWA dibuat sendiri, belum pakai logo resmi

## Teknologi

- HTML5, CSS3, vanilla JavaScript
- Font Awesome 6.4.0 (CDN)
