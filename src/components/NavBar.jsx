import { NavLink, useLocation } from 'react-router-dom';

// Cores
const primaryColor = '#B42222'; // Vermelho vibrante (Fundo da barra, ícones/texto ativos)
const inactiveColor = '#fff'; // Branco (Cor da pílula ativa e dos ícones inativos)

// Dimensões Ajustadas
const navbarHeight = '46px';
const linkHeight = '36px';
const iconSize = '22px'; 
const navbarMaxWidth = '340px'; // 1. LARGURA GERAL MAIS APERTADA (Reduzido de 380px)
const navbarPadding = '5px 5px';

// --- ÍCONES SVG INLINE (Tamanho ajustado para 'iconSize') ---
const FaHome = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);
const FaDollarSign = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);
const FaMessage = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);
const FaUser = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);
const FaMenu = ({ style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

// --- COMPONENTE PRINCIPAL DA NAVBAR ---
export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { to: "/assistente", icon: FaMessage, label: "Assistente", isPill: false },
        { to: "/gastos", icon: FaDollarSign, label: "Gastos", isPill: false },
        { to: "/", icon: FaHome, label: "Início", isPill: true },           // Central e Pílula
        { to: "/perfil", icon: FaUser, label: "Perfil", isPill: false },
        { to: "/mais", icon: FaMenu, label: "Mais", isPill: false },
    ];

    // Estilos base para todos os links
    const linkBaseStyle = {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        height: linkHeight, // Altura ajustada
        padding: '0 8px', // Padding AUMENTADO para dar espaço aos ícones inativos
        borderRadius: '50px',
        cursor: 'pointer',
        flexShrink: 0,
        minWidth: linkHeight, 
        // A transição cubic-bezier garante o efeito "deslizável"
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)', 
    };
    
    // Estilo para o item ativo (pílula branca)
    const activeStyle = {
        backgroundColor: inactiveColor, // Fundo BRANCO
        minWidth: '90px', 
        maxWidth: '100px', 
        padding: '0 10px', 
    };

    return (
        <>
            {/* Estilos CSS para controlar a animação do texto e espaçamento */}
            <style>
                {`
                    /* 1. Estilo base do texto - Invisível por padrão */
                    .nav-item-text {
                        opacity: 0;
                        width: 0;
                        overflow: hidden;
                        white-space: nowrap;
                        transition: opacity 0.3s ease, width 0.3s ease 0.1s;
                        font-size: 13px; /* Fonte ligeiramente menor */
                        font-weight: 600;
                    }

                    /* 2. O texto só aparece quando o item está ATIVO */
                    .nav-item-link.active .nav-item-text {
                        opacity: 1;
                        width: auto;
                        margin-left: 8px; /* Espaço entre ícone e texto */
                        color: ${primaryColor} !important; 
                    }
                `}
            </style>

            <nav 
                className="floating-navbar"
                style={{
                    // Estilo do container PÍLULA FLUTUANTE (VERMELHO)
                    position: 'fixed', 
                    bottom: '-1px', // Voltando para 18px para o estilo flutuante
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    width: '100%',
                    backgroundColor: primaryColor, // Fundo VERMELHO 
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.25)',
                    padding: navbarPadding, // Padding final e mais apertado
                    zIndex: 99, 
                    display: 'flex',
                    justifyContent: 'space-around', 
                    alignItems: 'center',
                    height: navbarHeight 
                }}
            >
                {navItems.map(item => {
                    const isActive = location.pathname === item.to;
                    
                    return (
                        <NavLink 
                            key={item.to}
                            to={item.to}
                            data-is-pill={item.isPill} 
                            className={`nav-item-link ${isActive ? 'active' : ''}`}
                            style={{
                                ...linkBaseStyle, 
                                ...(isActive ? activeStyle : {})
                            }}
                        >
                            {/* Ícone - Cor forçada via style prop */}
                            <item.icon 
                                style={{ 
                                    width: iconSize, 
                                    height: iconSize, 
                                    flexShrink: 0,
                                    // AQUI: Margem à direita adicionada apenas quando o item está ativo
                                    marginRight: isActive ? '8px' : '0', 
                                    // Ícone: Vermelho se ativo, Branco se inativo
                                    color: isActive ? primaryColor : inactiveColor
                                }} 
                            />
                            
                            {/* O texto só é renderizado se for o item ATIVO */}
                            {isActive && (
                                <span 
                                    className="nav-item-text"
                                    // Força o texto para VERMELHO via style inline para máxima prioridade
                                    style={{ color: primaryColor }}
                                >
                                    {item.label}
                                </span>
                            )}
                        </NavLink>
                    );
                })}
            </nav>
        </>
    );
}
