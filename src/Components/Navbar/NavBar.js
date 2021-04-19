import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [myColor, setMyColor] = useState("white");

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
      // setMyColor("#814c56");
    } else {
      setNav(false);
      setMyColor("white");
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={nav ? "portfolio-navbar active" : "portfolio-navbar "}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand
          className="navBar-br"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          {" "}
          Maryam Abdel-Karim
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="work" smooth={true} duration={500}>
              <Nav
                className="navigation"
              >
                {" "}
                Work{" "}
              </Nav>{" "}
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <Nav
                className="navigation"
                style={{ color: myColor === "white" ? "white" : "#6e3842" }}
              >
                {" "}
                About{" "}
              </Nav>{" "}
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Nav
                className="navigation"
                style={{ color: myColor === "white" ? "white" : "#6e3842" }}
              >
                {" "}
                Contact{" "}
              </Nav>{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
