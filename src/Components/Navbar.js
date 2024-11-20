import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClick = () => {
    if (mobile) {
      setClick(!click);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          VP
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Education" className="nav-links" onClick={handleClick}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-links" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Resume" className="nav-links" onClick={handleClick}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
