import React, { useState } from 'react'
import Header from './clientpages/header'
<<<<<<< HEAD
import Dashboard from './clientpages/dashboard'
import LoginForm from './clientpages/LoginForm'
import SignupForm from './clientpages/SignupForm'
=======
import Home from './clientpages/dashboard'
// import Login from './clientpages/LoginForm'
// import Signup from './clientpages/SignupForm'
>>>>>>> client/pages
import Tutor from './clientpages/tutor'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router } from "react-router-dom"
import 'react-calendar/dist/Calendar.css';
<<<<<<< HEAD

=======
// import LoginForm from './clientpages/LoginForm'
// import SignupForm from './clientpages/SignupForm'
>>>>>>> client/pages
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
})

function App() {
  const [currentTab, setCurrentTab] = useState("home");

	const renderTab = () => {
		switch (currentTab) {
			case "home":
				return <Dashboard setCurrentTab={setCurrentTab}/>;
			case "tutor":
				return <Tutor />;
			// case "signup":
			// 	return <SignupForm />;
			// 	case "login":
			// 	return <LoginForm />;
			default:
				return null;
		}
	};

  return (
    <ApolloProvider client={client}>
      <Router>
      <Container fluid>     
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
        </Container>
			<Container fluid>
				<main>{renderTab()}</main>
			</Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
