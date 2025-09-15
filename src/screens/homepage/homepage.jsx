import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa o componente Link
import './style.css'; 

function HomePage() {
    const [activeTab, setActiveTab] = useState('todos'); 

    // O uso de document.querySelector pode causar problemas.
    // O ideal é gerenciar a mudança de estado e classes diretamente no JSX.
    // No seu caso, o useEffect não é necessário se você fizer o controle via estado.
    // Por exemplo: <button className={activeTab === 'filtrar' ? 'active' : ''}>
    
    const handleFilterClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container">
            <header>
                <h1>Minha casa</h1>
            </header>
            <div className="filter-bar">
                <div className="indicator"></div>
                <button
                    className={`filter-button ${activeTab === 'todos' ? 'active' : ''}`}
                    data-tab="todos"
                    onClick={() => handleFilterClick('todos')}
                >
                    Todos os dispositivos
                </button>
                <button
                    className={`filter-button ${activeTab === 'filtrar' ? 'active' : ''}`}
                    data-tab="filtrar"
                    onClick={() => handleFilterClick('filtrar')}
                >
                    Filtrar
                </button>
            </div>
            <main>
                <div className="add-items">
                    <Link to="/addnovodispositivo" className="add-button-link">
                        <h2>Adicionar itens</h2>
                        <p>Cadastre aqui seus gadgets inteligentes Voltrix para começar a sua automatização</p>
                        <button className="add-button">
                            <img src="/img/plus.png" alt="Ícone para adicionar um novo dispositivo" />
                            <i className="fas fa-plus"></i>
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default HomePage;