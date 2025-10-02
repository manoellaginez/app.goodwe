import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Comentado pois o ambiente de pré-visualização não suporta router

// ----------------------------------------------------------------------
// 1. COMPONENTE CONTROL (INPUT)
// ----------------------------------------------------------------------
const Control = ({ set, value, label, type, placeholder, className }) => {
    return (
        <div className={className}>
            {/* O label está aqui para acessibilidade, mas está escondido visualmente (sr-only) */}
            <label htmlFor={label} className="sr-only">{label}</label> 
            <input
                id={label}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => set(e.target.value)}
                className="control-input" 
            />
        </div>
    );
};


// ----------------------------------------------------------------------
// 2. ÍCONES EMBUTIDOS
// ----------------------------------------------------------------------

// Ícone do Google corrigido com o SVG oficial e otimizado (quatro cores)
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    style={{ marginRight: '8px' }}
  >
    <path fill="#EA4335" d="M24 9.5c3.15 0 5.3 1.35 6.52 2.48l4.77-4.77C32.74 4.09 28.77 2 24 2 14.82 2 7.17 7.98 4.06 16.06l5.93 4.6C11.73 14.59 17.39 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.5 24.5c0-1.62-.15-3.18-.43-4.68H24v9.05h12.7c-.55 2.95-2.21 5.45-4.7 7.13l7.38 5.72C43.93 37.44 46.5 31.39 46.5 24.5z"/>
    <path fill="#FBBC05" d="M9.99 28.54a14.46 14.46 0 0 1 0-9.08l-5.93-4.6a22.44 22.44 0 0 0 0 18.28l5.93-4.6z"/>
    <path fill="#34A853" d="M24 46c6.48 0 11.92-2.14 15.89-5.79l-7.38-5.72c-2.05 1.37-4.68 2.22-8.51 2.22-6.61 0-12.27-5.09-13.98-11.16l-5.93 4.6C7.17 40.02 14.82 46 24 46z"/>
  </svg>
);

