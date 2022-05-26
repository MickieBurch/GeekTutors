import React from 'react';
import Logo from '../assets/logo/nerd.png'

function Signup() {
    
    return (
        <>            
        <header className='db-header'>
            <div className="logo">
                <img src={Logo} alt='' ></img> 
            </div>  
            <h1>Signup</h1>
        </header>
        </>
    )
}

export default Signup;