import React from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan import ini
import "bootstrap/dist/css/bootstrap.min.css";

// Header setelah login
function DashboardHeader({ user, onLogout }) {
  const navigate = useNavigate();
  return (
    <header className="bg-dark text-white px-4 py-2 d-flex align-items-center justify-content-between position-fixed w-100" style={{borderRadius: "0 0 12px 12px", top: 0, left: 0, zIndex: 1000}}>
      <div className="d-flex align-items-center gap-2">
        {/* Ganti icon dengan icon-utama.png */}
        <img src={require("./assets/icon-utama.png")} alt="Logo" style={{width: 32, height: 32}} />
        <span className="fw-bold fs-4">Futsal Sparring</span>
      </div>
      <nav>
        <ul className="nav gap-3">
          <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Tentang</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Tim Saya</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Cari Lawan</a></li>
          <li className="nav-item">
            <button className="nav-link text-success fw-bold bg-transparent border-0" onClick={() => navigate("/profile")}>Profil</button>
          </li>
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={onLogout}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
}

// Hero Section setelah login
function DashboardHero({ user }) {
  const hasTeam = user?.team;
  return (
    <section className="position-relative w-100" style={{height: 220, overflow: "hidden", margin: 0, padding: 0, borderRadius: 0}}>
      <img
        src={require("./assets/futsal-main.png")}
        alt="Lapangan Futsal"
        className="w-100 h-100"
        style={{objectFit: "cover", filter: "brightness(0.6)"}}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start text-white px-4" style={{paddingTop: 56}}>
        <h2 className="fw-bold mb-2" style={{fontSize: "2rem", textShadow: "0 2px 8px #000"}}>Halo, {user?.name} 👋</h2>
        <p className="mb-2 fs-5" style={{textShadow: "0 1px 6px #000"}}>
          {hasTeam
            ? `Tim kamu: ${user.team.name} (${user.team.members} anggota)`
            : "Kamu belum punya tim, ayo buat tim!"}
        </p>
      </div>
    </section>
  );
}

// Dashboard Ringkas
function DashboardSummary({ user }) {
  // Dummy data
  const sparring = user?.sparring || { date: "2024-07-10", opponent: "Rajawali FC" };
  const notifications = user?.notifications || [
    { id: 1, text: "Undangan sparring dari Pheenix SC", date: "2024-07-05" }
  ];
  return (
    <section className="container my-4">
      <div className="row g-3">
        <div className="col-md-4">
          <div className="bg-white rounded-4 shadow-sm p-3">
            <div className="fw-bold mb-1">Tim Saya</div>
            {user?.team
              ? <div>{user.team.name} <span className="text-muted">({user.team.members} anggota)</span></div>
              : <div className="text-muted">Belum punya tim</div>
            }
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white rounded-4 shadow-sm p-3">
            <div className="fw-bold mb-1">Sparring Terjadwal</div>
            {sparring
              ? <div>{sparring.date} vs <span className="fw-bold">{sparring.opponent}</span></div>
              : <div className="text-muted">Belum ada jadwal</div>
            }
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white rounded-4 shadow-sm p-3">
            <div className="fw-bold mb-1">Notifikasi</div>
            {notifications.length > 0
              ? notifications.map(n => (
                  <div key={n.id} className="mb-1">{n.text} <span className="text-muted small">({n.date})</span></div>
                ))
              : <div className="text-muted">Tidak ada notifikasi</div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

// Action Cards
function DashboardActions() {
  const navigate = useNavigate();
  return (
    <section className="container mb-5">
      <div className="row justify-content-center gap-3">
        <div className="col-md-3 col-10 bg-white rounded-4 shadow-sm p-4 text-center">
          <div style={{fontSize: 32}}>🆕</div>
          <div className="fw-bold fs-5 mb-1">Buat Tim Baru</div>
          <div className="text-muted mb-2">Bentuk tim futsal impianmu</div>
          <button className="btn btn-success" onClick={() => navigate("/create-team")}>Buat Tim</button>
        </div>
        <div className="col-md-3 col-10 bg-white rounded-4 shadow-sm p-4 text-center">
          <div style={{fontSize: 32}}>🔍</div>
          <div className="fw-bold fs-5 mb-1">Cari Lawan Sparring</div>
          <div className="text-muted mb-2">Temukan tim lain di kotamu</div>
          <button className="btn btn-primary">Cari Lawan</button>
        </div>
        <div className="col-md-3 col-10 bg-white rounded-4 shadow-sm p-4 text-center">
          <div style={{fontSize: 32}}>📅</div>
          <div className="fw-bold fs-5 mb-1">Lihat Jadwal Sparring</div>
          <div className="text-muted mb-2">Cek jadwal pertandinganmu</div>
          <button className="btn btn-outline-dark">Lihat Jadwal</button>
        </div>
      </div>
    </section>
  );
}

// Footer sama seperti sebelumnya
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-3 rounded-top-4">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <a href="#" className="text-white me-3">Tentang</a>
          <a href="#" className="text-white me-3">Kontak</a>
          <a href="#" className="text-white">FAQ</a>
        </div>
        <div className="text-muted small">
          © 2024 Futsal Sparring. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Dashboard({ user, onLogout }) {
  React.useEffect(() => {
    document.body.style.paddingTop = "56px";
    return () => { document.body.style.paddingTop = "0"; };
  }, []);
  return (
    <div style={{background: "#6c757d", minHeight: "100vh"}}>
      <DashboardHeader user={user} onLogout={onLogout} />
      <div className="container py-4" style={{marginTop: 0}}>
        <DashboardHero user={user} />
        <DashboardSummary user={user} />
        <DashboardActions />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
