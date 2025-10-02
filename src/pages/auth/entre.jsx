import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importação do seu componente Control 
import Control from '../../components/Control.jsx'; 
import { useAuth } from '../../contexts/UseAuth';

// Ícone do Google (SVG Inline)
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
        <path d="M12 11c0 2.2-1.5 3.5-3.5 3.5s-3.5-1.3-3.5-3.5 1.5-3.5 3.5-3.5 3.5 1.3 3.5 3.5zm0 0"></path>
        <path d="M22 12c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z"></path>
        <path d="M18 12h-6"></path>
        <path d="M14.5 9.5l-2.5 2.5"></path>
        <path d="M14.5 14.5l-2.5-2.5"></path>
    </svg>
);


const Entre = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    // Assumindo que useAuth existe
    const { login_user } = useAuth();

    // COR EXATA: #b42222
    const primaryColor = '#b42222';
    const textColor = 'var(--cor-texto-claro, #333333)';
    const secondaryTextColor = 'var(--cor-texto-escuro, #a6a6a6)';

    // AÇÃO AO CLICAR EM 'ENTRAR'
    const handleLogin = (e) => {
        e.preventDefault();
        login_user(email, senha);
        navigate('/'); 
    };

    // AÇÃO AO CLICAR EM 'CADASTRE-SE'
    const handleRegister = () => {
        navigate('/cadastro');
    };
    
    // Usamos o Control, mas forçamos a remoção do label via CSS
    // Note que o Control.jsx que você enviou usa 'textLabel' (props.label)

    return (
        <div className="auth-container" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '40px 25px', 
            maxWidth: '450px', 
            margin: '0 auto',
            minHeight: '100vh',
            backgroundColor: 'var(--cor-fundo-principal, #ffffff)',
            fontFamily: 'Inter, sans-serif'
        }}>
            
            {/* LOGO E TEXTO PROJETADO */}
            <div style={{ textAlign: 'center', margin: '30px 0 50px 0' }}>
                <h1 style={{ color: primaryColor, fontSize: '36px', fontWeight: 'bold', margin: 0, letterSpacing: '2px' }}>VOLTRIX</h1>
                <p style={{ color: secondaryTextColor, margin: '5px 0 0', fontSize: '16px' }}>projetado para você.</p>
            </div>
            
            <form className="auth-form-content" onSubmit={handleLogin} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                
                {/* E-MAIL */}
                <div style={inputContainerStyle}>
                    <Control 
                        set={setEmail} 
                        value={email} 
                        label={'E-mail'} // Rótulo (usado no CSS para posicionamento)
                        type={'email'} 
                        placeholder={'E-mail'}
                        className={'input-auth-field'}
                    />
                </div>
                
                {/* SENHA */}
                <div style={inputContainerStyle}>
                    <Control 
                        set={setSenha} 
                        value={senha} 
                        label={'Senha'} // Rótulo (usado no CSS para posicionamento)
                        type={'password'} 
                        placeholder={'Senha'}
                        className={'input-auth-field'}
                    />
                </div>
                
                {/* ESQUECI MINHA SENHA */}
                <p style={{ 
                    textAlign: 'left', 
                    color: secondaryTextColor, 
                    fontSize: '13px', 
                    marginBottom: '30px',
                    cursor: 'pointer',
                    marginTop: '5px' 
                }}>
                    Esqueci minha senha
                </p>

                {/* BOTÕES DE AÇÃO */}
                <button 
                    type="submit"
                    style={{ ...buttonStyle, backgroundColor: primaryColor, color: 'white', marginBottom: '15px' }}
                >
                    ENTRAR
                </button>

                <button 
                    type="button" // Tipo button para não disparar submit
                    onClick={handleRegister}
                    style={{ ...buttonStyle, backgroundColor: primaryColor, color: 'white' }}
                >
                    CADASTRE-SE
                </button>
            </form>
            
            {/* DIVISOR OU */}
            <p style={{ color: secondaryTextColor, textAlign: 'center', margin: '20px 0 20px 0', fontSize: '14px' }}>
                OU
            </p>

            {/* BOTÃO GOOGLE */}
            <button
                style={{ 
                    ...buttonStyle, 
                    backgroundColor: 'white', 
                    color: textColor, 
                    border: '1px solid var(--cor-borda, #ccc)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'none' // Botão do Google sem sombra forte
                }}
            >
                <GoogleIcon />
                Continuar com o Google
            </button>

            {/* TERMOS DE SERVIÇO */}
            <p style={{ color: secondaryTextColor, textAlign: 'center', fontSize: '12px', marginTop: '40px', lineHeight: '1.4' }}>
                Ao clicar em Cadastre-se, você concorda com os nossos<br/>
                <span style={{ fontWeight: 'bold', color: textColor, cursor: 'pointer' }}>Termos de Serviço</span> e com a <span style={{ fontWeight: 'bold', color: textColor, cursor: 'pointer' }}>Política de Privacidade</span>.
            </p>
            
            {/* ESTILO CSS ISOLADO PARA CORRIGIR O LAYOUT DO COMPONENTE CONTROL */}
            <style jsx="true">{`
                .input-auth-field {
                    /* Container do Control */
                    position: relative; 
                    margin-bottom: 20px;
                }
                .input-auth-field input {
                    /* Estilo do input */
                    width: 100%;
                    padding: 12px;
                    border-radius: 8px;
                    border: 1px solid var(--cor-borda, #ccc);
                    font-size: 16px;
                    box-sizing: border-box;
                    outline: none;
                }
                /* Estilo do RÓTULO (Label) */
                .input-auth-field label {
                    /* Remove o rótulo do fluxo normal para replicar o design */
                    position: absolute; 
                    top: -10px; /* Sobe o rótulo */
                    left: 10px;
                    background-color: white; /* Cobre a borda do input */
                    padding: 0 4px;
                    font-size: 12px;
                    color: ${secondaryTextColor};
                    font-weight: 500;
                    display: none; /* Mantendo o display none para simular o placeholder flutuante */
                }
            `}</style>
        </div>
    );
}

export default Entre;

// --- ESTILOS AUXILIARES ---

const inputContainerStyle = {
    marginBottom: '20px',
};

const buttonStyle = {
    width: '100%',
    padding: '14px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Inter, sans-serif'
};