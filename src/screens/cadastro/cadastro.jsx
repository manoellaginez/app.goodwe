import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Cadastro = () => {
  return (
    <div className="cadastro" data-model-id="1:1588">
      <div className="div">
        <div className="home-indicator">
          <div className="home-indicator-2" />
        </div>

        <div className="overlap-group">
          <div className="text-wrapper">designed for you</div>

          <img className="image" alt="Image" src="/voltrix.png" />
        </div>

<div className="button-wrapper entre">
  <Link to="/entre" className="button entre">ENTRE</Link>
</div>

<div className="button-wrapper cadastro">
  <Link to="/cadastro1" className="button button-link">
    <div className="text-wrapper-2">CADASTRO</div>
  </Link>
</div>


        <div className="divider">
          <div className="divider-2" />

          <div className="text-wrapper-3">ou</div>

          <div className="divider-2" />
        </div>

        <button className="label-wrapper">
          <div className="label">
            <img
              className="logo"
              alt="Logo"
              src="https://c.animaapp.com/hcMliXJ6/img/logo.svg"
            />

            <div className="text-wrapper-4">Continuar com o Google</div>
          </div>
        </button>

        <p className="ao-clicar-em">
          <span className="span">
            Ao clicar em cadastro, você concorda com os nossos{" "}
          </span>

          <span className="text-wrapper-5">Termos de Serviço</span>

          <span className="span"> e com a </span>

          <span className="text-wrapper-5">Política de Privacidade</span>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;