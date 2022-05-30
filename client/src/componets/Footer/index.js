import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    const footLink = ['Twitter','Linkedin', 'Github','placeholder','placeholder','placeholder',]
        


    return (
        <footer className='fixed-bottom'>
        <div>
            <nav>
                <ul className='d-flex justify-content-center mt-5'>
                    {footLink.map(link => (
                        <li><a href='/' className='footer-a'>{link}</a></li>
                    ))}
                </ul>
            </nav>
         </div>
        <div className='d-flex justify-content-between mt-4'>
            <div className='ms-3'> Copyright &copy; GeekTutor 2022 </div>
            <div className='me-3'><a className='footer-a' href="https://www.flaticon.com/free-icons/nerd" title="nerd icons">Nerd icons created by Freepik - Flaticon</a></div>
        </div>
        </footer>
    )
};

export default Footer;