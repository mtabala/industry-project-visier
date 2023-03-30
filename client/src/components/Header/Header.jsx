import { NavLink } from "react-router-dom";
import "./Header.scss"

function Header() {
    return (
        <header className="header">
            <NavLink className="header__logo-link" to="/">
                <img className="header__logo-img" src="" alt="logo visier" />
            </NavLink>
        </header>
    )
}
export default Header;