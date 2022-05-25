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
        <section className="db-nav">
            <nav>
            <ul className='db-nav-ulist'>
                    {options.map((option) => (
                        <li className={`db-nav-list-item`} key={option.name}>
                            <span>{option.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
        </>
    )
}

export default Dashboard;