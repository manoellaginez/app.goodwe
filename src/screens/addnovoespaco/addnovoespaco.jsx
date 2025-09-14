import React, { useState, useEffect } from 'react';
import './style.css'; 

//addnovoespaco agora equivale a página "Minha casa"
function HomePage() {
    const [activeTab, setActiveTab] = useState('todos'); 

    // useEffect para simular o comportamento do script no DOM
    useEffect(() => {
        const indicator = document.querySelector('.filter-bar .indicator');
        if (indicator) {
            if (activeTab === 'filtrar') {
                indicator.classList.add('right');
            } else {
                indicator.classList.remove('right');
            }
        }
    }, [activeTab]); // Roda sempre que activeTab mudar

    const handleFilterClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container">
            <header>
                <h1>Minha casa</h1>
            </header>
            <div className="filter-bar">
                <div className="indicator"></div> {/* Adicionamos o indicator */}
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
                    <Link to="/addnovodispositivo.jsx" className="add-button-link">
                    <h2>Adicionar itens</h2>
                    <p>Cadastre aqui seus gadgets inteligentes Voltrix para começar a sua automatização.</p>
                    <button className="add-button">
                        <i className="fas fa-plus"></i>
                    </button>
                    </Link>
                </div>
            </main>
          
    
        </div>
    );
}

export default HomePage;