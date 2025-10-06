# Cara Menjalankan Aplikasi Futsal Sparring

## Backend
1. Buka terminal/command prompt di folder:
   ```
   d:\Futsal Project\futsal-sparring\futsal-sparring\backend
   ```
2. Install dependencies (hanya sekali):
   ```
   npm install
   ```
3. Jalankan server backend:
   ```
   node server.js
   ```
   Backend berjalan di http://localhost:3001

## Frontend
1. Buka terminal/command prompt di folder:
   ```
   d:\Futsal Project\futsal-sparring\futsal-sparring\frontend
   ```
2. Install dependencies (hanya sekali):
   ```
   npm install
   ```
3. Jalankan frontend React:
   ```
   npm start
   ```
   Frontend berjalan di http://localhost:3000

## Cara Kerja
- Untuk daftar dan login, frontend akan mengirim request ke backend (`/register` dan `/login`).
- Backend akan menghubungi Supabase untuk autentikasi dan database.
- Jika berhasil, Anda akan menerima email konfirmasi saat daftar, dan bisa login setelah konfirmasi.

## Catatan
- Pastikan backend tetap berjalan selama Anda mengakses website.
- Jika ingin akses dari device lain, pastikan firewall mengizinkan port 3001 dan gunakan IP lokal Anda.
- Jika ada error, cek pesan di modal dan terminal backend untuk debug.