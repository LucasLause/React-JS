import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="../index.html" id="a-logo">
                    <img src="../../img/logos/logo.png" alt="logo" id="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="../index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/merch.html">Merch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/discografia.html">Discografia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/sobreNosotros.html">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar