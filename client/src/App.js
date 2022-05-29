import React, { useState } from 'react'
import Header from './clientpages/header'
import Dashboard from './clientpages/dashboard'
// import Login from './clientpages/LoginForm'
// import Signup from './clientpages/SignupForm'
import Tutor from './clientpages/tutor'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client"
import { BrowserRouter as Router } from "react-router-dom"
import {setContext} from '@apollo/client/link/context'
import 'react-calendar/dist/Calendar.css';
<<<<<<< HEAD
import LoginForm from './clientpages/LoginForm'
import SignupForm from './clientpages/SignupForm'

const httpLink = createHttpLink({
	uri: '/graphql'
  });

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};
  });
  const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
  })
=======
// import LoginForm from './clientpages/LoginForm'
// import SignupForm from './clientpages/SignupForm'
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
})
>>>>>>> develop

function App() {
  const [currentTab, setCurrentTab] = useState("home");

	const renderTab = () => {
		switch (currentTab) {
			case "home":
				return <Dashboard setCurrentTab={setCurrentTab}/>;
			case "tutor":
				return <Tutor />;
<<<<<<< HEAD
			case "signup":
				return <SignupForm />;
			case "login":
				return <LoginForm />;
=======
			// case "signup":
			// 	return <SignupForm />;
			// 	case "login":
			// 	return <LoginForm />;
>>>>>>> develop
			default:
				return null;
		}
	};
	console.log(currentTab)
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
