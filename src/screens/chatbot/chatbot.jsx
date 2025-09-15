// --- START OF FILE Chatbot.jsx ---

import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // <--- Adicione esta linha aqui!

// === ATENÇÃO DE SEGURANÇA ===
// Sua API Key do Google Gemini está exposta aqui.
// ISTO SÓ É ACEITÁVEL SE O PROGRAMA PERMANECER LOCAL NO SEU COMPUTADOR.
// NUNCA FAÇA DEPLOY EM UM AMBIENTE PÚBLICO NA WEB!
// PARA DEPLOY PÚBLICO, É IMPRESCINDÍVEL USAR UM BACKEND PROXY.
const GEMINI_API_KEY = 'SUA_API_KEY_AQUI'; // <<< SUBSTITUA PELA SUA CHAVE REAL

// Assumindo que marked e DOMPurify são carregados via CDN no seu index.html
// Se você os instalou via npm, descomente as linhas abaixo:
// import { marked } from 'marked';
// import DOMPurify from 'dompurify';

function Chatbot() {
    const chatMessagesRef = useRef(null); // Ref para a div de mensagens para rolagem
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        { text: 'Olá! Sou seu assistente de energia. Posso te ajudar com dúvidas sobre o aplicativo, produtos GoodWe, gerenciar seus dispositivos e verificar o status de energia da sua casa. Como posso ajudar?', role: 'bot', isMarkdown: false }
    ]);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    
    // Estado para dados do usuário e dispositivos
    const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
    const [currentUserData, setCurrentUserData] = useState(null);

    // --- Efeito para Carregar Dados do Usuário e Autenticação ---
    useEffect(() => {
        const email = sessionStorage.getItem('usuarioLogadoEmail');
        if (!email) {
            window.location.href = 'Logar.html';
        } else {
            setLoggedInUserEmail(email);
            let contas = JSON.parse(localStorage.getItem('contas')) || [];
            const user = contas.find(c => c.email === email);
            if (!user) {
                window.location.href = 'Logar.html'; // Redireciona se o usuário não for encontrado
            } else {
                if (!user.dispositivos || !Array.isArray(user.dispositivos)) {
                    user.dispositivos = [];
                }
                setCurrentUserData(user); // Define o usuário atual e seus dispositivos
            }
        }
    }, []); // Executa apenas uma vez ao montar o componente

    // --- Efeito para Rolar o Chat para o Final ---
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]); // Rola sempre que as mensagens mudam

    // --- Efeito para Salvar Dados do Usuário no localStorage (Persistência) ---
    useEffect(() => {
        if (currentUserData) {
            let contas = JSON.parse(localStorage.getItem('contas')) || [];
            const userIndex = contas.findIndex(c => c.email === loggedInUserEmail);
            if (userIndex !== -1) {
                contas[userIndex] = currentUserData; // Atualiza o objeto do usuário completo
                localStorage.setItem('contas', JSON.stringify(contas));
            }
        }
    }, [currentUserData, loggedInUserEmail]); // Salva quando currentUserData ou email de login muda

    // --- Funções de UI ---
    const addMessage = (text, role, isMarkdown = false) => {
        setMessages(prevMessages => [...prevMessages, { text, role, isMarkdown }]);
    };

    const updateLastBotMessage = (newText, isMarkdown = false) => {
        setMessages(prevMessages => {
            const newMessages = [...prevMessages];
            const lastBotMessageIndex = newMessages.length - 1; // Assume que a última é a "digitando..."
            if (lastBotMessageIndex >= 0 && newMessages[lastBotBotMessageIndex].role === 'bot') {
                newMessages[lastBotMessageIndex] = { text: newText, role: 'bot', isMarkdown };
            }
            return newMessages;
        });
    };

    // --- Lógica do Chatbot ---
    const getBotResponse = async (userMessage) => {
        const lowerCaseMessage = userMessage.toLowerCase();
        let localResponse = null;
        let dispositivos = currentUserData?.dispositivos || []; // Garante que dispositivos seja um array

        // === COMANDOS LOCAIS (prioridade 1) ===
        // ... (Mesma lógica de comandos locais do seu chatbot.js) ...
        // Certifique-se de que a variável 'dispositivos' usada aqui é a do estado do React,
        // e que as atualizações de dispositivos chamem 'setCurrentUserData' para persistir.

        // 1. Perguntas sobre o aplicativo
        if (lowerCaseMessage.includes('aplicativo') || lowerCaseMessage.includes('app') || lowerCaseMessage.includes('funciona')) {
            localResponse = "Este aplicativo permite que você gerencie seus dispositivos de energia, visualize o consumo total e monitore o status da sua bateria. Você pode cadastrar, editar e desligar dispositivos, além de otimizar o consumo.";
        }
        // 2. Perguntas sobre produtos GoodWe (Placeholder - resposta genérica)
        else if (lowerCaseMessage.includes('goodwe') || lowerCaseMessage.includes('inversor') || lowerCaseMessage.includes('bateria goodwe')) {
            localResponse = "Os produtos GoodWe são soluções avançadas para energia solar, incluindo inversores e sistemas de armazenamento de bateria. Eles são conhecidos pela eficiência e confiabilidade. Para informações detalhadas sobre um modelo específico, consulte o site oficial ou um especialista. (Esta é uma resposta genérica, em um sistema real, a IA buscaria em uma base de conhecimento GoodWe).";
        }
        // 3. Cadastrar dispositivos (lógica para extrair nome, importância, consumo e adicionar)
        else if (lowerCaseMessage.includes('cadastrar dispositivo') || lowerCaseMessage.includes('adicionar dispositivo')) {
            const parts = lowerCaseMessage.split(' ');
            const nomeIndex = parts.indexOf('nome');
            const importanciaIndex = parts.indexOf('importancia');
            const consumoIndex = parts.indexOf('consumo');

            if (nomeIndex !== -1 && importanciaIndex !== -1 && consumoIndex !== -1 &&
                parts[nomeIndex + 1] && parts[importanciaIndex + 1] && parts[consumoIndex + 1]) {

                const nome = parts[nomeIndex + 1];
                const importancia = parseInt(parts[importanciaIndex + 1]);
                const consumo = parseFloat(parts[consumoIndex + 1]);

                if (nome && !isNaN(importancia) && importancia >= 1 && importancia <= 3 && !isNaN(consumo) && consumo > 0) {
                    const novoDispositivo = {
                        id: Date.now(),
                        nome: nome.replace(/_/g, ' '),
                        importancia: importancia,
                        consumo: consumo,
                        ligado: true
                    };
                    // Atualiza o estado do React
                    setCurrentUserData(prev => ({
                        ...prev,
                        dispositivos: [...prev.dispositivos, novoDispositivo]
                    }));
                    localResponse = `Dispositivo '${novoDispositivo.nome}' com importância ${novoDispositivo.importancia} e consumo ${novoDispositivo.consumo} kWh cadastrado com sucesso!`;
                } else {
                    localResponse = "Para cadastrar um dispositivo, preciso do nome, importância (1-3) e consumo (kWh). Ex: 'cadastrar dispositivo nome_da_tv importancia 2 consumo 0.1'.";
                }
            } else {
                localResponse = "Para cadastrar um dispositivo, preciso do nome, importância (1-3) e consumo (kWh). Ex: 'cadastrar dispositivo nome_da_tv importancia 2 consumo 0.1'.";
            }
        }
        // 4. Desligar dispositivos (lógica para encontrar e desligar um dispositivo pelo nome)
        else if (lowerCaseMessage.includes('desligar dispositivo') || lowerCaseMessage.includes('desligar o') || lowerCaseMessage.includes('apagar o')) {
            const parts = lowerCaseMessage.split(' ');
            const keywordIndex = parts.indexOf('desligar') !== -1 ? parts.indexOf('desligar') : parts.indexOf('apagar');
            
            let deviceNameToToggle = '';
            if (keywordIndex !== -1 && parts.length > keywordIndex + 1) {
                deviceNameToToggle = parts.slice(keywordIndex + 1).join(' ').trim();
                deviceNameToToggle = deviceNameToToggle.replace(/^(o|a|os|as)\s+/, '').replace(/^(luz|ar|tv|geladeira)\s+/, '');
            }

            if (deviceNameToToggle) {
                const updatedDispositivos = dispositivos.map(d => 
                    d.nome.toLowerCase().includes(deviceNameToToggle) && d.ligado 
                        ? { ...d, ligado: false } 
                        : d
                );

                const foundDevice = dispositivos.find(d => d.nome.toLowerCase().includes(deviceNameToToggle) && d.ligado);

                if (foundDevice) {
                    setCurrentUserData(prev => ({ ...prev, dispositivos: updatedDispositivos }));
                    localResponse = `Dispositivo '${foundDevice.nome}' foi desligado com sucesso.`;
                } else {
                    localResponse = `Não encontrei um dispositivo ligado chamado '${deviceNameToToggle}'. Você pode listar os dispositivos para verificar os nomes?`;
                }
            } else {
                localResponse = "Para desligar um dispositivo, me diga o nome dele. Ex: 'desligar a TV' ou 'desligar o ar condicionado'.";
            }
        }
        // 5. Status de energia da casa (lógica para exibir consumo e status da bateria)
        else if (lowerCaseMessage.includes('status energia') || lowerCaseMessage.includes('consumo atual') || lowerCaseMessage.includes('nivel bateria')) {
            const consumoTotalAtual = dispositivos.filter(d => d.ligado).reduce((acc, d) => acc + d.consumo, 0);
            
            let nivelBateria = currentUserData?.nivelBateriaKWh || 0;
            let maxBateria = currentUserData?.maxBateriaKWh || 3000;
            let modoOperacaoAtual = currentUserData?.modoOperacao || 'concessionaria';
            let porcentagemBateria = (maxBateria > 0) ? (nivelBateria / maxBateria) * 100 : 0;

            localResponse = `Seu consumo atual é de **${consumoTotalAtual.toFixed(2)} kWh**.<br>`;
            localResponse += `Sua bateria está em **${porcentagemBateria.toFixed(0)}%** (${nivelBateria.toFixed(0)} kWh de ${maxBateria} kWh).<br>`;
            localResponse += `O modo de operação atual é **${modoOperacaoAtual}**.`;
        }
        // 6. Listar dispositivos (lógica para listar todos os dispositivos do usuário)
        else if (lowerCaseMessage.includes('listar dispositivos') || lowerCaseMessage.includes('quais dispositivos tenho')) {
            if (dispositivos.length === 0) {
                localResponse = "Você não tem nenhum dispositivo cadastrado.";
            } else {
                localResponse = "Seus dispositivos cadastrados:\n";
                dispositivos.forEach(d => {
                    localResponse += `- **${d.nome}** (Importância: ${d.importancia}, Consumo: ${d.consumo} kWh) - _${d.ligado ? 'Ligado' : 'Desligado'}_\n`;
                });
            }
        }
        // 7. Ligar dispositivo (lógica para encontrar e ligar um dispositivo pelo nome)
        else if (lowerCaseMessage.includes('ligar dispositivo') || lowerCaseMessage.includes('ligar o')) {
            const parts = lowerCaseMessage.split(' ');
            const keywordIndex = parts.indexOf('ligar');
            let deviceNameToToggle = '';
            if (keywordIndex !== -1 && parts.length > keywordIndex + 1) {
                deviceNameToToggle = parts.slice(keywordIndex + 1).join(' ').trim();
                deviceNameToToggle = deviceNameToToggle.replace(/^(o|a|os|as)\s+/, '');
            }

            if (deviceNameToToggle) {
                const updatedDispositivos = dispositivos.map(d => 
                    d.nome.toLowerCase().includes(deviceNameToToggle) && !d.ligado 
                        ? { ...d, ligado: true } 
                        : d
                );

                const foundDevice = dispositivos.find(d => d.nome.toLowerCase().includes(deviceNameToToggle) && !d.ligado);
                
                if (foundDevice) {
                    setCurrentUserData(prev => ({ ...prev, dispositivos: updatedDispositivos }));
                    localResponse = `Dispositivo '${foundDevice.nome}' foi ligado com sucesso.`;
                } else {
                    localResponse = `Não encontrei um dispositivo desligado chamado '${deviceNameToToggle}'. Ele já pode estar ligado ou o nome está incorreto.`;
                }
            } else {
                localResponse = "Para ligar um dispositivo, me diga o nome dele. Ex: 'ligar a TV'.";
            }
        }

        // === CHAMADA DIRETA À API GEMINI (prioridade 2) ===
        if (localResponse !== null) {
            return localResponse;
        } else {
            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
                        generationConfig: { temperature: 0.9, topP: 0.8, maxOutputTokens: 500 }
                    })
                });

                if (!res.ok) {
                    const errorBody = await res.json().catch(() => ({ error: { message: res.statusText } }));
                    throw new Error(`Erro na API Gemini (${res.status}): ${errorBody.error?.message || res.statusText}`);
                }

                const data = await res.json();
                console.log("Resposta bruta da API Gemini:", data); 

                let reply = 'Não consegui gerar resposta.';

                if (data && data.error) {
                    reply = `Erro da API Gemini: ${data.error.message || JSON.stringify(data.error)}`;
                } else if (data?.candidates && Array.isArray(data.candidates) && data.candidates.length > 0) {
                    reply = data.candidates[0]?.content?.parts[0]?.text || reply;
                }
                return reply;

            } catch (error) {
                console.error("Erro ao comunicar com a API Gemini diretamente:", error);
                return `Desculpe, tive um problema para me conectar com o assistente de IA. Detalhes: ${error.message}. Por favor, verifique sua API Key ou tente novamente mais tarde.`;
            }
        }
    };

    // --- Handlers de Eventos ---
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = async () => {
        const userMessage = inputValue.trim();
        if (!userMessage) return;

        addMessage(userMessage, 'user');
        setInputValue('');
        setIsInputDisabled(true); // Desabilita o input

        addMessage('Digitando...', 'bot', false); // Adiciona mensagem de "digitando..."

        try {
            const botResponse = await getBotResponse(userMessage);
            updateLastBotMessage(botResponse, true); // Atualiza a última mensagem com a resposta real
        } catch (error) {
            console.error("Erro no processamento da resposta do bot:", error);
            updateLastBotMessage(`Erro ao obter resposta: ${error.message}`, false);
        } finally {
            setIsInputDisabled(false); // Reabilita o input
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isInputDisabled) {
            e.preventDefault(); // Impede o comportamento padrão do Enter (ex: nova linha em textarea)
            handleSendMessage();
        }
    };

    const handleBackClick = () => {
        window.location.href = 'index.html';
    };

    // --- Renderização JSX ---
    return (
        <div className="chatbot-container">
            <header className="chatbot-header">
                <button id="btnVoltar" className="back-btn" onClick={handleBackClick}>&lt;</button>
                <h2>Fale com a Voltrix Assistente</h2>
            </header>

            <div className="chat-messages" id="chatMessages" ref={chatMessagesRef}>
                {messages.map((msg, index) => (
                    <div
                        key={index} // Keys são importantes para listas em React
                        className={`message ${msg.role}-message`}
                        dangerouslySetInnerHTML={msg.isMarkdown ? { __html: DOMPurify.sanitize(marked.parse(msg.text)) } : undefined}
                    >
                        {!msg.isMarkdown && msg.text}
                    </div>
                ))}
            </div>

            <div className="chat-input-area">
                <input
                    type="text"
                    id="chatInput"
                    placeholder="Digite aqui..."
                    autoComplete="off"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    disabled={isInputDisabled}
                />
            </div>
        </div>
    );
}

export default Chatbot;

// --- END OF FILE Chatbot.jsx ---