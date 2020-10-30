import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../searchbar/Searchbar'
import { Redirect } from 'react-router-dom'
import './splash.css'


const Splash = () => {
    const [searchVal, setSearchVal] = useState(null);

    return (
        <div className="splash-container">
            {searchVal ? <Redirect
                to={{
                    pathname: "/search",
                    state: { searchTerm: searchVal }
                }}
            /> : null}
            <Searchbar handleSearchVal={(val) => setSearchVal(val)} />
            <div className="a">
                <Link to="/search">
                    <h1>ENTER</h1>
                </Link>
            </div>
        </div>
    )
}

export default Splash;
