import React, {useState} from 'react'
import Dashboard from './clientpages/dashboard'

function App() {
  const [options] = useState([
    {
      "name": 'Tutor'
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
    <div className='main-div'>
     <Dashboard options={options} currentOption={currentOption} setCurrentOption={setCurrentOption}></Dashboard>
    </div>
  );
}

export default App;
