import React, { useState } from "react";
import "./searchbar.css";

function Searchbar({ handleSearch, history }) {
  const [inpVal, setInpVal] = useState("");

  return (
    <form className="form-card" onSubmit={(e) => handleSearch(e, inpVal)}>
      <input
        className="form-card_input"
        type="text"
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
