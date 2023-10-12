import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import Card from "./components/Card/Card";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
    // console.log(topAlbumsData);
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {topAlbumsData.map((card) => {
          return <Card data={card} type="album" />;
        })}
      </div>
    </div>
  );
}

export default App;
