import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleDisplay} onClick={handleToggle}>
          {!carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {carouselToggle && (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card data={item} type={type} />
              ))}
            </div>
          )}
          {/**
            <Carousel
              data={data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          **/}
        </div>
      )}
    </>
  );
}

export default Section;
