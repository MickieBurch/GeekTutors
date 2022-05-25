import React from 'react';
import Logo from '../assets/logo/nerd.png'

function Dashboard(props) {
    const {
        options = [],
        currentOption,
        setCurrentOption
        
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
                            {option.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
        </>
    )
}

export default Dashboard;