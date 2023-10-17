import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongsData } from "./api/api";
import Section from "./components/Section/Section";
import SongsSection from "./components/Section/SongsSection";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
    // console.log(topAlbumsData);
  };

  const generateNewAlbumsData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
  };

  const generateSongsData = async () => {
    const data = await fetchSongsData();
    setSongsData(data);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateSongsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data={newAlbumsData} type="album" title="New Albums" />
        <SongsSection data={songsData} type="songs" title="Songs" />
      </div>
    </div>
  );
}

export default App;
