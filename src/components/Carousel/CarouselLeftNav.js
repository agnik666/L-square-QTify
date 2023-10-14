import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import styles from "./Carousel.module.css";

function CarouselLeftNav() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning]);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}

export default CarouselLeftNav;
