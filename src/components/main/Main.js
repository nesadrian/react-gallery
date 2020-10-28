import React from 'react'
import Searchbar from '../searchbar/Searchbar';

export const Main = () => {

    const handleSearch = (e, val) => {
        e.preventDefault();
        console.log(val)
    }

    return (
        <main>
            <Searchbar handleSearch={handleSearch}/>
        </main>
    )
}
