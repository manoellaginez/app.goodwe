import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

const Entrar = () => {
  const navigate = useNavigate();
  const [spaces, setSpaces] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const firebaseConfig = JSON.parse(
      typeof __firebase_config !== "undefined"
        ? __firebase_config
        : "{}"
    );

    if (Object.keys(firebaseConfig).length > 0) {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app);

      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId(null);
        }
      });

      // Fetch data for spaces
      if (userId) {
        const q = query(
          collection(db, "artifacts", "123456789", "public", "data", "spaces"),
          where("userId", "==", userId)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const spacesArray = [];
          querySnapshot.forEach((doc) => {
            spacesArray.push({ id: doc.id, ...doc.data() });
          });
          setSpaces(spacesArray);
        });

        return () => {
          unsubscribeAuth();
          unsubscribe();
        };
      } else {
        return () => unsubscribeAuth();
      }
    }
  }, [userId]);

  const handleAddSpace = () => {
    navigate("/addnovoespaco");
  };

  const toggleStatus = (spaceId, currentStatus) => {
    // Lógica para alternar o status
    // Você pode usar uma função de atualização do Firestore aqui
  };

  return (
    <div className="incio-espaos">
      <div className="div">
        <div className="top-section">
          <div className="text-wrapper-2">Início</div>
        </div>

<div className="frame">
  <NavLink 
    to="/entrar"
    className={({ isActive }) => 
      `button-link ${isActive ? "active" : ""}`
    }
    style={{ textDecoration: "none" }}
  >
    Espaços
  </NavLink>

  <NavLink 
    to="/dispositivos"
    className={({ isActive }) => 
      `button-link ${isActive ? "active" : ""}`
    }
    style={{ textDecoration: "none" }}
  >
    Dispositivos
  </NavLink>
</div>

        <div className="spaces-container">
          {spaces.map((space) => (
            <div className="card-container" key={space.id}>
              <div className="frame-2">
                <img className="card-image" alt="Imagem do espaço" src={space.imagem} />
                <div className="card-info-container">
                  <div className="text-wrapper-5">{space.nome}</div>
                  <div className="text-wrapper-6">{space.dispositivos} dispositivos</div>
                </div>
                <div className="rectangle-wrapper" onClick={() => toggleStatus(space.id, space.status)}>
                  <div className={`rectangle ${space.status ? "on" : "off"}`} />
                </div>
              </div>
            </div>
          ))}

          <div className="ADICIONAR-NOVO-ESPA-wrapper" onClick={handleAddSpace}>
            <div className="ADICIONAR-NOVO-ESPA">
              ADICIONAR NOVO ESPAÇO
            </div>
          </div>
        </div>

        <div className="overlap-8">
          <div className="rectangle-3" />
          <div className="navbar-links">
            <div className="navbar-item">
              <img className="lightbulb" alt="Dicas" src="/img/logodicas.png" />
              <div className="text-wrapper-8">Dicas</div>
            </div>
            <div className="navbar-item">
              <img className="money" alt="Gastos" src="/img/logogastos.png" />
              <div className="text-wrapper-9">Gastos</div>
            </div>
            <div className="navbar-item">
              <img className="house" alt="Início" src="/img/logoinicio.png" />
              <div className="text-wrapper-10">Início</div>
            </div>
            <div className="navbar-item">
              <img className="settings" alt="Automação" src="/img/logoautomacao.png" />
              <div className="text-wrapper-11">Automação</div>
            </div>
            <div className="navbar-item">
              <img className="menu" alt="Mais" src="/img/logomais.png" />
              <div className="text-wrapper-12">Mais</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrar;
