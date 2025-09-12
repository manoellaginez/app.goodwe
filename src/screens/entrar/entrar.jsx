import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";

const Entrar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [espacos, setEspacos] = useState([]);
  const [switchState, setSwitchState] = useState({});

  useEffect(() => {
    const espacosSalvos = JSON.parse(localStorage.getItem("espacos")) || [];
    setEspacos(espacosSalvos);

    const initialSwitchState = espacosSalvos.reduce((acc, espaco) => {
      acc[espaco.id] = true;
      return acc;
    }, {});
    setSwitchState(initialSwitchState);
  }, []);

  const handleToggle = (espacoId) => {
    setSwitchState((prevState) => ({
      ...prevState,
      [espacoId]: !prevState[espacoId],
    }));
  };

  return (
    <div className="incio-espaos">
      <div className="div">
        {/* Seção do topo: título e perfis */}
        <div className="top-section">
          <div className="text-wrapper-2">Início</div>
        </div>


<div className="tabs-frame">
  <NavLink to="/entrar" className="button-link">
    Espaços
  </NavLink>

  <NavLink to="/dispositivos" className="button-link">
    Dispositivos
  </NavLink>
</div>


        {/* Container para os cartões de espaço */}
        <div className="spaces-container">
          {espacos.map((espaco) => (
            <div className="card-container" key={espaco.id}>
              <div className="frame-2">
                <img className="card-image" src={espaco.imagem || "https://via.placeholder.com/132x83"} alt={espaco.nome} />
                <div className="card-info-container">
                  <div className="text-wrapper-5">{espaco.nome}</div>
                  <div className="text-wrapper-6">{espaco.dispositivos} dispositivos</div>
                </div>
                <div className="rectangle-wrapper" onClick={() => handleToggle(espaco.id)}>
                  <div className={`rectangle ${switchState[espaco.id] ? 'on' : 'off'}`} />
                </div>
                <div className="text-wrapper-7">{switchState[espaco.id] ? 'ON' : 'OFF'}</div>
              </div>
            </div>
          ))}

          {/* Cartão "Adicionar novo espaço" estático */}
          <div className="ADICIONAR-NOVO-ESPA-wrapper" onClick={() => navigate("/addnovoespaco")}>
            <div className="ADICIONAR-NOVO-ESPA">
              ADICIONAR
              <br />
              NOVO
              <br />
              ESPAÇO
            </div>
          </div>
        </div>

        {/* Navbar inferior */}
        <div className="overlap-8">
          <div className="rectangle-3" />
          <div className="home-indicator" />
          <div className="navbar-links">
            <div className="navbar-item">
              <img className="element-5" alt="Element" src="/img/logodicas.png" />
              <div className="text-wrapper-12">Dicas</div>
            </div>
          <div className="navbar-item">
           <Link to="/gastos" className="navbar-link">
           <img className="element-2" alt="Element" src="/img/logogastos.png" />
           <div className="text-wrapper-10">Gastos</div>
           </Link>
          </div>
            <div className="navbar-item">
              <img className="element" alt="Element" src="/img/logoinicio.png" />
              <div className="text-wrapper-9">Início</div>
            </div>
            <div className="navbar-item">
              <img className="element-3" alt="Element" src="/img/logoautomacao.png" />
              <div className="text-wrapper-11">Automação</div>
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

export default Entrar;