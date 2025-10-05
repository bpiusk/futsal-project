import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Dashboard from "./Dashboard";
import AboutPage from "./AboutPage";
import CreateTeamPage from "./CreateTeamPage";
import ProfilePage from "./ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap"; // Tambahkan ini

const teams = [
  { name: "FC Garuda", city: "Jakarta", members: 10 },
  { name: "Rajswali FC", city: "Surabaya", members: 12 },
  { name: "Bandung", city: "Surabaya", members: 9 },
  { name: "FC Garuda", city: "Jakarta", members: 12 },
  { name: "Pheenix SC", city: "Sumedang", members: 12 },
  { name: "Lion XIII", city: "Yogyakarta", members: 9 },
];

function LandingHeader() {
  const navigate = useNavigate();
  return (
    <header className="bg-dark text-white px-4 py-2 d-flex align-items-center justify-content-between position-fixed w-100" style={{borderRadius: "0 0 12px 12px", top: 0, left: 0, zIndex: 1000}}>
      <div className="d-flex align-items-center gap-2">
        <img src={require("./assets/icon-utama.png")} alt="Logo" style={{width: 32, height: 32, filter: "brightness(0) invert(1)"}} />
        <span className="fw-bold fs-4">Futsal Sparring</span>
      </div>
      <nav>
        <ul className="nav gap-3">
          <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
          <li className="nav-item">
            <button className="nav-link text-white bg-transparent border-0" onClick={() => navigate("/about")}>Tentang</button>
          </li>
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={() => navigate("/login")}>Login</button></li>
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={() => navigate("/register")}>Daftar</button></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection({ onLogin, onRegister }) {
  return (
    <section className="position-relative w-100" style={{height: 420, overflow: "hidden", margin: 0, padding: 0, borderRadius: 0}}>
      <img
        src={require("./assets/futsal-main.png")}
        alt="Lapangan Futsal"
        className="w-100 h-100"
        style={{objectFit: "cover", filter: "brightness(0.6)"}}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start text-white px-4" style={{paddingTop: 120}}>
        <h2 className="fw-bold mb-3" style={{fontSize: "2.2rem", textShadow: "0 2px 8px #000", maxWidth: 700}}>Cari Lawan Sparring Futsal Lebih Mudah</h2>
        <p className="mb-4 fs-5" style={{textShadow: "0 1px 6px #000", maxWidth: 400}}>
          Buat tim, temukan lawan, dan mulai pertandingan tanpa ribet.
        </p>
        <div className="d-flex gap-3">
          <button className="btn btn-success btn-lg px-4" onClick={onRegister}>Daftar Sekarang</button>
          <button className="btn btn-outline-light btn-lg px-4" onClick={onLogin}>Login</button>
        </div>
      </div>
    </section>
  );
}

function MainFeatures({ user, onBuatTimClick }) {
  return (
    <section className="container mb-5">
      <div className="row mb-3">
        <div className="col-12">
          <h4 className="fw-bold" style={{color: "#fff"}}>Fitur Utama</h4>
        </div>
      </div>
      <div className="row justify-content-center gap-3">
        <div className="col-md-3 col-10 bg-white rounded-4 shadow-sm p-4 text-center">
          <div className="mb-2">
            <img
              src={require("./assets/icon-buat-tim.png")}
              alt="Buat Tim"
              style={{width: 36, height: 36, filter: "invert(38%) sepia(94%) saturate(747%) hue-rotate(85deg) brightness(90%) contrast(90%)"}}
            />
          </div>
          <div className="fw-bold fs-5 mb-1">Buat Tim</div>
          <div className="text-muted mb-2">Bentuk tim futsal impianmu dengan mudah</div>
        </div>
        <div className="col-md-3 col-10 bg-white rounded-4 shadow-sm p-4 text-center">
          <div className="mb-2">
            <img
              src={require("./assets/icon-cari-lawan.png")}
              alt="Cari Lawan"
              style={{width: 36, height: 36, filter: "invert(38%) sepia(94%) saturate(747%) hue-rotate(85deg) brightness(90%) contrast(90%)"}}
            />
          </div>
          <div className="fw-bold fs-5 mb-1">Cari Lawan</div>
          <div className="text-muted mb-1">Temukan tim lain di kotamu</div>
        </div>
        <div className="col-md-3 col-10 bg-white rounded-4 shadow-sm p-4 text-center">
          <div className="mb-2">
            <img
              src={require("./assets/icon-atur-sparring.png")}
              alt="Atur Sparring"
              style={{width: 36, height: 36, filter: "invert(38%) sepia(94%) saturate(747%) hue-rotate(85deg) brightness(90%) contrast(90%)"}}
            />
          </div>
          <div className="fw-bold fs-5 mb-1">Atur Sparring</div>
          <div className="text-muted">Tantang tim lain dan jadwalkan pertandingan</div>
        </div>
      </div>
    </section>
  );
}

function PopularTeams() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{marginTop: 32, marginBottom: 0}}>
      <div className="row mb-2">
        <div className="col-12">
          <h4 className="fw-bold" style={{color: "#fff"}}>Cari Lawan Sparring</h4>
        </div>
      </div>
      <section className="py-5" style={{background: "#d1e7dd", borderRadius: 16, margin: 0}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4 d-flex flex-column justify-content-center">
              <div className="fw-bold fs-5 mb-2">Sudah siap adu skill?</div>
              <div className="mb-3">Ajak timmu dan mulai cari lawan sekarang.</div>
              <button className="btn btn-success" onClick={() => navigate("/register")}>Buat Akun Gratis</button>
            </div>
            <div className="col-lg-9">
              <div className="row g-3">
                {teams.map((team, idx) => (
                  <div key={idx} className="col-md-4">
                    <div className="bg-white rounded-4 shadow-sm p-3 d-flex flex-column h-100">
                      <div className="fw-bold fs-5 mb-1">{team.name}</div>
                      <div className="text-muted mb-1">{team.city}</div>
                      <div className="mb-2">Anggota: {team.members}</div>
                      <button className="btn btn-outline-success mt-auto">Lihat Detail</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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

function LandingPage({ user, onBuatTimClick }) {
  const navigate = useNavigate();
  return (
    <div style={{background: "#6c757d", minHeight: "100vh"}}>
      <LandingHeader />
      <div className="container py-4" style={{marginTop: 0}}>
        <HeroSection onLogin={() => navigate("/login")} onRegister={() => navigate("/register")} />
        <MainFeatures user={user} onBuatTimClick={onBuatTimClick} />
        <PopularTeams />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  function LandingPageWrapper() {
    const navigate = useNavigate();
    return (
      <LandingPage
        user={user}
        onBuatTimClick={() => {
          navigate("/create-team");
        }}
      />
    );
  }

  // Wrapper agar bisa akses navigate
  function LoginWrapper() {
    const navigate = useNavigate();
    return (
      <LoginPage
        onLoginSuccess={userData => {
          setUser(userData);
          navigate("/dashboard");
        }}
        onBack={() => navigate("/")}
      />
    );
  }

  function RegisterWrapper() {
    const navigate = useNavigate();
    return (
      <RegisterPage
        onRegisterSuccess={() => navigate("/login")}
        onBack={() => navigate("/")}
      />
    );
  }

  function DashboardWrapper() {
    const navigate = useNavigate();
    React.useEffect(() => {
      if (!user) navigate("/login");
    }, [user, navigate]);
    return user ? <Dashboard user={user} onLogout={() => { setUser(null); navigate("/"); }} /> : null;
  }

  function AboutWrapper() {
    const navigate = useNavigate();
    return <AboutPage onBack={() => navigate("/")} />;
  }

  function CreateTeamWrapper() {
    const navigate = useNavigate();
    return (
      <CreateTeamPage
        user={user}
        onTeamCreated={team => {
          // Simpan ke state user agar muncul di Dashboard
          setUser({ ...user, team });
          navigate("/dashboard");
        }}
        onBack={() => navigate("/dashboard")}
      />
    );
  }

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPageWrapper />} />
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/register" element={<RegisterWrapper />} />
          <Route path="/dashboard" element={<DashboardWrapper />} />
          <Route path="/about" element={<AboutWrapper />} />
          <Route path="/create-team" element={<CreateTeamWrapper />} />
          <Route path="/profile" element={<ProfilePage user={user} onLogout={() => { setUser(null); }} />} />
        </Routes>
        {/* Hapus AuthModal, tidak perlu pop up lagi */}
      </>
    </Router>
  );
}

export default App;
