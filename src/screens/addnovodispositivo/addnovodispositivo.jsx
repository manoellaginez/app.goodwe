import React, { useState } from "react";
import "./style.css"; 
import { useNavigate } from "react-router-dom";

const Addnovodispositivo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    potencia: "",
    uso: "",
    espaco: "",
    imagem: "",
    receberSugestoes: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = () => {
    setFormData((prev) => ({
      ...prev,
      receberSugestoes: !prev.receberSugestoes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dispositivosSalvos =
      JSON.parse(localStorage.getItem("dispositivos")) || [];

    const novoDispositivo = { ...formData, id: Date.now() };

    localStorage.setItem(
      "dispositivos",
      JSON.stringify([...dispositivosSalvos, novoDispositivo])
    );

    navigate("/dispositivos");
  };

  return (
    <div className="adicionar-novo-espao">
      <div className="div">
        <div className="text-wrapper">Adicionar novo dispositivo</div>
        <form onSubmit={handleSubmit}>
          {/* Nome */}
          <div className="input-wrapper">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder=" "
            />
            <span className="label">Nome do dispositivo</span>
            <span className="example">Ex: Chuveiro</span>
          </div>

          {/* Potência */}
          <div className="input-wrapper">
            <input
              type="text"
              name="potencia"
              value={formData.potencia}
              onChange={handleInputChange}
              placeholder=" "
            />
            <span className="label">Potência (W ou kW) e Voltagem</span>
            <span className="example">Ex: 4500W - 220V</span>
          </div>

          {/* Uso médio */}
          <div className="input-wrapper">
            <input
              type="text"
              name="uso"
              value={formData.uso}
              onChange={handleInputChange}
              placeholder=" "
            />
            <span className="label">Uso médio por dia (horas)</span>
            <span className="example">Ex: 2h</span>
          </div>

          {/* Espaço */}
          <div className="input-wrapper">
            <input
              type="text"
              name="espaco"
              value={formData.espaco}
              onChange={handleInputChange}
              placeholder=" "
            />
            <span className="label">Selecione o espaço</span>
            <span className="example">Ex: Banheiro</span>
          </div>

          {/* Imagem */}
          <div className="input-wrapper">
            <input
              type="text"
              name="imagem"
              value={formData.imagem}
              onChange={handleInputChange}
              placeholder=" "
            />
            <span className="label">URL da imagem (opcional)</span>
            <span className="example">Ex: https://...</span>
          </div>

          {/* Sugestões */}
          <p className="p">Deseja receber sugestões para esse dispositivo?</p>
          <div className="toggle-switch" onClick={handleToggleChange}>
            <div
              className={`boto ${formData.receberSugestoes ? "on" : "off"}`}
            />
          </div>

          <button className="button" type="submit">
            <div className="frame-4">
              <div className="text-wrapper-10">SALVAR</div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnovodispositivo;