// SVG do Logo VOLTRIX
const VoltrixLogo = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="260" height="39" viewBox="0 0 260 39" fill="none"> 
        <path d="M0.156172 2.97391C0.0520573 2.76522 0 2.53913 0 2.29565C0 2.03478 0.156172 1.72174 0.468515 1.35652C0.798211 0.973913 1.25805 0.782609 1.84803 0.782609H7.5483C8.90179 0.782609 9.93426 1.6087 10.6457 3.26087L20.7188 25.7478L30.7919 3.26087C31.5033 1.62609 32.5358 0.8 33.8893 0.782609H39.5895C40.1969 0.782609 40.6567 0.973913 40.9691 1.35652C41.2814 1.72174 41.4376 2.03478 41.4376 2.29565C41.4376 2.53913 41.3942 2.76522 41.3074 2.97391L26.3149 35.5304C25.4994 37.3043 24.2587 38.1913 22.5929 38.1913H18.8447C17.1789 38.1913 15.9382 37.3043 15.1226 35.5304L0.156172 2.97391Z" fill={color}/> 
        <path d="M79.3613 34.3304C75.8214 37.4435 70.6157 39 63.7441 39C56.8899 39 51.6842 37.4435 48.1269 34.3304C44.5697 31.2 42.7911 26.2522 42.7911 19.487C42.7911 12.7217 44.5697 7.78261 48.1269 4.66957C51.6842 1.55652 56.8899 0 63.7441 0C70.6157 0 75.8214 1.55652 79.3613 4.66957C82.9185 7.78261 84.6972 12.7217 84.6972 19.487C84.6972 26.2522 82.9185 31.2 79.3613 34.3304ZM72.2555 10.1739C70.5029 8.08696 67.6658 7.04348 63.7441 7.04348C59.8398 7.04348 57.0027 8.08696 55.2328 10.1739C53.4802 12.2609 52.6039 15.3739 52.6039 19.513C52.6039 23.6348 53.4802 26.7391 55.2328 28.8261C57.0027 30.8957 59.8398 31.9304 63.7441 31.9304C67.6658 31.9304 70.5029 30.8957 72.2555 28.8261C74.0081 26.7391 74.8844 23.6348 74.8844 19.513C74.8844 15.3739 74.0081 12.2609 72.2555 10.1739Z" fill={color}/> 
        <path d="M90.0591 35.7913V3.31304C90.0591 2.6 90.302 2 90.7879 1.51304C91.2737 1.02609 91.855 0.782609 92.5318 0.782609H97.4252C98.1019 0.782609 98.6745 1.02609 99.1431 1.51304C99.6289 2 99.8719 2.6 99.8719 3.31304V30.8087H122.543C123.22 30.8087 123.792 31.0522 124.261 31.5391C124.747 32.0261 124.989 32.6087 124.989 33.287V35.7391C124.989 36.4174 124.747 37 124.261 37.487C123.792 37.9565 123.22 38.1913 122.543 38.1913H92.5318C91.855 38.1913 91.2737 37.9652 90.7879 37.513C90.302 37.0435 90.0591 36.4696 90.0591 35.7913Z" fill={color}/> 
        <path d="M121.632 5.71304V3.26087C121.632 2.54783 121.866 1.95652 122.335 1.48696C122.803 1.01739 123.393 0.782609 124.105 0.782609H157.135C157.846 0.782609 158.436 1.01739 158.905 1.48696C159.373 1.95652 159.608 2.54783 159.608 3.26087V5.71304C159.608 6.42609 159.373 7.01739 158.905 7.48696C158.436 7.93913 157.846 8.16522 157.135 8.16522H145.526V35.7913C145.526 36.4696 145.283 37.0435 144.797 37.513C144.329 37.9652 143.756 38.1913 143.079 38.1913H138.16C137.483 38.1913 136.902 37.9652 136.416 37.513C135.948 37.0435 135.713 36.4696 135.713 35.7913V8.16522H124.105C123.393 8.16522 122.803 7.93913 122.335 7.48696C121.866 7.01739 121.632 6.42609 121.632 5.71304Z" fill={color}/> 
        <path d="M202.633 37.0696C202.633 37.8174 202.19 38.1913 201.305 38.1913H195.059C194.399 38.1913 193.67 37.9565 192.872 37.487C192.091 37 191.493 36.4174 191.076 35.7391L186.651 28.8C184.829 25.9478 182.626 24.5217 180.04 24.5217H173.689V35.7391C173.689 36.4174 173.446 37 172.96 37.487C172.492 37.9565 171.919 38.1913 171.242 38.1913H166.349C165.672 38.1913 165.091 37.9565 164.605 37.487C164.119 37 163.876 36.4174 163.876 35.7391V3.26087C163.876 2.58261 164.111 2 164.579 1.51304C165.048 1.02609 165.62 0.782609 166.297 0.782609H187.771C191.744 0.782609 194.998 1.85217 197.531 3.9913C200.082 6.13043 201.357 9.01739 201.357 12.6522C201.357 17.713 198.087 20.887 191.545 22.1739C192.586 22.5565 193.549 23.2174 194.434 24.1565C195.319 25.0783 196.334 26.4261 197.479 28.2L202.216 35.7391C202.494 36.2261 202.633 36.6696 202.633 37.0696ZM173.689 17.1391H184.777C186.565 17.1391 188.135 16.7826 189.488 16.0696C190.859 15.3565 191.545 14.2174 191.545 12.6522C191.545 11.087 190.859 9.94783 189.488 9.23478C188.135 8.52174 186.565 8.16522 184.777 8.16522H173.689V17.1391Z" fill={color}/> 
        <path d="M206.98 35.7913V3.26087C206.98 2.58261 207.223 2 207.708 1.51304C208.194 1.02609 208.776 0.782609 209.452 0.782609H214.294C215.005 0.782609 215.595 1.02609 216.064 1.51304C216.55 2 216.792 2.58261 216.792 3.26087V35.7391C216.792 36.4174 216.541 37 216.038 37.487C215.552 37.9565 214.97 38.1913 214.294 38.1913H209.452C208.776 38.1913 208.194 37.9652 207.708 37.513C207.223 37.0435 206.98 36.4696 206.98 35.7913Z" fill={color}/> 
        <path d="M222.519 38.1913C221.651 38.1913 221.165 37.8 221.061 37.0174C221.061 36.6348 221.243 36.2087 221.608 35.7391L234.726 18.9652L222.363 3.26087C221.998 2.8087 221.816 2.38261 221.816 1.98261C221.816 1.18261 222.293 0.782609 223.248 0.782609H228.844C230.579 0.782609 232.097 1.6087 233.399 3.26087L240.531 12.3391L247.662 3.26087C248.946 1.62609 250.465 0.8 252.217 0.782609H257.814C258.768 0.782609 259.245 1.18261 259.245 1.98261C259.245 2.36522 259.063 2.7913 258.699 3.26087L246.335 18.9652L259.453 35.7391C259.818 36.1913 260 36.5565 260 36.8348C260 37.113 259.965 37.313 259.896 37.4348C259.705 37.9391 259.254 38.1913 258.542 38.1913H252.998C251.263 38.1913 249.753 37.3739 248.469 35.7391L240.531 25.5913L232.592 35.7391C231.308 37.3739 229.798 38.1913 228.063 38.1913H222.519Z" fill={color}/> 
    </svg> 
);

