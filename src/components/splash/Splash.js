import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../searchbar/Searchbar'
import { Redirect } from 'react-router-dom'
import './splash.css'


const Splash = () => {
    const [searchVal, setSearchVal] = useState(null);

    const handleSearch = async (e, val) => {
        e.preventDefault();
        setSearchVal(val)
    };

    return (
        <div className="splash-container">
            {searchVal ? <Redirect
                to={{
                    pathname: "/search",
                    state: { searchTerm: searchVal }
                }}
            /> : null}
            <Searchbar handleSearch={handleSearch} />
            <div className="a">
                <Link to="/search">
                    <h1>ENTER</h1>
                </Link>
            </div>
        </div>
    )
}

export default Splash;
