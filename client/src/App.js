import React, { useState } from 'react'
import Dashboard from './clientpages/dashboard'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router, Route } from "react-router-dom"
const client = new ApolloClient({
  uri: "/graphql",
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
