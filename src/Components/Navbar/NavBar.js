import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

export default function NavBar() {
    const [nav, setNav] = useState(false);
    const [variant, setVariant] = useState('dark')

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNav(true)
            setVariant('light')
        } else {
            setNav(false)
            setVariant('dark')
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <div className={nav ? 'portfolio-navbar active' : 'portfolio-navbar '}>
            <Navbar collapseOnSelect expand="lg" variant={variant} >
                <Navbar.Brand href="#header" className='navBar-br'> Maryam Abdel-Karim</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    </Nav>
                    <Nav >
                    
                    <Nav href="#work" className='navigation'> Work </Nav>
                    <Nav href="#about" className='navigation'> About </Nav>
                    <Nav href="#contact"className='navigation'> Contact </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
