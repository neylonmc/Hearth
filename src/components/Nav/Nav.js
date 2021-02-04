import React from "react";
import { Navbar, Nav } from "rsuite";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

const Header = ({ onSelect, activeKey }) => {
  return (
    <Navbar
      className="navContainer"
      style={{ width: "100%", backgroundColor: "transparent" }}
    >
      <Navbar.Header>
        <Link className="title" to="/">
          hearth
        </Link>
      </Navbar.Header>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey} pullRight>
          <Nav.Item eventKey="1">
            <Link id="nav-links" to="/dashboard">
              dashboard
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="2">
            <Link id="nav-links" to="/profile">
              profile
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="3">
            <Link id="nav-links" to="/topics">
              topics
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="4">
            <Link id="nav-links" to="/post">
              new post
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="5">
            <Link id="nav-links" to="/settings">
              settings
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="6">
            <Link id="nav-links" to="/about">
              about
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="7">
            <Link id="nav-links" to="/login">
              log out
            </Link>
          </Nav.Item>
        </Nav>
        <SearchBar />
      </Navbar.Body>
    </Navbar>
  );
};

//   return (
//     <Navbar className="nav-toggle" style={{ height: "100%" }}>
//       <Navbar.Body>
//         <Nav pullRight>
//           <Nav.Item
//             onClick={onChange}
//             style={{ width: 56, textAlign: "center" }}
//           >
//             <Icon icon={expand ? "angle-left" : "angle-right"} />
//           </Nav.Item>
//         </Nav>
//       </Navbar.Body>
//     </Navbar>
//   );
// };

// class Header2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expand: true,
//     };
//     this.handleToggle = this.handleToggle.bind(this);
//   }
//   handleToggle() {
//     this.setState({
//       expand: !this.state.expand,
//     });
//   }
//   render() {
//     const { expand } = this.state;
//     return (
//       <div className="sidebar-page">
//         <Container>
//           <Sidebar
//             style={{
//               display: "flex",
//               flexDirection: "column",
//             }}
//             width={expand ? 260 : 56}
//             collapsible
//           >
//             <Sidenav.Header>
//               <div className={headerStyles}>
//                 <span className="title"> hearth </span>
//               </div>
//             </Sidenav.Header>
//             <Sidenav
//               expanded={expand}
//               defaultOpenKeys={["3"]}
//               defaultActiveKey="2"
//               style={{ c }}
//             >
//               <Sidenav.Body>
//                 <Nav>
//                   <Nav.Item eventKey="1" active>
//                     Dashboard
//                   </Nav.Item>
//                   <Nav.Item eventKey="2">Create New</Nav.Item>
//                   <Nav.Item eventKey="2">View Topics</Nav.Item>
//                   <Nav.Item eventKey="2">Settings</Nav.Item>
//                   <Nav.Item eventKey="2">About</Nav.Item>
//                   {/* <Dropdown
//                     eventKey="3"
//                     trigger="hover"
//                     title="Advanced"
//                     icon={<Icon icon="magic" />}
//                     placement="rightTop"
//                   >
//                     <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
//                     <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
//                     <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
//                     <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
//                     <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
//                   </Dropdown> */}
//                 </Nav>
//               </Sidenav.Body>
//             </Sidenav>
//             <NavToggle expand={expand} onChange={this.handleToggle} />
//           </Sidebar>
//         </Container>
//       </div>
//     );
//   }
// }

export default Header;
