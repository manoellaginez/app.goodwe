
export default function NavBar () {
    return(
        <div>
            <nav className="bottom-nav">
                <div className="nav-item">
                <img src="/img/chat.png" alt="Ícone de Chat" />
                <span>Chat</span>
                </div>
                <div className="nav-item">
                <img src="/img/gastos.png" alt="Ícone de Gastos" />
                <span>Gastos</span>
                </div>
                <div className="nav-item active">
                <div className="nav-circle">
                    <img src="/img/home.png" alt="Ícone de Início" />
                    <span>Início</span>
                </div>
                </div>
                <div className="nav-item">
                <img src="/img/conta.png" alt="Ícone de Conta" />
                <span>Conta</span>
                </div>
                <div className="nav-item">
                <img src="/img/mais.png" alt="Ícone de Menu" />
                <span></span>
                </div>
            </nav>
        </div>
    )
}