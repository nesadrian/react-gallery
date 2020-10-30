import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../searchbar/Searchbar'
import { Redirect } from 'react-router-dom'
import './splash.css'


const Splash = () => {
    const [searchVal, setSearchVal] = useState(null);

    return (
        <div className="splash-container">
            <div className="bckg">
                {searchVal ? <Redirect
                    to={{
                        pathname: "/search",
                        state: { searchTerm: searchVal }
                    }}
                /> : null}
                <div>
                    <Searchbar splashSearch={true} handleSearchVal={(val) => setSearchVal(val)} />
                </div>
                <div className="a">
                    <Link to="/search">
                        ENTER
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Splash;
