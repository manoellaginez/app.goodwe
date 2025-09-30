import React from 'react';

// Ícone de Envio (seta em círculo - visual mais limpo)
const FaChevronRight = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 16 16 12 12 8"></polyline>
        <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
);

// Ícone de Sugestão 1: Reduzir Consumo (Relâmpago)
const FaBolt = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

// Ícone de Sugestão 2: Status Dispositivos (Termômetro)
const FaThermometer = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
    </svg>
);

// Ícone de Sugestão 3: Melhor Horário (Relógio)
const FaClock = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

// Ícone de Sugestão 4: Dicas Personalizadas (Lâmpada)
const FaLightbulb = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M9 18V5.5c0-.4.3-.8.8-.8h4.4c.4 0 .8.3.8.8V18"></path>
        <path d="M12 21a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2z"></path>
        <path d="M12 21v2"></path>
    </svg>
);

// Componente principal da página do Assistente IA
export default function Assistente() {
    // Definindo as variáveis CSS
    const primaryColor = 'var(--cor-primaria)';
    const textColor = 'var(--cor-texto-claro)';
    const secondaryTextColor = 'var(--cor-texto-escuro)';
    const cardBackground = 'var(--cor-fundo-card)';
    const pageBackground = 'var(--cor-fundo)';

    // Mensagens de chat simuladas
    const [messages, setMessages] = React.useState([
        { 
            id: 1, 
            text: "Olá! Sou a assistente da Voltrix. Como posso te ajudar a otimizar o consumo de energia hoje?", 
            sender: 'bot', 
            time: '16:03' 
        },
    ]);
    const [inputMessage, setInputMessage] = React.useState('');
    const chatEndRef = React.useRef(null); // Referência para o fim da área de chat

    // Função para rolar para o final do chat quando novas mensagens chegarem
    React.useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    // Função para simular o envio de mensagem
    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            const newMessage = {
                id: messages.length + 1,
                text: inputMessage,
                sender: 'user',
                time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInputMessage('');
            
            // Simulação de resposta do bot após 1 segundo
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, {
                    id: prevMessages.length + 1,
                    text: "Essa é uma excelente pergunta! Vou processar a sua solicitação. (Esta será a área de resposta da IA)",
                    sender: 'bot',
                    time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                }]);
            }, 1000);
        }
    };

    // Função para enviar uma sugestão como mensagem do usuário
    const handleSendSuggestion = (suggestion) => {
        const newMessage = {
            id: messages.length + 1,
            text: suggestion,
            sender: 'user',
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
         // Simulação de resposta do bot após 1 segundo
         setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, {
                id: prevMessages.length + 1,
                text: "Entendido! Vamos analisar o seu pedido sobre " + suggestion.toLowerCase().replace('?', '.').replace('sugestões', 'sugestoes') + " (Resposta da IA à sugestão).",
                sender: 'bot',
                time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            }]);
        }, 1000);
    };

    // Componente individual da Mensagem
    const Message = ({ text, sender, time }) => (
        <div 
            className={`message ${sender}`}
            style={{
                display: 'flex',
                justifyContent: sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '10px',
            }}
        >
            <div 
                style={{
                    maxWidth: '80%',
                    padding: '10px 15px',
                    borderRadius: '15px',
                    borderTopLeftRadius: sender === 'bot' ? '2px' : '15px',
                    borderTopRightRadius: sender === 'user' ? '2px' : '15px',
                    backgroundColor: sender === 'user' ? primaryColor : cardBackground,
                    color: sender === 'user' ? 'white' : textColor,
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}
            >
                <p style={{ margin: 0, lineHeight: '1.4' }}>{text}</p>
                <span style={{ 
                    display: 'block', 
                    fontSize: '10px', 
                    textAlign: sender === 'user' ? 'right' : 'left', 
                    color: sender === 'user' ? 'rgba(255, 255, 255, 0.7)' : secondaryTextColor,
                    marginTop: '5px' 
                }}>
                    {time}
                </span>
            </div>
        </div>
    );

    // Dados das sugestões
    const suggestions = [
        { icon: FaBolt, title: "Reduzir consumo", text: "Como posso economizar energia?", color: primaryColor, bgColor: cardBackground },
        { icon: FaThermometer, title: "Status dos dispositivos", text: "Quais dispositivos estão ligados?", color: primaryColor, bgColor: cardBackground },
        { icon: FaClock, title: "Melhor horário", text: "Quando usar mais energia?", color: primaryColor, bgColor: cardBackground },
        { icon: FaLightbulb, title: "Dicas personalizadas", text: "Sugestões para minha casa", color: primaryColor, bgColor: cardBackground },
    ];


    return (
        <div className="assistente-page-container" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh', 
            maxWidth: '450px',
            margin: '0 auto',
            // Adiciona padding na parte inferior para compensar o input fixo e a navbar
            paddingBottom: '130px', 
            backgroundColor: 'var(--cor-fundo)'
        }}>
            {/* CABEÇALHO DA PÁGINA (Alinhado à esquerda e sem linha) */}
            <div className="page-header" style={{ padding: '20px 15px 15px', borderBottom: 'none', backgroundColor: 'var(--cor-fundo)' }}>
                <h1 style={{ color: primaryColor, fontSize: '28px', margin: '0', textAlign: 'left' }}>
                    Assistente Voltrix
                </h1>
                <p style={{ color: secondaryTextColor, fontSize: '14px', margin: '5px 0 0', textAlign: 'left' }}>
                   Sua consultora de energia inteligente
                </p>
            </div>
            
            {/* ÁREA DE CHAT (Scrollable) */}
            <div 
                className="chat-area" 
                style={{ flexGrow: 1, overflowY: 'auto', padding: '0 15px', marginBottom: '15px' }}
            >
                {messages.map(msg => (
                    <Message key={msg.id} text={msg.text} sender={msg.sender} time={msg.time} />
                ))}
                <div ref={chatEndRef} /> {/* Referência para rolagem automática */}

                {/* Seção de Sugestões (Alinhado à Esquerda) */}
                <h3 style={{ color: textColor, fontSize: '16px', margin: '20px 0 10px', textAlign: 'left' }}>Sugestões Rápidas</h3>
                <div className="suggestions-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '10px', 
                    marginBottom: '20px' 
                }}>
                    {suggestions.map((s, index) => (
                        <div 
                            key={index}
                            onClick={() => handleSendSuggestion(s.text)}
                            style={{
                                backgroundColor: s.bgColor,
                                padding: '15px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
                                border: '1px solid var(--cor-borda)'
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <s.icon style={{ color: primaryColor, marginBottom: '5px' }} />
                            <p style={{ color: textColor, fontWeight: 'bold', fontSize: '14px', margin: 0 }}>{s.title}</p>
                            <p style={{ color: secondaryTextColor, fontSize: '12px', margin: '3px 0 0' }}>{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* INPUT DE MENSAGEM (Fixo na parte inferior) */}
            <div className="input-area" style={{ 
                padding: '10px 15px', 
                position: 'fixed', 
                bottom: '60px', 
                left: 0, 
                right: 0, 
                backgroundColor: pageBackground,
                zIndex: 10 
            }}>
                <div 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        maxWidth: '450px',
                        margin: '0 auto'
                    }}
                >
                    <input
                        type="text"
                        placeholder="Digite sua pergunta sobre energia..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        style={{
                            flexGrow: 1,
                            padding: '12px 15px',
                            borderRadius: '25px',
                            border: `1px solid var(--cor-borda)`,
                            backgroundColor: 'white', 
                            color: textColor,
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={inputMessage.trim() === ''}
                        style={{
                            backgroundColor: 'white', // Cor de onde escreve
                            color: primaryColor, // Cor do ícone
                            padding: '12px',
                            borderRadius: '50%',
                            border: `1px solid var(--cor-borda)`, // Borda sutil
                            cursor: inputMessage.trim() === '' ? 'not-allowed' : 'pointer',
                            opacity: inputMessage.trim() === '' ? 0.6 : 1,
                            transition: 'background-color 0.3s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        {/* Removi o transform para centralizar o novo ícone */}
                        <FaChevronRight style={{ width: '20px', height: '20px' }} /> 
                    </button>
                </div>
            </div>
        </div>
    );
}