// ----------------------------------------------------------------------
// 3. COMPONENTE PRINCIPAL
// ----------------------------------------------------------------------

const Entre = () => {
    // navigate mockado para rodar na pré-visualização
    const navigate = useNavigate(); // agora sim funcionando de verdade
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    // CORES E CONSTANTES DO DESIGN
    const primaryColor = '#B42222'; 
    const secondaryInputColor = '#F6F6F6';
    const secondaryTextColor = '#828282';
    const linkColor = primaryColor; 
    const termTextColor = '#000000'; 
    const strongButtonColor = '#b42222'; 
    const googleButtonColor = '#EEEEEE'; 

    // Cor para o texto digitado (Carmesim Escuro)
    const inputTextColor = '#A6A6A6'; 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Tentativa de Login:', email, senha);
        navigate('/'); 
    };

    const handleRegister = () => {
        navigate('/cadastro');
    };

    return (
        <div className="auth-container">
            
            {/* ESTILOS CSS BASEADOS NAS MEDIDAS FORNECIDAS */}
            <style jsx="true">{`
                /* * 1. FONTE: Inter, já carregada no ambiente de preview * */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                :root {
                    --cor-primaria: ${primaryColor};
                    --cor-input-fundo: ${secondaryInputColor};
                    
                    /* MUDANÇA AQUI: O placeholder agora usa a mesma cor do texto digitado */
                    --cor-input-placeholder: ${inputTextColor}; 
                    
                    --cor-link: ${linkColor};
                    --cor-logo-texto: ${primaryColor}; 
                    --cor-google-fundo: ${googleButtonColor};
                    
                    /* Variável para a cor do texto que está sendo digitado */
                    --cor-input-texto-digitado: ${inputTextColor}; 
                }
                body, html, #root {
                    font-family: 'Inter', sans-serif;
                    background-color: #F8F4F4; 
                    margin: 0;
                    padding: 0;
                }
                .auth-container {
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: flex-end; 
                    
                    padding: 40px 25px; 
                    max-width: 450px; 
                    width: 100%;
                    margin: 0 auto;
                    min-height: 100vh;
                    box-sizing: border-box;
                    background-color: var(--cor-fundo-principal); 
                }

                /* --- CONTEÚDO DO TOPO/MEIO: LOGO --- */
                .logo-section {
                    text-align: center; 
                    margin-bottom: 50px; 
                }
                .logo-text {
                    color: var(--cor-logo-texto); 
                    margin: 5px 0 0; 
                    font-size: 15px; 
                    font-weight: 600; 
                    line-height: 150%; 
                }

                /* --- BLOCO DO FORMULÁRIO E BOTTOM ELEMENTS --- */
                .form-area {
                    width: 100%;
                    max-width: 322px; 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* --- INPUTS --- */
                .input-field-container {
                    margin-bottom: 15px; 
                    width: 100%;
                }
                .input-auth-field .control-input {
                    width: 100%;
                    padding: 10px 12px; 
                    border-radius: 12px; 
                    background: var(--cor-input-fundo); 
                    border: none;
                    
                    /* ** MUDANÇA PRINCIPAL AQUI: ADICIONANDO O SOMBREADO DESEJADO ** */
                    /* Antigo: box-shadow: 0 1px 2px 0 #a6a6a6; */
                    /* Novo: Sombra mais escura e deslocada para baixo (0 4px 6px -1px preto suave) */
                    box-shadow: 0 7px 5px 0 rgba(22, 22, 22, 0.26); 
                    
                    box-sizing: border-box;
                    font-size: 14px; 
                    /* Cor e peso da fonte do texto digitado (A6A6A6) */
                    font-weight: 600; 
                    color: var(--cor-input-texto-digitado); 
                    outline: none;
                }
                .input-auth-field .control-input::placeholder {
                    /* Agora usa --cor-input-placeholder, que foi setado para #A6A6A6 */
                    color: var(--cor-input-placeholder); 
                    font-weight: 600; 
                }
                
                /* --- LINK ESQUECI MINHA SENHA --- */
                .forgot-password-link {
                    color: var(--cor-link); 
                    font-size: 13px; 
                    font-weight: 600; 
                    cursor: pointer;
                    display: block;
                    margin-top: -5px; 
                    margin-bottom: 30px; 
                    text-align: left;
                    width: 100%; 
                }

                /* --- BOTÕES PRINCIPAIS (ENTRAR/CADASTRE-SE/GOOGLE) --- */
                .main-button {
                    width: 100%;
                    height: 43px; 
                    border-radius: 8px; 
                    color: #FFF; 
                    font-size: 14px; 
                    font-weight: 600; 
                    border: none;
                    cursor: pointer;
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    gap: 8px; 
                    transition: opacity 0.2s;
                    font-family: inherit; 
                }
                .login-button {
                    background-color: ${strongButtonColor}; 
                    margin-bottom: 8px; 
                }
                .register-button {
                    background-color: var(--cor-primaria); 
                }
                
                /* --- DIVISOR 'OU' --- */
                .divider-text {
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    margin: 30px 0; 
                    width: 100%;
                    color: ${secondaryTextColor}; /* Continua #828282 */
                    font-size: 14px;
                }
                .divider-text::before, .divider-text::after {
                    content: "";
                    flex: 1;
                    height: 1px;
                    background: ${secondaryTextColor};
                    opacity: 0.5;
                }
                .divider-text::before { margin-right: 15px; }
                .divider-text::after { margin-left: 15px; }

                /* --- BOTÃO GOOGLE --- */
                .google-button {
                    height: 43px; 
                    background: var(--cor-google-fundo);
                    color: ${termTextColor}; 
                    border: none; 
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); 
                    font-weight: 480;
                    font-size: 15px;
                }
                
                /* --- TERMOS: AJUSTADO PARA QUEBRA FORÇADA EM DUAS LINHAS --- */
                .terms-text {
                    color: ${secondaryTextColor}; /* Continua #828282 */
                    text-align: center; 
                    font-size: 13px; 
                    margin-top: 50px; 
                    line-height: 1.4;
                    width: 100%; 
                    font-weight: 500;
                }
                .terms-link {
                    font-weight: 500; 
                    color: ${termTextColor}; 
                    cursor: pointer;
                    text-decoration: none; 
                    white-space: nowrap; 
                }
                
                /* Corrigido: Esconde visualmente o texto para manter apenas o placeholder */
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
                }
            `}</style>

            <div className="logo-section">
                <VoltrixLogo color={primaryColor} />
                <p className="logo-text">projetado para você.</p>
            </div>
            
            <div className="form-area">
                <form className="auth-form-content" onSubmit={handleLogin} style={{ width: '100%' }}>
                    
                    <div className="input-field-container">
                        <Control 
                            set={setEmail} 
                            value={email} 
                            label={'E-mail'} 
                            type={'text'} 
                            placeholder={'E-mail'}
                            className={'input-auth-field'}
                        />
                    </div>
                    
                    <div className="input-field-container">
                        <Control 
                            set={setSenha} 
                            value={senha} 
                            label={'Senha'} 
                            type={'password'} 
                            placeholder={'Senha'}
                            className={'input-auth-field'}
                        />
                    </div>
                    
                    {/* ESQUECI MINHA SENHA */}
                    <span className="forgot-password-link">
                        Esqueci minha senha
                    </span>


          <button type="submit" className="main-button login-button">
            ENTRAR
          </button>

          <button type="button" onClick={handleRegister} className="main-button register-button">
            CADASTRE-SE
          </button>
        </form>
                
                {/* DIVISOR OU */}
                <p className="divider-text">
                    ou
                </p>

                {/* BOTÃO GOOGLE: Ícone e cores corrigidos */}
                <button
                    className="main-button google-button"
                    style={{ width: '100%' }}
                >
                    <GoogleIcon />
                    Continuar com o Google
                </button>

                {/* TERMOS DE SERVIÇO: <br/> inserido para forçar a quebra em duas linhas */}
                <p className="terms-text">
                    Ao clicar em cadastro, você concorda com nossos<br/> <span className="terms-link">Termos de Serviço </span>
                    e com a <span className="terms-link">Política de Privacidade</span>
                </p>
            </div>
        </div>
    );
}

// O componente App é necessário para a pré-visualização.
const App = () => <Entre />;

export default App;