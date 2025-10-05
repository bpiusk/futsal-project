import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const cities = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang", "Medan"];
const levels = ["Friendly", "Turnamen", "Sparring Rutin"];

function CreateTeamPage({ user, onTeamCreated, onBack }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState(null);
  const [description, setDescription] = useState("");
  const [homebase, setHomebase] = useState("");
  const [competition, setCompetition] = useState("");
  const [members, setMembers] = useState([""]);
  const [days, setDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [alert, setAlert] = useState("");

  const handleAddMember = () => setMembers([...members, ""]);
  const handleMemberChange = (i, val) => {
    const arr = [...members];
    arr[i] = val;
    setMembers(arr);
  };

  const handleDayChange = day => {
    setDays(days.includes(day) ? days.filter(d => d !== day) : [...days, day]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!name || !city) {
      setAlert("Nama tim dan kota wajib diisi.");
      return;
    }
    // Simulasi API
    const team = {
      name, city, logo_url: logo ? URL.createObjectURL(logo) : "",
      description, homebase, competition_level: competition,
      members: members.filter(m => m), open_sparring_day: days.join(", "),
      open_sparring_time: startTime && endTime ? `${startTime} - ${endTime}` : ""
    };
    setAlert("Tim berhasil dibuat!");
    setTimeout(() => {
      onTeamCreated(team);
    }, 1000);
  };

  return (
    <div style={{background: "#6c757d", minHeight: "100vh"}}>
      <header className="bg-dark text-white px-4 py-2 d-flex align-items-center justify-content-between position-fixed w-100" style={{borderRadius: "0 0 12px 12px", top: 0, left: 0, zIndex: 1000}}>
        <div className="d-flex align-items-center gap-2">
          <img src={require("./assets/icon-utama.png")} alt="Logo" style={{width: 32, height: 32}} />
          <span className="fw-bold fs-4">Futsal Sparring</span>
        </div>
        <nav>
          <ul className="nav gap-3">
            <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={onBack}>Home</button></li>
            <li className="nav-item"><button className="nav-link text-success bg-transparent border-0 fw-bold">Buat Tim</button></li>
            <li className="nav-item"><span className="nav-link text-white">Tim Saya</span></li>
            <li className="nav-item"><span className="nav-link text-white">Cari Lawan</span></li>
            <li className="nav-item"><span className="nav-link text-white">Profil</span></li>
            <li className="nav-item"><button className="nav-link text-white bg-transparent border-0" onClick={onBack}>Logout</button></li>
          </ul>
        </nav>
      </header>
      <div className="container py-5" style={{marginTop: 56}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="bg-white rounded-4 shadow p-4">
              <h2 className="fw-bold mb-3 text-center">Buat Tim Futsal Baru</h2>
              {alert && <div className={`alert ${alert.includes("berhasil") ? "alert-success" : "alert-danger"}`}>{alert}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nama Tim *</label>
                  <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Logo Tim (opsional)</label>
                  <input type="file" className="form-control" accept="image/*" onChange={e => setLogo(e.target.files[0])} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Deskripsi Tim (opsional)</label>
                  <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} rows={2} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kota *</label>
                  <select className="form-select" value={city} onChange={e => setCity(e.target.value)} required>
                    <option value="">Pilih Kota</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Homebase (opsional)</label>
                  <input type="text" className="form-control" value={homebase} onChange={e => setHomebase(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Tingkat Kompetisi</label>
                  <div>
                    {levels.map(lvl => (
                      <label key={lvl} className="me-3">
                        <input type="radio" name="competition" value={lvl} checked={competition === lvl} onChange={e => setCompetition(e.target.value)} /> {lvl}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Anggota Tim (email/HP)</label>
                  {members.map((m, i) => (
                    <div key={i} className="d-flex mb-2">
                      <input type="text" className="form-control" value={m} onChange={e => handleMemberChange(i, e.target.value)} placeholder="Email/HP anggota" />
                      {i === members.length - 1 && (
                        <button type="button" className="btn btn-outline-primary ms-2" onClick={handleAddMember}>+</button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mb-3">
                  <label className="form-label">Jadwal Open Sparring</label>
                  <div className="mb-2">
                    {["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"].map(day => (
                      <label key={day} className="me-2">
                        <input type="checkbox" checked={days.includes(day)} onChange={() => handleDayChange(day)} /> {day}
                      </label>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <input type="time" className="form-control" value={startTime} onChange={e => setStartTime(e.target.value)} style={{maxWidth: 120}} />
                    <span className="align-self-center">s/d</span>
                    <input type="time" className="form-control" value={endTime} onChange={e => setEndTime(e.target.value)} style={{maxWidth: 120}} />
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-2 mt-4">
                  <button type="button" className="btn btn-secondary" onClick={onBack}>Batal</button>
                  <button type="submit" className="btn btn-success">Buat Tim</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTeamPage;