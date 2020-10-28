import React from "react";
import Searchbar from "../searchbar/Searchbar";
import { Card } from "../card/Card";
import data from "../../mockdata";
import "./main.css";

export const Main = () => {
  const handleSearch = (e, val) => {
    e.preventDefault();
    console.log(val);
  };

  return (
    <main>
      <Searchbar handleSearch={handleSearch} />
      {data.images.map((image) => (
        <Card
          imgSrc={image.urls.small}
          altDescription={image.alt_description}
        />
      ))}
    </main>
  );
};
