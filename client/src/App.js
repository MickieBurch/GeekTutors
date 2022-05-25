<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider}from "@apollo/client"
import {BrowserRouter as Router, Route} from "react-router-dom"
const client= new ApolloClient({
  uri:"/graphql",
=======
import React, { useState } from 'react'
import Dashboard from './clientpages/dashboard'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router, Route } from "react-router-dom"
const client = new ApolloClient({
  uri: "/graphql",
>>>>>>> feature/dashboard
  cache: new InMemoryCache()
})
function App() {
  const [options] = useState([
    {
      "name": "Tutor's"
    },
    {
      "name": 'Recources'
    },
    {
      "name": 'Signup'
    },
    {
      "name": 'Login'
    }
  ]);
  const [currentOption, setCurrentOption] = useState(options[0])

  return (
<<<<<<< HEAD
=======

>>>>>>> feature/dashboard
    <ApolloProvider client={client}>
      <Router>
        <div className='main-div'>
          <Dashboard options={options} currentOption={currentOption} setCurrentOption={setCurrentOption}></Dashboard>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
