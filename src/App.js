import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

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
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
      </div>
    </div>
  );
}

export default App;
