import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function ProfileHeader({ onLogout }) {
  const navigate = useNavigate();
  return (
    <header className="bg-dark text-white px-4 py-2 d-flex align-items-center justify-content-between position-fixed w-100" style={{borderRadius: "0 0 12px 12px", top: 0, left: 0, zIndex: 1000}}>
      <div className="d-flex align-items-center gap-2">
        <img src={require("./assets/icon-utama.png")} alt="Logo" style={{width: 32, height: 32}} />
        <span className="fw-bold fs-4">Futsal Sparring</span>
      </div>
      <nav>
        <ul className="nav gap-3">
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={() => navigate("/dashboard")}>Beranda</button></li>
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={() => navigate("/dashboard")}>Tim</button></li>
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={() => navigate("/dashboard")}>Open Sparring</button></li>
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={() => navigate("/about")}>Tentang</button></li>
          <li className="nav-item">
            <span className="nav-link fw-bold text-success">Profil</span>
          </li>
          <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={onLogout}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
}

function ProfileSection({ user }) {
  return (
    <section className="container my-4">
      <div className="bg-white rounded-4 shadow-sm p-4 d-flex flex-wrap align-items-center gap-4">
        <img
          src={user?.avatar_url || require("./assets/default-avatar.png")}
          alt="Avatar"
          style={{width: 80, height: 80, borderRadius: "50%", objectFit: "cover", border: "2px solid #198754"}}
        />
        <div>
          <div className="fw-bold fs-5 mb-1">{user?.name || "Nama Lengkap"}</div>
          <div className="mb-1">{user?.email || user?.phone_number || "-"}</div>
          <div className="mb-1">Kota: {user?.city || "-"}</div>
          <div className="mb-1">Bergabung sejak: {user?.created_at ? new Date(user.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) : "-"}</div>
          <button className="btn btn-outline-success mt-2">Edit Profil</button>
        </div>
      </div>
    </section>
  );
}

function TeamSection({ user }) {
  // Dummy logic: user.team jika punya tim, user.team_member jika anggota, else belum punya tim
  if (user?.team) {
    const team = user.team;
    return (
      <section className="container mb-4">
        <div className="bg-white rounded-4 shadow-sm p-4">
          <div className="fw-bold fs-5 mb-2">Tim Anda</div>
          <div className="d-flex align-items-center gap-3 mb-2">
            <span style={{fontSize: 32}}>🏆</span>
            <span className="fw-bold">{team.name}</span>
          </div>
          <div>Kota: {team.city || "-"}</div>
          <div>Homebase: {team.homebase || "-"}</div>
          <div>Tingkat Kompetisi: {team.level || "Amatir"}</div>
          <div>Deskripsi: {team.description || "-"}</div>
          <div>Jadwal Open Sparring: {team.sparring_schedule || "-"}</div>
          <button className="btn btn-outline-primary mt-2">Kelola Tim</button>
        </div>
      </section>
    );
  } else if (user?.team_member) {
    const team = user.team_member;
    return (
      <section className="container mb-4">
        <div className="bg-white rounded-4 shadow-sm p-4">
          <div className="fw-bold fs-5 mb-2">Tim Anda</div>
          <div className="d-flex align-items-center gap-3 mb-2">
            <span style={{fontSize: 32}}>🏆</span>
            <span className="fw-bold">{team.name}</span>
          </div>
          <div>Status: Anggota</div>
          <div>Jadwal Open Sparring: {team.sparring_schedule || "-"}</div>
          <button className="btn btn-outline-danger mt-2">Keluar dari Tim</button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="container mb-4">
        <div className="bg-white rounded-4 shadow-sm p-4 text-center">
          <div className="fw-bold fs-5 mb-2">Anda belum tergabung dalam tim.</div>
          <div className="mb-3">Buat tim baru atau bergabung ke tim teman Anda.</div>
          <button className="btn btn-success me-2">Buat Tim Baru</button>
          <button className="btn btn-outline-primary">Cari Tim</button>
        </div>
      </section>
    );
  }
}

function ActivitySection({ user }) {
  // Dummy riwayat sparring
  const history = user?.sparring_history || [
    { date: "2025-09-10", team1: "Garuda FC", team2: "Thunder Futsal", result: "Menang 5-3" },
    { date: "2025-09-15", team1: "Garuda FC", team2: "Dragon United", result: "Seri 2-2" }
  ];
  return (
    <section className="container mb-4">
      <div className="bg-white rounded-4 shadow-sm p-4">
        <div className="fw-bold fs-5 mb-2">Riwayat Sparring</div>
        {history.length > 0 ? (
          <ul className="list-unstyled mb-0">
            {history.map((h, idx) => (
              <li key={idx} className="mb-2">
                {new Date(h.date).toLocaleDateString("id-ID")} - {h.team1} vs {h.team2} ({h.result})
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-muted">Belum ada riwayat sparring.</div>
        )}
      </div>
    </section>
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

function ProfilePage({ user, onLogout }) {
  React.useEffect(() => {
    document.body.style.paddingTop = "56px";
    return () => { document.body.style.paddingTop = "0"; };
  }, []);
  return (
    <div style={{background: "#6c757d", minHeight: "100vh"}}>
      <ProfileHeader onLogout={onLogout} />
      <div className="container py-4" style={{marginTop: 0}}>
        <ProfileSection user={user} />
        <TeamSection user={user} />
        <ActivitySection user={user} />
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
