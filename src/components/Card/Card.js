import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <>
            <div className={styles.wrapper}>
              <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                <div className={styles.card}>
                  <img src={image} alt="album" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    ></Chip>
                  </div>
                </div>
              </Tooltip>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </>
        );
      }

      case "songs": {
        const { image, likes, title } = data;
        return (
          <>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="songs" />
                <div className={styles.banner}>
                  <Chip
                    label={`${likes} Likes`}
                    size="small"
                    className={styles.chip}
                  ></Chip>
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </>
        );
      }

      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
