import React from "react";
import { Link } from "react-router-dom";
import header from './Header.module.css';

function Header(props) {
  return (
    <header className={header.header}>
      <div className='container'>
        <div className={header.header_items}>
          <div className='logo'>
            <img className={header.logo_img} src='https://www.pngarts.com/files/3/Logo-PNG-Transparent-Image.png' alt='logo'/>
          </div>
          <div className='auth'>
            {props.isAuth ? props.login : <Link to={'/login'}>Login</Link>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;