import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__logo">BrainStation Dashboard</h2>
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
