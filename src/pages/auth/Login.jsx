import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recupera array de usuários
    const usersJson = localStorage.getItem("users");
    const users = usersJson ? JSON.parse(usersJson) : [];

    // Tenta encontrar usuário com email+senha
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // "Token" simples: salva o email como flag de sessão
      localStorage.setItem("token", user.email);
      navigate("/products");
    } else {
      alert("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="auth-footer">
          Não tem conta? <Link to="/register">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}
