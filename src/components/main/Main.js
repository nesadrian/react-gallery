import React, { useState, useEffect } from "react";
import Searchbar from "../searchbar/Searchbar";
import { Card } from "../card/Card";
import "./main.css";
import { Button } from "../button/Button";
import { fetchPicturesUrl, fetchPicturesTerm } from "../../api";

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const picture = await fetchPicturesUrl();
      console.log(picture);
      setData(picture);
    };
    fetchData();
  }, []);

  const handleSearch = async (e, val) => {
    e.preventDefault();
    const pictures = await fetchPicturesTerm(val);
    setData(pictures);
  };

  const handleButtonClick = async (url) => {
    const pictures = await fetchPicturesUrl(url);
    setData(pictures);
  };

  return (
    <main>
      <Searchbar handleSearch={handleSearch} />
      {!data.images ? (
        <h1>No images available</h1>
      ) : (
        data.images.map((image) => (
          <Card
            imgSrc={image.urls.small}
            altDescription={image.alt_description}
          />
        ))
      )}
      <section className="pagination-buttons">
        <Button
          buttonName="Prev"
          handleButtonClick={handleButtonClick}
          url={data.prev}
          disabled={data.next.match(/page=(\d+)/)[1] === "2"}
        />
        <Button
          buttonName="Next"
          handleButtonClick={handleButtonClick}
          url={data.next}
        />
      </section>
    </main>
  );
};
