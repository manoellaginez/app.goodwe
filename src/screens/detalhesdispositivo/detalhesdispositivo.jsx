// --- START OF FILE DetalhesDispositivo.jsx ---

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Para gerenciar parâmetros de URL e navegação no React Router
// import { marked } from 'marked'; // Descomente se instalou via npm
// import DOMPurify from 'dompurify'; // Descomente se instalou via npm

// Se você tiver um arquivo CSS separado para este componente, importe-o aqui:
import '../css/detalhes-dispositivo.css'; 

// === ATENÇÃO DE SEGURANÇA ===
// Sua API Key do Google Gemini está exposta neste arquivo JavaScript.
// ISSO SÓ É ACEITÁVEL SE O PROGRAMA PERMANECER LOCAL NO SEU COMPUTADOR.
// NUNCA DEPLOY ISSO EM UM AMBIENTE PÚBLICO NA WEB!
// PARA DEPLOY PÚBLICO, É IMPRESCINDÍVEL USAR UM BACKEND PROXY.
const GEMINI_API_KEY = 'SUA_API_KEY_AQUI'; // <<< SUBSTITUA PELA SUA CHAVE REAL
const CUSTO_KWH = 0.80; // Exemplo: R$ 0,80 por kWh

function DetalhesDispositivo() {
    // Hooks do React Router para obter ID da URL e para navegação
    // Se você não está usando React Router, precisará adaptar a forma de obter o ID e navegar.
    const { id } = useParams(); // Assume que a rota é algo como /detalhes/:id
    const navigate = useNavigate();

    const [device, setDevice] = useState(null);
    const [activeTab, setActiveTab] = useState('hoje'); // 'hoje' ou 'esteMes'
    const [aiAnalysisMessage, setAiAnalysisMessage] = useState('Carregando análise da Voltrix Assistente...');

    // Assumindo que marked e DOMPurify estão disponíveis globalmente ou importados
    const marked = window.marked || (text => text); // Fallback simples se não global
    const DOMPurify = window.DOMPurify || { sanitize: html => html }; // Fallback simples

    // --- Efeito para Carregar Dados do Usuário e do Dispositivo ---
    useEffect(() => {
        const usuarioLogadoEmail = sessionStorage.getItem('usuarioLogadoEmail');
        if (!usuarioLogadoEmail) {
            navigate('/Logar.html'); // Usando navigate do React Router
            return;
        }

        if (!id) {
            alert("ID do dispositivo não encontrado na URL. Redirecionando para a página inicial.");
            navigate('/index.html'); // Usando navigate do React Router
            return;
        }

        const contas = JSON.parse(localStorage.getItem('contas')) || [];
        const usuarioAtual = contas.find(c => c.email === usuarioLogadoEmail);

        if (!usuarioAtual || !usuarioAtual.dispositivos) {
            alert("Dados do usuário ou dispositivos não encontrados. Redirecionando para a página inicial.");
            navigate('/index.html'); // Usando navigate do React Router
            return;
        }

        const foundDevice = usuarioAtual.dispositivos.find(d => d.id === parseInt(id));
        if (foundDevice) {
            setDevice(foundDevice);
            // Os cálculos de consumo e análise de IA serão acionados via useEffect quando 'device' for definido
        } else {
            alert("Dispositivo não encontrado. Redirecionando para a página inicial.");
            navigate('/index.html'); // Usando navigate do React Router
        }
    }, [id, navigate]); // Dependências: id da URL e a função navigate

    // --- Efeito para Calcular Consumo e Buscar Análise de IA ---
    useEffect(() => {
        if (device) {
            calculateAndAnalyze();
        }
    }, [device, activeTab]); // Recalcula e analisa quando o dispositivo ou a aba muda

    // --- Funções de Cálculo de Consumo (Simulado) ---
    const calculateConsumptionData = () => {
        if (!device) return null;

        let tempoExecucaoHoras = 0; // em horas
        let usoEnergiaKWh = 0; // em kWh
        let potenciaAtualWatts = 0; // em watts (se ligado)

        if (device.ligado) {
            potenciaAtualWatts = device.consumo * 1000; // Converte kWh/h para Watts
        }

        if (activeTab === 'hoje') {
            tempoExecucaoHoras = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
            usoEnergiaKWh = device.consumo * tempoExecucaoHoras;
        } else { // 'esteMes'
            const diasNoMes = 30;
            const horasMediasPorDia = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
            tempoExecucaoHoras = diasNoMes * horasMediasPorDia;
            usoEnergiaKWh = device.consumo * tempoExecucaoHoras;
        }

        const custo = usoEnergiaKWh * CUSTO_KWH;

        return {
            tempoExecucao: tempoExecucaoHoras,
            usoEnergia: usoEnergiaKWh,
            potenciaAtual: potenciaAtualWatts,
            custo: custo
        };
    };

    // --- Função para Chamar a API Gemini para Análise ---
    const fetchAiAnalysis = async (consumptionData) => {
        if (!device || !consumptionData) {
            setAiAnalysisMessage(DOMPurify.sanitize(marked.parse("Não foi possível carregar os dados de consumo para análise.")));
            return;
        }

        setAiAnalysisMessage(DOMPurify.sanitize(marked.parse('Analisando consumo com a Voltrix Assistente...')));

        const { tempoExecucao, usoEnergia, potenciaAtual, custo } = consumptionData;

        const prompt = `Analise o seguinte consumo de energia para o dispositivo "${device.nome}" (ID: ${device.id}, Importância: ${device.importancia}, Consumo por hora base: ${device.consumo} kWh):
        
        Período: ${activeTab === 'hoje' ? 'Hoje' : 'Este Mês'}
        Tempo de Execução (simulado): ${tempoExecucao} horas
        Uso de Energia (simulado): ${usoEnergia.toFixed(3)} kWh
        Potência Atual (simulada, se ligado): ${potenciaAtual.toFixed(0)} W
        Custo (simulado): R$ ${custo.toFixed(2).replace('.', ',')}

        Considere que a instalação deste dispositivo foi recente. Forneça uma análise amigável sobre o uso de energia, se é alto ou baixo para um dispositivo como este, e dê alguma recomendação ou observação relevante, mantendo a resposta concisa em um parágrafo.`;

        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 0.7, topP: 0.8, maxOutputTokens: 200 }
                })
            });

            if (!res.ok) {
                const errorBody = await res.json().catch(() => ({ error: { message: res.statusText } }));
                throw new Error(`Erro na API Gemini (${res.status}): ${errorBody.error?.message || res.statusText}`);
            }

            const data = await res.json();
            let reply = 'Não consegui gerar análise.';

            if (data && data.error) {
                reply = `Erro da API Gemini: ${data.error.message || JSON.stringify(data.error)}`;
            } else if (data?.candidates && Array.isArray(data.candidates) && data.candidates.length > 0) {
                reply = data.candidates[0]?.content?.parts[0]?.text || reply;
            }
            setAiAnalysisMessage(DOMPurify.sanitize(marked.parse(reply)));

        } catch (error) {
            console.error("Erro ao comunicar com a API Gemini para análise:", error);
            setAiAnalysisMessage(DOMPurify.sanitize(marked.parse(`Desculpe, não consegui gerar a análise de IA. Detalhes: ${error.message}.`)));
        }
    };

    // Função para encapsular o cálculo e a análise
    const calculateAndAnalyze = async () => {
        const currentConsumptionData = calculateConsumptionData();
        if (currentConsumptionData) {
            // Se você quiser armazenar esses dados no estado do dispositivo:
            setDevice(prevDevice => ({ ...prevDevice, currentConsumptionData }));
            await fetchAiAnalysis(currentConsumptionData);
        }
    };

    // --- Funções de Eventos ---
    const handleBackClick = () => {
        navigate(-1); // Volta para a página anterior no histórico do navegador
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        // O useEffect para device e activeTab irá re-executar calculateAndAnalyze automaticamente
    };

    // Renderização condicional enquanto o dispositivo está carregando
    if (!device) {
        return (
            <div className="device-details-container">
                <header className="device-details-header">
                    <button className="back-btn" onClick={handleBackClick}>&lt;</button>
                    <h2>Carregando Dispositivo...</h2>
                </header>
                <div className="energy-card">
                    <p>Carregando detalhes do dispositivo...</p>
                </div>
            </div>
        );
    }

    // Desestruturar dados de consumo para facilitar a exibição
    const { tempoExecucao, usoEnergia, potenciaAtual, custo } = device.currentConsumptionData || {};

    return (
        <div className="device-details-container">
            <header className="device-details-header">
                <button className="back-btn" onClick={handleBackClick}>&lt;</button>
                <h2>{device.nome}</h2> {/* Título dinâmico */}
            </header>

            <div className="energy-card">
                <div className="toggle-buttons">
                    <button
                        id="tabHoje"
                        className={`toggle-button ${activeTab === 'hoje' ? 'active' : ''}`}
                        onClick={() => handleTabClick('hoje')}
                    >
                        Hoje
                    </button>
                    <button
                        id="tabEsteMes"
                        className={`toggle-button ${activeTab === 'esteMes' ? 'active' : ''}`}
                        onClick={() => handleTabClick('esteMes')}
                    >
                        Este Mês
                    </button>
                </div>

                <h3>Uso de Energia</h3>
                <div className="energy-summary">
                    <div className="energy-item">
                        <label>Tempo de Execução</label>
                        <strong>{tempoExecucao ? `${tempoExecucao} h` : '0 h'}</strong>
                    </div>
                    <div className="energy-item">
                        <label>Uso de Energia</label>
                        <strong>{usoEnergia ? `${usoEnergia.toFixed(3).replace('.', ',')} kWh` : '0,000 kWh'}</strong>
                    </div>
                    <div className="energy-item">
                        <label>Potência Atual</label>
                        <strong>{potenciaAtual !== undefined && custo !== undefined ? `${potenciaAtual < 1 ? '< 1' : potenciaAtual.toFixed(0)} w R$ ${custo.toFixed(2).replace('.', ',')}` : '0 w R$ 0,00'}</strong>
                    </div>
                </div>

                <div className="voltrix-assistant-section">
                    <h3>Voltrix Assistente</h3>
                    <div
                        id="aiAssistantMessageBox"
                        className="assistant-message-box"
                        dangerouslySetInnerHTML={{ __html: aiAnalysisMessage }}
                    >
                    </div>
                </div>
            </div>

            {/* A barra de navegação inferior foi removida conforme sua solicitação */}
        </div>
    );
}

export default DetalhesDispositivo;

// --- END OF FILE DetalhesDispositivo.jsx ---