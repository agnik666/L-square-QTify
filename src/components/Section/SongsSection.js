import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import FilterTabs from "../Filter/FilterTabs";

function SongsSection({ title, data, type }) {
  const [filteredSongsData, setFilteredSongsData] = useState([]);

  useEffect(() => {
    setFilteredSongsData(data);
  }, []);
  return (
    <>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          <div className={styles.filterWrapper}>
            <FilterTabs
              songsData={data}
              handleSongDataChange={setFilteredSongsData}
            />
          </div>
          <Carousel
            data={filteredSongsData}
            renderComponent={(filteredSongsData) => (
              <Card data={filteredSongsData} type={type} />
            )}
          />
        </div>
      )}
    </>
  );
}

export default SongsSection;
