import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutPage({ onBack }) {
  return (
    <div style={{background: "#6c757d", minHeight: "100vh"}}>
      <div className="container py-5">
        <div className="bg-white rounded-4 shadow p-4 mx-auto" style={{maxWidth: 700}}>
          <h1 className="fw-bold mb-2 text-center">Tentang Futsal Sparring</h1>
          <p className="fs-5 text-center mb-4">
            <em>"Buat Tim, Temukan Lawan, Rasakan Serunya Pertandingan!"</em>
          </p>
          <h4 className="fw-bold mt-4">Latar Belakang</h4>
          <p>
            Kami tahu sulitnya mencari lawan sparring futsal. Banyak tim ingin main, tapi terkendala karena tidak saling kenal atau tidak ada kontak langsung. Karena itu kami membuat Futsal Sparring, platform untuk mempertemukan tim futsal amatir dengan mudah.
          </p>
          <h4 className="fw-bold mt-4">Visi</h4>
          <p>
            Membuat komunitas futsal amatir yang lebih aktif, mudah berkomunikasi, dan sehat melalui olahraga.
          </p>
          <h4 className="fw-bold mt-4">Misi</h4>
          <ul>
            <li>Mempermudah tim futsal mencari lawan sparring.</li>
            <li>Menyediakan platform komunikasi antar tim.</li>
            <li>Menghubungkan pemain baru yang ingin bergabung ke sebuah tim.</li>
          </ul>
          <h4 className="fw-bold mt-4">Fitur Utama</h4>
          <ul>
            <li>Registrasi & Login cepat.</li>
            <li>Membuat tim atau bergabung ke tim.</li>
            <li>Cari lawan sparring berdasarkan kota/daerah.</li>
            <li>Buat jadwal sparring & konfirmasi lawan.</li>
            <li>Lokasi lapangan futsal dengan Google Maps.</li>
          </ul>
          <h4 className="fw-bold mt-4">Siapa yang Bisa Menggunakan?</h4>
          <ul>
            <li>Pemain futsal amatir.</li>
            <li>Tim lokal yang butuh lawan.</li>
            <li>Komunitas olahraga kampus atau sekolah.</li>
          </ul>
          <h4 className="fw-bold mt-4">Kontak</h4>
          <p>📧 Email: support@futsalsparring.com</p>
          <p>📱 WhatsApp: +62 812-xxxx-xxxx</p>
          <div className="mt-4 text-center">
            <button className="btn btn-secondary" onClick={onBack}>Kembali</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;