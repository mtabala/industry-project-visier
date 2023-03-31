import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./HeaderForm.scss";
import logo from "../../assets/logos/visier_logo.svg";

function HeaderForm() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} />
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

export default HeaderForm;
