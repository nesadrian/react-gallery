import React, { useState } from "react";
import "./searchbar.css";

function Searchbar({ handleSearch }) {
  const [inpVal, setInpVal] = useState("");

  return (
    <form className="form-card" onSubmit={(e) => handleSearch(e, inpVal)}>
      <input
        className="form-card_input"
        type="text"
        onChange={(e) => setInpVal(e.target.value)}
        placeholder="Type something..."
      />
    </form>
  );
}

export default Searchbar;
