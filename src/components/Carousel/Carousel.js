import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CarouselLeftNav from "./CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};
function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        module={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNav />
        <CarouselRightNav />

        {data.map((item) => (
          <SwiperSlide>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
