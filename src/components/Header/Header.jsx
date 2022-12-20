import React from "react";
import header from './Header.module.css';

function Header() {
  return (
    <header className={header.header}>
      <div className='container'>
        <div className='logo'>
          <img className={header.logo_img} src='https://www.pngarts.com/files/3/Logo-PNG-Transparent-Image.png' alt='logo'/>
        </div>
        <div className='auth'></div>
      </div>
    </header>
  )
}

export default Header;