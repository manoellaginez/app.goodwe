import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Dispositivos = () => {
  return (
    <div className="incio-dispositivos">
      <div className="div">

        <div className="text-wrapper">Membros da família</div>

        <div className="text-wrapper-2">Início</div>

        <div className="overlap">
          <img
            className="profile-image"
            alt="Profile image"
            src="/img/pessoa1.png"/> 

          <img className="img" alt="Profile image" src="/img/pessoa1.png"/> 

          <img
            className="profile-image-2"
            alt="Profile image"
            src="/img/pessoa1.png"/> 

          <img
            className="element-gente-texto"
            alt="Element gente texto"
            src="/img/pessoa2.png"/> 

          <img className="mulher" alt="Mulher" src="/img/pessoa3.png"/> 
        </div>

<div className="frame">
  <div className="overlap-group">
    <div className="text-wrapper-3">Dispositivos</div>
  </div>

  <Link to="/entrar" className="text-wrapper-4" style={{ textDecoration: "none" }}>
    Espaços
  </Link>
</div>

        <div className="overlap-2">
          <div className="frame-2">
            <div className="overlap-3">
              <div className="text-wrapper-5">Ar Condicionado</div>

              <div className="text-wrapper-6">9000 BTU 220V</div>
            </div>

            <div className="rectangle-wrapper">
              <div className="rectangle" />
            </div>

            <div className="text-wrapper-7">ON</div>
          </div>

          <img className="image" alt="Image" src="/img/ar.png"/> 
        </div>

        <div className="overlap-4">
          <div className="rectangle-2" />

          <div className="home-indicator">
            <div className="home-indicator-2" />
          </div>

          <div className="text-wrapper-8">Mais</div>

          <div className="text-wrapper-9">Automação</div>

          <div className="text-wrapper-10">Gastos</div>

          <div className="text-wrapper-11">Dicas</div>

          <div className="home-indicator-3">
            <div className="home-indicator-4" />

            <img className="element" alt="Element" src="/img/logoautomacao.png"/> 

            <img className="element-2" alt="Element" src="/img/logogastos.png"/> 

            <div className="text-wrapper-12">Início</div>
          </div>

          <img className="element-3" alt="Element" src="/img/logodicas.png"/> 

          <img className="element-4" alt="Element" src="/img/logomais.png"/> 

          <div className="home-indicator-5" />

          <img className="element-5" alt="Element" src="/img/logoinicio.png"/> 
        </div>

        <div className="frame-3">
          <div className="overlap-5">
            <div className="text-wrapper-13">Chuveiro elétrico</div>

            <div className="text-wrapper-14">220V</div>

            <img className="image-2" alt="Image" src="/img/chuveiro.png"/> 
          </div>

          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>

          <div className="text-wrapper-7">ON</div>
        </div>

        <div className="ADICIONAR-NOVO-wrapper">
          <div className="ADICIONAR-NOVO">
            ADICIONAR
            <br />
            NOVO
            <br />
            DISPOSITIVO
          </div>
        </div>

        <div className="overlap-6">
          <div className="frame-4">
            <div className="overlap-7">
              <div className="text-wrapper-15">Cooktop à gás</div>

              <div className="text-wrapper-6">4 bocas 127V</div>
            </div>

            <div className="rectangle-wrapper">
              <div className="rectangle-3" />
            </div>

            <div className="text-wrapper-7">OFF</div>
          </div>

          <img className="image-3" alt="Image" src="/img/cooktop.png"/> 

        </div>
      </div>
    </div>
  );
};

export default Dispositivos;