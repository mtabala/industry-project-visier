import { NavLink } from "react-router-dom";
import "./Header.scss"
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            {/* <NavLink className="header__logo-link" to="/">
                <img className="header__logo-img" src="" alt="logo visier" />
            </NavLink> */}
      <div className="header__container">
        <h2 className="header__title">BrainStation Dashboard</h2>
        <div className="header__search">
          <form id="header__form" className="header__form">
            <input
              id="search"
              className="header__text"
              type="text"
              placeholder="Ask Visier"
              name="searchBar"
            />
          </form>
         <h3 className="header__filter">Filter</h3>
         <button className="header__date">March 20 - March 27</button>
        
        </div>
      </div>
    </header>
  );
}

export default Header;