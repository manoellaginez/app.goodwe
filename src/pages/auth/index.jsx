import React from "react";

export default function Index() {
  return (
    <div className="cadastro1">
      <div className="div">
        <div className="text-wrapper">Cadastro</div>

        <div className="frame">
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            className="text-wrapper-2"
          />
        </div>

        <div className="div-wrapper">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="text-wrapper-3"
          />
        </div>

        <div className="frame-2">
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            className="text-wrapper-4"
          />
        </div>

        <div className="frame-3">
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            className="text-wrapper-4"
          />
        </div>

        <div className="input-button">
          <button type="button" className="button">
            ENTRAR
          </button>
        </div>

        <div className="home-indicator" />
      </div>
    </div>
  );
}
