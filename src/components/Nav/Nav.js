import React, { Component } from "react";
import "./Nav.css";
import { MenuItems } from "./MenuItem";
import SearchBar from "../SearchBar/SearchBar";

export class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo"><a href="/">hearth</a></h1>
        <div className="menu-icon" onClick={this.handleClick} pullRight>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
        </div>

        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                <a className={item.name} href={item.url}>
                  {item.title}
                </a>
              </div>
            );
          })}
          
          <SearchBar />
        </div>
      </nav>
    );
  }
}

export default Navbar;
