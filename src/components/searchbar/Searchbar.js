import React, { useState } from "react";
import "./searchbar.css";

function Searchbar({ handleSearchVal, history }) {
  const [inpVal, setInpVal] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    handleSearchVal(inpVal);
    setInpVal('');
  }

  return (
    <form className="form-card" onSubmit={e => handleSearch(e)}>
      <input
        className="form-card_input"
        type="text"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        placeholder="Type something..."
        list="history"
      />
      {history ? <datalist className="test" id="history">
        {history.map(term => <option value={term} />)}
      </datalist> : null}
    </form>
  );
}

export default Searchbar;
