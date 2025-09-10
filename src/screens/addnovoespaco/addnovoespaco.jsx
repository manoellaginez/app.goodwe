import React from "react";
import "./style.css";

const Addnovoespaco = () => {
  return (
    <div className="adicionar-novo-espao">
      <div className="div">
        <div className="text-wrapper">Adicionar novo espaço</div>

        <div className="frame">
          <p className="nome-do-espa-o-ex">
            Nome do
            espaço&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex:
            Sala de estar
          </p>
        </div>

        <div className="tipo-de-espa-o-ex-wrapper">
          <div className="tipo-de-espa-o-ex">
            Tipo de
            espaço&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex:
            Apartamento
          </div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-2">Área aproximada</div>
        </div>

        <div className="frame-2">
          <div className="text-wrapper-3">Quantidade de dispositivos</div>
        </div>

        <div className="frame-3">
          <div className="text-wrapper-4">Adicionar imagem</div>
        </div>

        <p className="p">Deseja receber sugestões para esse espaço?</p>

        <div className="overlap-group">
          <div className="rectangle" />

          <div className="home-indicator">
            <div className="home-indicator-2" />

            <div className="text-wrapper-5">Automação</div>
          </div>

          <div className="text-wrapper-6">Mais</div>

          <div className="text-wrapper-7">Gastos</div>

          <div className="text-wrapper-8">Dicas</div>

          <div className="home-indicator-3">
            <div className="home-indicator-4" />

            <img className="element" alt="Element" src="/img/logogastos.png" />

            <div className="text-wrapper-9">Início</div>
          </div>

          <img className="img" alt="Element" src="/img/logodicas.png" />

          <img className="element-2" alt="Element" src="/img/logomais.png" />

          <div className="home-indicator-5" />

          <img className="element-3" alt="Element" src="/img/logoinicio.png" />

          <img className="element-4" alt="Element" src="/img/logoautomacao.png" />
        </div>

        <button className="button">
          <div className="frame-4">
            <div className="text-wrapper-10">SALVAR</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Addnovoespaco;
