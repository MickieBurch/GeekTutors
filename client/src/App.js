import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider}from "@apollo/client"
import {BrowserRouter as Router, Route} from "react-router-dom"
const client= new ApolloClient({
  uri:"/graphql",
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
