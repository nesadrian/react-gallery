import React from 'react'
import logo from '../../assets/logo_transparent.png'
import './header.css'

function Header() {
    return (
        <header className="header-container">
            <img className="logo" src={logo} alt="logo"/>
        </header>
    )
}

export default Header
