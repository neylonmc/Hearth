import React, { Component } from "react";
import "./Nav.css";
import { MenuItems } from "./MenuItem";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";

export class Navbar extends Component {
  state = { clicked: false };


// const Header = ({ onSelect, activeKey }) => {
//   return (
//     <Navbar
//       className="navContainer"
//       style={{ width: "100%", backgroundColor: "transparent" }}
//     >
//       <Navbar.Header>
//         <Link className="title" to="/">
//           hearth
//         </Link>
//       </Navbar.Header>
//       <Navbar.Body>
//         <Nav onSelect={onSelect} activeKey={activeKey} pullRight>
//           <Nav.Item eventKey="1">
//             <Link id="nav-links" to="/dashboard">
//               dashboard
//             </Link>
//           </Nav.Item>
//           <Nav.Item eventKey="2">
//             <Link id="nav-links" to="/profile">
//               profile
//             </Link>
//           </Nav.Item>
//           <Nav.Item eventKey="3">
//             <Link id="nav-links" to="/topics">
//               topics
//             </Link>
//           </Nav.Item>
//           <Nav.Item eventKey="4">
//             <Link id="nav-links" to="/post">
//               new post
//             </Link>
//           </Nav.Item>
//           <Nav.Item eventKey="5">
//             <Link id="nav-links" to="/settings">
//               settings
//             </Link>
//           </Nav.Item>
//           <Nav.Item eventKey="6">
//             <Link id="nav-links" to="/login">
//               log out
//             </Link>
//           </Nav.Item>
//         </Nav>
//         <SearchBar />
//       </Navbar.Body>
//     </Navbar>
//   );
// };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">hearth</h1>
        <div className="menu-icon" onClick={this.handleClick} pullRight>
          <Header />
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} />
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
