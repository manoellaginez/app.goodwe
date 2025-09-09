import React from "react";
/* import statusBar from "./status-bar.svg"; */
import "./style.css";

const Entrar = () => {
  return (
    <div className="incio-espaos">
      <div className="div">

        <div className="text-wrapper">Membros da família</div>

        <div className="text-wrapper-2">Início</div>

        <div className="frame">
          <div className="overlap-group">
            <div className="text-wrapper-3">Espaços</div>
          </div>

          <div className="text-wrapper-4">Dispositivos</div>
        </div>

        <div className="overlap">
          <div className="frame-2">
            <div className="overlap-2">
              <div className="text-wrapper-5">Suíte principal</div>

              <div className="text-wrapper-6">4 dispositivos</div>
            </div>

            <div className="rectangle-wrapper">
              <div className="rectangle" />
            </div>

            <div className="text-wrapper-7">ON</div>
          </div>

          <img className="image" alt="suite" src="/img/suiteprincipal.png"/>
        </div>

        <div className="overlap-3">
          <div className="frame-2">
            <div className="overlap-4">
              <div className="text-wrapper-5">Cozinha</div>

              <div className="text-wrapper-6">3 dispositivos</div>
            </div>

            <div className="rectangle-wrapper">
              <div className="rectangle" />
            </div>

            <div className="text-wrapper-7">ON</div>
          </div>

          <img className="img" alt="cozinha" src="/img/cozinha.png"/>
        </div>

        <div className="ADICIONAR-NOVO-ESPA-wrapper">
          <div className="ADICIONAR-NOVO-ESPA">
            ADICIONAR
            <br />
            NOVO
            <br />
            ESPAÇO
          </div>
        </div>

        <div className="overlap-5">
          <div className="frame-2">
            <div className="overlap-6">
              <div className="text-wrapper-5">Sala de estar</div>

              <div className="text-wrapper-6">9 dispositivos</div>
            </div>

            <div className="rectangle-wrapper">
              <div className="rectangle-2" />
            </div>

            <div className="text-wrapper-7">OFF</div>
          </div>

          <img className="image-2" alt="Image" src="/img/saladeestar.png"/>
        </div>

        <div className="overlap-7">
          <img
            className="profile-image"
            alt="Profile image"
            src="/img/pessoa1.png"/> 

          <img className="profile-image-2" alt="Profile image" src="/img/pessoa1.png"/> 

          <img
            className="profile-image-3"
            alt="Profile image"
            src="/img/pessoa1.png"/> 

          <img
            className="element-gente-texto"
            alt="Element gente texto"
            src="/img/pessoa2.png"/> 

          <img className="mulher" alt="Mulher" src="/img/pessoa3.png"/> 
        </div>

        <div className="overlap-8">
          <div className="rectangle-3" />

          <div className="home-indicator">
            <div className="home-indicator-2" />
          </div>

          <div className="text-wrapper-8">Mais</div>

          <div className="text-wrapper-9">Perfil</div>

          <div className="text-wrapper-10">Gastos</div>

          <div className="text-wrapper-11">Dicas</div>

          <div className="home-indicator-3">
            <div className="home-indicator-4" />

            <img className="element" alt="Element" src="/img/logoperfil.png"/> 

            <img className="element-2" alt="Element" src="/img/logogastos.png"/> 

            <div className="text-wrapper-12">Início</div>
          </div>

          <img className="element-3" alt="Element" src="/img/logodicas.png"/> 

          <img className="element-4" alt="Element" src="/img/logomais.png"/> 

          <div className="home-indicator-5" />

          <img className="element-5" alt="Element" src="/img/logoinicio.png"/> 
        </div>
      </div>
    </div>
  );
};

export default Entrar;