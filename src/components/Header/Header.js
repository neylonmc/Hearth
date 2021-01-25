import React from "react";
import { Navbar, Nav } from "rsuite";
import { Link } from "react-router-dom";
import "rsuite/lib/styles/index.less";
import "./HeaderStyle.css";

const Header = ({ onSelect, activeKey }) => {
  return (
    <Navbar style={{ width: "100%", backgroundColor: "#62130A" }}>
      <Navbar.Header>
        <div className="title">hearth</div>
      </Navbar.Header>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey} pullRight>
          <Nav.Item
            eventKey="1"
            style={{
              fontFamily: "Spicy Rice",
              fontSize: "20px",
            }}
          >
            <Link to="/dashboard" style={{ color: "#d9a51f" }}>
              Dashboard
            </Link>
          </Nav.Item>
          <Nav.Item
            eventKey="2"
            style={{
              fontFamily: "Spicy Rice",
              color: "#c3c49e",
              fontSize: "20px",
            }}
          >
            <Link to="/select" style={{ color: "#d9a51f" }}>
              Select
            </Link>
          </Nav.Item>
          <Nav.Item
            eventKey="3"
            style={{
              fontFamily: "Spicy Rice",
              color: "#c3c49e",
              fontSize: "20px",
            }}
          >
            <Link to="/createnew" style={{ color: "#d9a51f" }}>
              Create New
            </Link>
          </Nav.Item>
          <Nav.Item
            eventKey="4"
            style={{
              fontFamily: "Spicy Rice",
              color: "#c3c49e",
              fontSize: "20px",
            }}
          >
            <Link to="/login" style={{ color: "#d9a51f" }}>
              Login
            </Link>
          </Nav.Item>

          {/* <Dropdown
            title="Interest"
            style={{
              backgroundColor: "#62130A",
              fontFamily: "Spicy Rice",
              color: "#62130A",
              fontSize: "20px",
            }}
          >
            <Dropdown.Item
              eventKey="4"
              style={{
                fontFamily: "Spicy Rice",
                color: "#c3c49e",
                fontSize: "20px",
              }}
            >
              Movies
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="5"
              style={{
                fontFamily: "Spicy Rice",
                color: "#c3c49e",
                fontSize: "20px",
              }}
            >
              Television
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="6"
              style={{
                fontFamily: "Spicy Rice",
                color: "#c3c49e",
                fontSize: "20px",
              }}
            >
              Books
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="6"
              style={{
                fontFamily: "Spicy Rice",
                color: "#c3c49e",
                fontSize: "20px",
              }}
            >
              Music
            </Dropdown.Item>
          </Dropdown> */}
        </Nav>
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
