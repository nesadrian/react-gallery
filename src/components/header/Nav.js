import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
    return (
        <nav className="nav-container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/random">Random</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
