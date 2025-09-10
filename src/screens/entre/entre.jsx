import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Entre() {
  const navigate = useNavigate();

  return (
    <div className="entre">
      <div className="div">
        <div className="text-wrapper">Entre</div>

        <div className="text-wrapper-2">Esqueci minha senha</div>

        <div className="frame">
          <div className="text-wrapper-3">E-mail</div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-4">Senha</div>
        </div>

        <div className="input-button">
          <button
            className="button"
            onClick={() => navigate("/entrar")} // leva para /entrar
          >
            <div className="text-wrapper-5">ENTRAR</div>
          </button>
        </div>

        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default Entre;
