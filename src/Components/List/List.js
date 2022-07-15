import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function List(props) {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const fetchImages = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://picsum.photos/v2/list?limit=${props.items}`
    );
    const data = await response.json();
    setImagesList(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchSongs = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://random-data-api.com/api/food/random_food?size=${props.items}`
    );
    const data = await response.json();
    setSongs(data);
    console.log(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="mb-2">
      <div className="flex justify-between content-center mb-3">
        <h1 className="heading text-2xl font-bold">{props.title}</h1>
        {props.items > 7 && (
          <div
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="text-gray-700 hover:text-black hover:underline cursor-pointer font-semibold"
          >
            Show {showAll ? "All" : "Less"}
          </div>
        )}
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap">
          {showAll
            ? songs
                .slice(0, 7)
                .map((image, index) => (
                  <Card
                    key={imagesList[index].id}
                    image={imagesList[index].download_url}
                    title={songs[index]["dish"]}
                    desc={songs[index]["description"]}
                  />
                ))
            : songs.map((image, index) => (
                <Card
                  key={imagesList[index].id}
                  image={imagesList[index].download_url}
                  title={songs[index]["dish"]}
                  desc={songs[index]["description"]}
                />
              ))}
        </div>
      )}
    </div>
  );
}

export default List;
