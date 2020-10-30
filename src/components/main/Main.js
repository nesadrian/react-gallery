import React, { useState, useEffect } from "react";
import Searchbar from "../searchbar/Searchbar";
import { Card } from "../card/Card";
import "./main.css";
import { Button } from "../button/Button";
import { fetchPicturesUrl, fetchPicturesTerm } from "../../api";
import { useLocalStorage } from "@rehooks/local-storage";

export const Main = (props) => {
  let rocco;
  if (!props.searchTerm) {
    rocco = "";
  } else {
    rocco = props.searchTerm.searchTerm
  }
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(rocco)
  const [history, setHistory] = useLocalStorage("terms");

  useEffect(() => {
    if (searchTerm.length >= 1) handleSearch(null, searchTerm)
  }, [])

  const handleSearch = async (e, val) => {
    if (e) e.preventDefault();
    const pictures = await fetchPicturesTerm(val);
    setData(pictures);
    setSearchTerm(val);
    const hist = history || [];
    hist.push(val)
    setHistory(hist);
  };

  const handleButtonClick = async (url) => {
    const pictures = await fetchPicturesUrl(url);
    setData(pictures);
  };


  return (
    <main className="main-container">
      <Searchbar handleSearch={handleSearch} history={history} />
      {!data.images ? (
        <h1>No images to display. Use the searchbar above to search for images.</h1>
      ) : (
          <div>
            {searchTerm && <h2>Showing images of {searchTerm}</h2>}
            <div className="cards-container">
              {data.images.map((image) => (
                <Card
                  imgSrc={image.urls.small}
                  altDescription={image.alt_description}
                />
              ))}
            </div>
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
          </div>
        )}
    </main>
  );
};
