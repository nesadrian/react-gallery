import React from 'react'
import logo from '../../assets/roccos.png'
import { Nav } from './Nav'
import './header.css'

function Header() {
    return (
        <header className="header-container">
            <img className="logo" src={logo} alt="logo" />
            <Nav />
        </header>
    )
}

export default Header
