import "../css/NavBar.css"
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-container">
            <NavLink className="nav-links" to="/">
                <img className="nav-logo" src="../logo.png" alt="Logo del Sitio" />
            </NavLink>
            <NavLink className="nav-links" to="/category/pcs armadas">PCs Armadas</NavLink>
            <NavLink className="nav-links" to="/category/microprocesadores">Microprocesadores</NavLink>
            <NavLink className="nav-links" to="/category/placas de video">Placas de Video</NavLink>
            <NavLink className="nav-links" to="/category/gabinetes">Gabinetes</NavLink>
            <NavLink className="nav-links" to="/category/notebooks">Notebooks</NavLink>
            <NavLink className="nav-links" to="/category/perifericos">Perifericos</NavLink>
            <NavLink className="nav-links" to="/cart"><CartWidget/></NavLink>
        </nav>
    )
};

export default NavBar;