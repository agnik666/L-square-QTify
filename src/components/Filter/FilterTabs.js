import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { fetchSongsGenres } from "../../api/api";

function FilterTabs({ songsData, handleSongDataChange }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleChange = (_, selected) => {
    setSelectedGenre(selected);
    console.log(selected);
  };

  const filterSongsData = () => {
    let filteredData;
    if (selectedGenre !== "All")
      filteredData = songsData.filter(
        (song) => song.genre.label === selectedGenre
      );
    else filteredData = songsData;
    handleSongDataChange(filteredData);
  };
  const fetchGenres = async () => {
    const apiData = await fetchSongsGenres();
    setGenres(apiData.data);
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    filterSongsData();
  }, [selectedGenre]);
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedGenre}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
        >
          <Tab value="All" label="All" sx={{ color: "var(--color-white)" }} />
          {genres.map((genre) => {
            return (
              <Tab
                value={genre.label}
                label={genre.label}
                sx={{ color: "var(--color-white)" }}
              />
            );
          })}
        </Tabs>
      </Box>
    </div>
  );
}

export default FilterTabs;
