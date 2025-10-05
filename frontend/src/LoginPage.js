import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage({ onLoginSuccess, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setAlert("");
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      if (res.ok) {
        setAlert("Login berhasil!");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          onLoginSuccess(result.data); // <-- perbaikan di sini
        }, 800);
      } else {
        setAlert(result.error);
      }
    } catch {
      setAlert("Terjadi kesalahan koneksi.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{minHeight: "100vh", background: "#6c757d"}}>
      <div className="bg-white rounded-4 shadow p-4" style={{width: 350}}>
        <h3 className="fw-bold mb-3 text-center">Login Akun</h3>
        {alert && (
          <div className={`alert ${alert === "Login berhasil!" ? "alert-success" : "alert-danger"}`}>{alert}</div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-link" onClick={onBack}>Kembali</button>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
