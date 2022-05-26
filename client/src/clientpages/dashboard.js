import React from 'react';
import Logo from '../assets/logo/nerd.png'

function Dashboard(props) {
    const {
        options = []
        
    } = props
    console.log(options)
    return (
        <>            
        <header className='db-header'>
            <div className="logo">
                <img src={Logo} alt='' ></img> 
            </div>  
            <h1>GeekTutor</h1>
        </header>
        </>
    )
}

export default Dashboard;