import React, { useState } from 'react'

function Searchbar({ handleSearch }) {
    const [inpVal, setInpVal] = useState('');
    
    return (
        <form onSubmit={e => handleSearch(e, inpVal)}>
            <input type="text" onChange={e => setInpVal(e.target.value)} placeholder="Type something..."/>
        </form>
    )
}

export default Searchbar
