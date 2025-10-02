import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });

  const navigate = useNavigate();

  // Atualiza os inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit do cadastro
  const handleSubmit = (e) => {
    e.preventDefault();

    // Exemplo simples de validação:
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não conferem!");
      return;
    }

    // Aqui você poderia salvar no backend ou localStorage
    console.log("Usuário cadastrado:", formData);

    // Redireciona para /inicio
    navigate("/inicio");
  };

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-form">
        <label className="cadastro-titulo">Cadastro</label>

        <div className="cadastro-inputs">
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            className="cadastro-input"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="cadastro-input"
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            className="cadastro-input"
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            className="cadastro-input"
          />
        </div>

        <button type="submit" className="cadastro-botao">
          ENTRAR
        </button>
      </form>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .cadastro-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #fff;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }

        .cadastro-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 320px;
        }

        .cadastro-titulo {
          font-size: 26px;
          font-weight: 700;
          color: #b42222;
          margin-bottom: 20px;
          text-align: center;
        }

        .cadastro-inputs {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        .cadastro-input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 12px;
          background: #f5f5f5;
          border: none;
          box-shadow: 0 7px 5px 0 rgba(22, 22, 22, 0.26);
          font-size: 14px;
          font-weight: 600;
          color: #a6a6a6; /* texto digitado cinza */
          outline: none;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .cadastro-input::placeholder {
          color: #a6a6a6;
          font-weight: 600;
        }

        .cadastro-botao {
          width: 100%;
          height: 43px;
          border-radius: 8px;
          background-color: #b42222;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
          font-family: 'Inter', sans-serif;
        }

        .cadastro-botao:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
