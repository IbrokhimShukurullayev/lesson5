import React, { memo } from 'react'
import { NavLink } from "react-router-dom"
import logo from "../../assets/images/Logo.png"
import './header.scss'
import { NAV_ITEMS } from "../../static";

function Header() {
    const navItem = NAV_ITEMS?.map(date => <li key={date.id} className="nav__item"><NavLink className="nav__link"  to={date.url}>{date.name}</NavLink></li>)
  return (
    <header className='header'>
        <nav className="nav container">
            <div className="nav__logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="nav__end">
                <ul className="nav__list">
                    {navItem}
                </ul>
                <div className="nav__button">
                    <button>Clone project</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default memo(Header)