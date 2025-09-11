import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Entre() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contas = JSON.parse(localStorage.getItem("contas")) || [];
    const contaEncontrada = contas.find(
      (conta) => conta.email === formData.email && conta.senha === formData.senha
    );

    if (contaEncontrada) {
      sessionStorage.setItem("usuarioLogadoEmail", contaEncontrada.email);
      navigate("/entrar"); // Redireciona para a rota /entrar
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div className="entre">
      <div className="div">
        <div className="text-wrapper">Entre</div>
        <form onSubmit={handleSubmit}>
          <div className="frame">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="div-wrapper">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-wrapper-2">Esqueci minha senha</div>
          <div className="input-button">
            <button className="button" type="submit">
              <div className="text-wrapper-5">ENTRAR</div>
            </button>
          </div>
        </form>
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default Entre;