import React from "react";
import Searchbar from "../searchbar/Searchbar";
import { Card } from "../card/Card";

export const Main = () => {
  const handleSearch = (e, val) => {
    e.preventDefault();
    console.log(val);
  };

  return (
    <main>
      <Searchbar handleSearch={handleSearch} />
      <Card />
    </main>
  );
};
