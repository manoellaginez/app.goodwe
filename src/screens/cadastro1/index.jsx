import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate para redirecionar

const Cadastro1 = () => {
  const navigate = useNavigate(); // Hook para navegação programática
  
  // 1. Crie o estado para cada input
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  // 2. Crie a função para atualizar o estado quando o input muda
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Crie a função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const novaConta = { nome: formData.nome, email: formData.email, senha: formData.senha, dispositivos: [] };

    let contas = JSON.parse(localStorage.getItem("contas")) || [];
    const emailExistente = contas.some((conta) => conta.email === formData.email);

    if (emailExistente) {
      alert("Este e-mail já está cadastrado!");
      return;
    }

    contas.push(novaConta);
    localStorage.setItem("contas", JSON.stringify(contas));

    alert("Conta criada com sucesso! Por favor, faça o login.");
    navigate("/entre"); // Redireciona para a rota "/entrar"
  };

  return (
    <div className="cadastro1">
      <div className="div">
        <div className="text-wrapper">Cadastro</div>
        
        {/* 4. Use o formulário e os inputs */}
        <form onSubmit={handleSubmit}>
          <div className="frame">
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleInputChange}
              className="text-wrapper-2" // Aplica a classe de estilização do texto
            />
          </div>
          <div className="div-wrapper">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="text-wrapper-3"
            />
          </div>
          <div className="frame-2">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleInputChange}
              className="text-wrapper-4"
            />
          </div>
          <div className="frame-3">
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirmar senha"
              value={formData.confirmarSenha}
              onChange={handleInputChange}
              className="text-wrapper-4" // Use a mesma classe para "Confirmar senha"
            />
          </div>

          <div className="input-button">
            <button type="submit" className="button">
              ENTRAR
            </button>
          </div>
        </form>
        
        <div className="home-indicator" />
      </div>
    </div>
  );
};

export default Cadastro1;