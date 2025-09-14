import React from 'react';
import './style.css';

function AddDeviceForm() {
    return (
        <div className="container">
            <h1>Adicionar novo dispositivo</h1>

            <h2>Cadastre sua tomada Voltrix</h2>
            <p>Siga as instruções da caixa do seu produto e cadastre o token para conectar com o aplicativo</p>

            <div className="input-group">
                <input type="text" className="input-field" placeholder="Nome da tomada" />
                <span className="hint-text">Escolha um nome para sua tomada para o que ela atende. Exemplo: Chuveiro elétrico.</span>
            </div>

            <div className="input-group">
                <input type="text" className="input-field" placeholder="Local do dispositivo" />
                <span className="hint-text">Ambiente que o Voltrix estará instalado.</span>
            </div>

            <div className="input-group">
                <input type="text" className="input-field" placeholder="Token" />
                <span className="hint-text">Verifique e digite o código de Token da caixa do produto Voltrix.</span>
            </div>

            <div className="toggle-section">
                <label htmlFor="receiveSuggestions">Deseja receber sugestões para esse dispositivo?</label>
                <label className="switch">
                    <input type="checkbox" id="receiveSuggestions" defaultChecked />
                    <span className="slider"></span>
                </label>
            </div>

            <button className="save-button">SALVAR</button>
        </div>
    );
}

export default AddDeviceForm;