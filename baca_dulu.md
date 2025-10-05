# Berikut cara menjalankan aplikasi Anda:
1. Buka terminal/command prompt di folder 
d:\Project Web Futsal\futsal-sparring.
2. Masuk ke folder backend:
cd backend
3. Install dependencies (hanya sekali):
npm install
4. Jalankan server backend:
node server.js
Backend akan berjalan di http://localhost:3001.

# Jalankan Frontend
1. Buka folder d:\Project Web Futsal\futsal-sparring\frontend.
2. Buka file index.html dengan browser (klik dua kali atau klik kanan → Open with browser).

# Cara Kerja
1. Untuk daftar dan login, frontend akan mengirim request ke backend (http://localhost:3001/register dan /login).
2. Backend akan menghubungi Supabase untuk autentikasi.
3. Jika berhasil, Anda akan menerima email konfirmasi saat daftar, dan bisa login setelah konfirmasi.

# Catatan:
Pastikan backend tetap berjalan selama Anda mengakses website.
Jika ingin akses dari device lain, pastikan firewall mengizinkan port 3001 dan gunakan IP lokal Anda.
Jika ada error, cek pesan di modal dan terminal backend untuk debug.