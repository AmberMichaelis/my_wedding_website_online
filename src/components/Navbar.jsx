/** @format */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1200) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar no__print'>
        <div className='navbar__container'>
          <Link to='/' className='navbar__logo' onClick={closeMobileMenu}>
            MY WEDDING
            <i className='far fa-heart'></i>
          </Link>
          <div className='menu__icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav__menu active' : 'nav__menu'}>
            <li className='nav__item'>
              <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='/location'
                className='nav__links'
                onClick={closeMobileMenu}
              >
                Details
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='/pictures'
                className='nav__links'
                onClick={closeMobileMenu}
              >
                Pictures
              </Link>
            </li>
            <li className='nav__item mobile__only'>
              <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                Livestream
              </Link>
            </li>
            <li className='nav__item mobile__only'>
              <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                Registry
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='/rsvp'
                className='nav__links__mobile'
                onClick={closeMobileMenu}
              >
                RSVP
              </Link>
            </li>
          </ul>
          {button && (
            <Button toPage='/rsvp' buttonStyle='btn__primary'>
              RSVP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
