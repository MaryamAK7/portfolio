import React from 'react'
import arrow from '../../images/arrow.png'
import { Link } from "react-scroll";
import './Header.css'

export default function Header() {
    return (
        <div className='header' id='header'>
            <div>
            <h1>Hi there, I'm Maryam!</h1>
           <h4 className='header-2'>I'm a Front End Web Developer.</h4>
           <Link to='work' smooth={true} duration={500}>  
           <img src={arrow} alt='arrow' className='header-arrow' />
           </Link>
           </div> 
        </div>
    )
}
