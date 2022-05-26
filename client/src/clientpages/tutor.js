import React from 'react';
import Logo from '../assets/logo/nerd.png'

function Tutor() {
    
    return (
        <>            
        <header className='db-header'>
            <div className="logo">
                <img src={Logo} alt='' ></img> 
            </div>  
            <h1>Tutor</h1>
        </header>
        </>
    )
}

export default Tutor;