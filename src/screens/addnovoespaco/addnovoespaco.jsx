import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Addnovoespaco = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "",
    area: "",
    dispositivos: "",
    imagem: "",
    receberSugestoes: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleToggleChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      receberSugestoes: !prevData.receberSugestoes,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');

      if (Object.keys(firebaseConfig).length > 0) {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);
        
        await signInAnonymously(auth);

        const newSpace = { ...formData, id: Date.now() };

        await addDoc(collection(db, "artifacts", appId, "public", "data", "spaces"), newSpace);
        
        navigate("/entrar"); // Redireciona para a tela inicial
      } else {
        console.error("Firebase config is not available.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="adicionar-novo-espao">
      <div className="div">
        <div className="text-wrapper">Adicionar novo espaço</div>
        <form onSubmit={handleSubmit}>

{/* Nome do espaço */}
<div className="input-wrapper">
  <input
    type="text"
    name="nome"
    value={formData.nome}
    onChange={handleInputChange}
    placeholder=" "            /* IMPORTANTE: um espaço */
    aria-label="Nome do espaço"
    spellCheck={false}         /* opcional: remove sublinhado vermelho */
  />
  <span className="label">Nome do espaço</span>
  <span className="example">Ex: Sala de estar</span>
</div>

{/* Tipo de espaço */}
<div className="input-wrapper">
  <input
    type="text"
    name="tipo"
    value={formData.tipo}
    onChange={handleInputChange}
    placeholder=" "
    aria-label="Tipo de espaço"
    spellCheck={false}
  />
  <span className="label">Tipo de espaço</span>
  <span className="example">Ex: Apartamento</span>
</div>


{/* Área aproximada */}
<div className="input-wrapper">
  <input
    type="text"
    name="area"
    value={formData.area}
    onChange={handleInputChange}
    placeholder=" "
    aria-label="Área aproximada"
  />
  <span className="label">Área aproximada</span>
</div>

{/* Quantidade de dispositivos */}
<div className="input-wrapper">
  <input
    type="text"
    name="dispositivos"
    value={formData.dispositivos}
    onChange={handleInputChange}
    placeholder=" "
    aria-label="Quantidade de dispositivos"
  />
  <span className="label">Quantidade de dispositivos</span>
</div>

{/* Adicionar imagem */}
<div className="input-wrapper">
  <input
    type="text"
    name="imagem"
    value={formData.imagem}
    onChange={handleInputChange}
    placeholder=" "
    aria-label="Adicionar imagem"
  />
  <span className="label">Adicionar imagem</span>
</div>

          <p className="p">Deseja receber sugestões para esse espaço?</p>
          <div className="toggle-switch" onClick={handleToggleChange}>
            <div className={`boto ${formData.receberSugestoes ? "on" : "off"}`} />
          </div>
          <button className="button" type="submit">
            <div className="frame-4">
              <div className="text-wrapper-10">SALVAR</div>
            </div>
          </button>
        </form>
        {/* Navbar inferior (mantenha a estrutura original) */}
        <div className="overlap-group">
          {/* ... (código da navbar aqui, inalterado) ... */}
        </div>
      </div>
    </div>
  );
};

export default Addnovoespaco;
