import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoEspaco = { ...formData, id: Date.now() };
    const espacos = JSON.parse(localStorage.getItem("espacos")) || [];
    espacos.push(novoEspaco);
    localStorage.setItem("espacos", JSON.stringify(espacos));
    navigate("/entrar"); // Redireciona para a tela inicial
  };

  return (
    <div className="adicionar-novo-espao">
      <div className="div">
        <div className="text-wrapper">Adicionar novo espaço</div>
        <form onSubmit={handleSubmit}>
          {/* Nome do espaço */}
          <div className="frame">
            <input
              type="text"
              name="nome"
              placeholder="Nome do espaço       Ex: Sala de estar"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </div>
          {/* Tipo de espaço */}
          <div className="tipo-de-espa-o-ex-wrapper">
            <input
              type="text"
              name="tipo"
              placeholder="Tipo de espaço       Ex: Apartamento"
              value={formData.tipo}
              onChange={handleInputChange}
            />
          </div>
          {/* Área aproximada */}
          <div className="div-wrapper">
            <input
              type="text"
              name="area"
              placeholder="Área aproximada"
              value={formData.area}
              onChange={handleInputChange}
            />
          </div>
          {/* Quantidade de dispositivos */}
          <div className="frame-2">
            <input
              type="text"
              name="dispositivos"
              placeholder="Quantidade de dispositivos"
              value={formData.dispositivos}
              onChange={handleInputChange}
            />
          </div>
          {/* Adicionar imagem */}
          <div className="frame-3">
            <input
              type="text"
              name="imagem"
              placeholder="Adicionar imagem"
              value={formData.imagem}
              onChange={handleInputChange}
            />
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