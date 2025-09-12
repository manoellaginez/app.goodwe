import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const Dispositivos = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dispositivos, setDispositivos] = useState([]);
  const [switchState, setSwitchState] = useState({});

  useEffect(() => {
    // Busca no localStorage
    const dispositivosSalvos =
      JSON.parse(localStorage.getItem("dispositivos")) || [];
    setDispositivos(dispositivosSalvos);

    // Inicializa os switches
    const initialSwitchState = dispositivosSalvos.reduce((acc, disp) => {
      acc[disp.id] = true;
      return acc;
    }, {});
    setSwitchState(initialSwitchState);
  }, []);

  const handleToggle = (id) => {
    setSwitchState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="incio-espaos">
      <div className="div">
        {/* Seção do topo */}
        <div className="top-section">
           <div className="text-wrapper-2">Dispositivos</div>
        </div>


        {/* Navegação Espaços x Dispositivos */}
        <div className="frame">
          <div
            className={`indicator ${
              location.pathname === "/entrar" ? "left" : "right"
            }`}
          />
          <Link to="/entrar" className="text-wrapper-3">
            Espaços
          </Link>
          <Link to="/dispositivos" className="text-wrapper-4">
            Dispositivos
          </Link>
        </div>

        {/* Container dos cards */}
        <div className="spaces-container">
          {dispositivos.map((disp) => (
            <div className="card-container" key={disp.id}>
              <div className="frame-2">
                <img
                  className="card-image"
                  src={disp.imagem || "https://via.placeholder.com/132x83"}
                  alt={disp.nome}
                />
                <div className="card-info-container">
                  <div className="text-wrapper-5">{disp.nome}</div>
                  <div className="text-wrapper-6">
                    {disp.potencia || "?"} - {disp.uso || "?"}h/dia
                  </div>
                </div>
                <div
                  className="rectangle-wrapper"
                  onClick={() => handleToggle(disp.id)}
                >
                  <div
                    className={`rectangle ${
                      switchState[disp.id] ? "on" : "off"
                    }`}
                  />
                </div>
                <div className="text-wrapper-7">
                  {switchState[disp.id] ? "ON" : "OFF"}
                </div>
              </div>
            </div>
          ))}

          {/* Card de adicionar novo */}
          <div
            className="ADICIONAR-NOVO-ESPA-wrapper"
            onClick={() => navigate("/addnovodispositivo")}
          >
            <div className="ADICIONAR-NOVO-ESPA">
              ADICIONAR
              <br />
              NOVO
              <br />
              DISPOSITIVO
            </div>
          </div>
        </div>

        {/* Navbar inferior */}
        <div className="overlap-8">
          <div className="rectangle-3" />
          <div className="home-indicator" />
          <div className="navbar-links">
            <div className="navbar-item">
              <img className="element-5" alt="Element" src="/img/logoinicio.png" />
              <div className="text-wrapper-12">Início</div>
            </div>
            <div className="navbar-item">
              <img className="element-2" alt="Element" src="/img/logogastos.png" />
              <div className="text-wrapper-10">Gastos</div>
            </div>
            <div className="navbar-item">
              <img className="element" alt="Element" src="/img/logoautomacao.png" />
              <div className="text-wrapper-9">Automação</div>
            </div>
            <div className="navbar-item">
              <img className="element-3" alt="Element" src="/img/logodicas.png" />
              <div className="text-wrapper-11">Dicas</div>
            </div>
            <div className="navbar-item">
              <img className="element-4" alt="Element" src="/img/logomais.png" />
              <div className="text-wrapper-8">Mais</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispositivos;
