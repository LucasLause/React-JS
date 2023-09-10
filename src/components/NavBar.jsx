import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/" id="a-logo">
                    <img src="../../img/logos/logo.png" alt="logo" id="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/remeras">Remeras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/buzos">Buzos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/vinilos">Vinilos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/collares">Collares</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar