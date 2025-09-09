import React from "react";
/* import statusBar from "./status-bar.svg"; */
import "./style.css";
import { Link } from "react-router-dom";

const Cadastro1 = () => {
  return (
    <div className="cadastro1">
      <div className="div">

        <div className="text-wrapper">Cadastro</div>

    <div className="frame">
      <div className="text-wrapper-2">Nome completo</div>
    </div>

    <div className="div-wrapper">
      <div className="text-wrapper-3">E-mail</div>
    </div>

    <div className="frame-2">
      <div className="text-wrapper-4">Senha</div>
    </div>

    <div className="frame-3">
      <div className="text-wrapper-4">Confirmar senha</div>
    </div>

    <div className="input-button">
       <Link to="/entrar" className="button">
       ENTRAR
       </Link>
    </div>


        <div className="home-indicator" />
      </div>
    </div>
  );
};

export default Cadastro1;