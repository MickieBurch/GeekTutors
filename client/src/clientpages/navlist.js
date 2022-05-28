import React from "react";
// import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function NavList(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <Navbar collapseOnSelect fill activekey={currentTab}>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-evenly">
        <Nav activeKey={currentTab} onSelect={setCurrentTab}>
          <Nav.Item>
            <Nav.Link onClick={() => setCurrentTab("home")} eventKey="home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setCurrentTab("tutor")} eventKey="tutor">
              Tutor
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setCurrentTab("signup")} eventKey="signup">
              Signup
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setCurrentTab("login")} eventKey="login">
              Login
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavList;
