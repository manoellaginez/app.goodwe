
export default function NavBar () {
    return(
        <div>
            <nav className="bottom-nav">
                <a href="/chatbot">
                    <div className="nav-item">
                        <img src="/img/chat.png" alt="Ícone de Chat" />
                        <span>Chat</span>
                    </div>
                </a>
                
                <a href="/gastos">
                <div className="nav-item">
                <img src="/img/gastos.png" alt="Ícone de Gastos" />
                <span>Gastos</span>
                </div>
                </a>

                <a href="/homepage2">
                <div className="nav-item active">
                <div className="nav-circle">
                    <img src="/img/home.png" alt="Ícone de Início" />
                    <span>Início</span>
                </div>
                </div>
                </a>

                <a href="/conta">
                <div className="nav-item">
                <img src="/img/conta.png" alt="Ícone de Conta" />
                <span>Conta</span>
                </div>
                </a>

                <a href="/menu">
                <div className="nav-item">
                <img src="/img/mais.png" alt="Ícone de Menu" />
                <span></span>
                </div>
                </a>
            </nav>
        </div>
    )
}