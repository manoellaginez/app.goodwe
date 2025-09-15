import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

function Gastos() {
    const navigate = useNavigate();

    const [totalGasto, setTotalGasto] = useState('R$ 0,00');
    const [detalhesGastos, setDetalhesGastos] = useState([]);

    // Efeito para simular os valores da imagem ao carregar a página
    useEffect(() => {
        // Redireciona para o login se não houver um usuário logado
        const usuarioLogadoEmail = sessionStorage.getItem('usuarioLogadoEmail');
        if (!usuarioLogadoEmail) {
            navigate('/Logar.html');
            return;
        }

        // Simula os valores exatos da imagem
        setTotalGasto('R$ 47,85');
        setDetalhesGastos([
            {
                type: 'device',
                nome: 'Tomada 01',
                tempoDeUso: 'XX', // Usando 'XX' como string para "XX horas"
                consumoBase: null, // Não é mais necessário, então definimos como null
                gastoEmReais: 22.31,
                tipoDispositivo: 'TV',
            },
        ]);
    }, [navigate]);

    const handleBackClick = () => {
        navigate('/index.html');
    };

    return (
        <div className="wrapper">
            <header className="header-gastos">
                <div>
                    <button id="btnVoltar" className="back-btn" onClick={handleBackClick}>&lt;</button>
                </div>
                <h1>Gastos de Energia</h1>
            </header>

            <div className="resumo-gastos-container">
                <h2>Seu gasto total é de...</h2>
                <h1 id="totalGasto">{totalGasto}</h1>

                <div className="detalhes-gastos" id="detalhesGastos">
                    {detalhesGastos.map((item, index) => {
                        if (item.type === 'message') {
                            return <p key={index}>{item.text}</p>;
                        } else {
                            return (
                                <div className="detalhe-item" key={index}>
                                    <div className="detalhe-info">
                                        <strong>{item.nome}</strong>
                                        <span>R$ {item.gastoEmReais.toFixed(2).replace('.', ',')}</span>
                                    </div>
                                    <div className="detalhe-subinfo">
                                        <span>Tempo de Uso</span>
                                        <span>{item.tempoDeUso} horas</span>
                                    </div>
                                    <div className="detalhe-subinfo">
                                        <span>Tipo</span>
                                        <span>{item.tipoDispositivo}</span>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default Gastos;
