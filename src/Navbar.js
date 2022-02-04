import React, { useState } from 'react';
import './css/Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={ !darkMode ? 'lightMode': 'darkMode'}>
        <div className='NavText'>
            <p>Hola, soy Ulises</p>
            <p>Bienvenido a mi blog</p>
        </div>

        <div className='NavBtn'>
            <button
              type='button'
              onClick={(e) => {
                e.preventDefault();
                setDarkMode(!darkMode)
              }}
            >Dark Mode</button>
        </div>
    </div>
  )
};

export default Navbar;
