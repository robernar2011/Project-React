

function Header() {
    return (
        <div className="header">
             <nav>
                <ul className="menu">
                    <li>
                        <a href="../html/home.html">Homepage</a>
                    </li>
                    <li>
                        <a href="../html/sobre.html">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="../html/eventos.html">Eventos</a>
                    </li>
                    <li>
                        <a href="../html/historia.html">Nossa História</a>
                    </li>
                    <li>
                        <a href="../html/contato.html">Contato</a>
                    </li>
                </ul>
            </nav>
            <div className="logo-content">
            
                    <img className="logo" src="../img/logo.png" alt="Logo" />
               
            </div>
        </div>
    )
}

export default Header