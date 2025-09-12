import React from "react";
import "./style.css";

const Gastos = () => {
  return (
    <div className="gastos">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="home-indicator" />

            <div className="rectangle" />

            <div className="text-wrapper">Mais</div>

            <div className="home-indicator-2">
              <div className="home-indicator-3" />

              <img className="element" alt="Element" src="/img/logoautomacao.png" />

              <img className="img" alt="Element" src="/img/logogastos.png" />

              <div className="text-wrapper-2">Início</div>

              <div className="home-indicator-4" />
            </div>

            <img className="element-2" alt="Element" src="/img/logodicas.png" />

            <img className="element-3" alt="Element" src="/img/logomais.png" />

            <img className="element-4" alt="Element" src="/img/logoinicio.png" />
          </div>

          <div className="text-wrapper-3">Automação</div>

          <div className="text-wrapper-4">Gastos</div>

          <div className="text-wrapper-5">Dicas</div>
        </div>

        <div className="overlap-2">
          <div className="frame">
            <div className="overlap-group-2">
              <div className="rectangle-2" />

              <div className="text-wrapper-6">180 kWh / mês</div>
            </div>

            <div className="text-wrapper-7">DETALHES</div>

            <p className="ilumina-o-chuveiro">
              Iluminação <br />
              Chuveiro elétrico
              <br />
              Geladeira <br />
              TV <br />
              Ar-condicionado
              <br />
              Demais itens
            </p>

            <div className="element-5">
              10% <br />
              25%
              <br />
              20%
              <br />
              5% <br />
              30%
              <br />
              10%
            </div>

            <div className="text-wrapper-8">
              &lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &gt;
            </div>
          </div>

          <div className="text-wrapper-9">SETEMBRO</div>
        </div>

        <p className="p">Seu gasto atual é de...</p>
      </div>
    </div>
  );
};

export default Gastos;
