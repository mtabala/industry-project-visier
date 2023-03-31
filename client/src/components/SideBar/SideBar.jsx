import React from "react";
import "./SideBar.scss";

function SideBar() {
  return (
    <aside className="sidebar">
      <form id="sidebar__form" className="sidebar__form">
        <input
          id="search"
          className="header__text"
          type="text"
          placeholder="Search Templates"
          name="searchBar"
        />
      </form>
      <div className="sidebar__container">
        <button className="sidebar__main">All Templates</button>

        <h2 className="sidebar__title">Industry</h2>
        <div className="sidebar__box-1">
          <div className="sidebar__box-2">
            <button className="sidebar__button sidebar__yellow">E-Commerce</button>
            <button className="sidebar__button sidebar__purple">Healthcare</button>
            <button className="sidebar__button sidebar__teal">Retail</button>
          </div>
          <div className="sidebar__box-3">
            <button className="sidebar__button sidebar__green">Service</button>
            <button className="sidebar__button sidebar__blue">Technology</button>
          </div>
        </div>
        <p className="sidebar__more">see more</p>

        <h2 className="sidebar__title">Popular</h2>
        <div className="sidebar__box-1">
          <div className="sidebar__box-2">
            <button className="sidebar__button sidebar__yellow">Simplified</button>
            <button className="sidebar__button sidebar__purple">Hiring</button>
            <button className="sidebar__button sidebar__teal">Retention</button>
          </div>
          <div className="sidebar__box-3">
            <button className="sidebar__button sidebar__green">CEO Meeting</button>
            <button className="sidebar__button sidebar__blue">Onboarding</button>
          </div>
        </div>
        <p className="sidebar__more">see more</p>

        <h2 className="sidebar__title">Trending</h2>
        <div className="sidebar__box-1">
          <div className="sidebar__box-2">
            <button className="sidebar__button sidebar__yellow">Simplified</button>
            <button className="sidebar__button sidebar__purple">Hiring</button>
            <button className="sidebar__button sidebar__teal">Retention</button>
          </div>
          <div className="sidebar__box-3">
            <button className="sidebar__button sidebar__green">CEO Meeting</button>
            <button className="sidebar__button sidebar__blue">Onboarding</button>
          </div>
        </div>
        <p className="sidebar__more">see more</p>

        <h2 className="sidebar__title">Others</h2>
        <div className="sidebar__box-1">
          <div className="sidebar__box-2">
            <button className="sidebar__button sidebar__yellow">Commissions</button>
            <button className="sidebar__button sidebar__purple">Holidays</button>
            <button className="sidebar__button sidebar__teal">Profit</button>
          </div>
          <div className="sidebar__box-3">
            <button className="sidebar__button sidebar__green">Bonus</button>
            <button className="sidebar__button sidebar__blue">Vacations</button>
          </div>
        </div>
        <p className="sidebar__more">see more</p>
      </div>
    </aside>
  );
}

export default SideBar;
