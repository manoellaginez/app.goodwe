import React from "react";
import "./style.css";

export const Cadastro = () => {
  return (
    <div className="cadastro" data-model-id="1:1588">
      <div className="div">
        <div className="home-indicator">
          <div className="home-indicator-2" />
        </div>

        <div className="overlap-group">
          <div className="text-wrapper">uma parceria com</div>

          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/hcMliXJ6/img/image-1@2x.png"
          />
        </div>

        <img
          className="status-bar"
          alt="Status bar"
          src="https://c.animaapp.com/hcMliXJ6/img/status-bar.svg"
        />

        <div className="input-button">
          <button className="button">
            <div className="text-wrapper-2">ENTRE</div>
          </button>
        </div>

        <div className="button-wrapper">
          <button className="button">
            <div className="text-wrapper-2">CADASTRO</div>
          </button>
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
