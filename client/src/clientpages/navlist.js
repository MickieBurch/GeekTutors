import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function NavList(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<Container fluid>
			<Navbar collapseOnSelect className="db-nav" expand="lg" fill activekey={currentTab} justified>
        
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav px-3 px-sm-1 px-md-0" />

					<Navbar.Collapse>
						<Nav activeKey={currentTab} onSelect={setCurrentTab} className='db-nav-ulist'>
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
				</Container>
			</Navbar>
		</Container>
	);
}

export default NavList;
