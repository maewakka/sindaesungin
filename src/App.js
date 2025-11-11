import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import CustomNavbar from "./components/CustomNavbar";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Location from "./pages/Location";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import styles from "./styles/App.module.css";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = ["home", "intro", "menu", "blog", "location"];
  const activeAnchor = `#${sections[activeIndex]}`;

  const handleNavClick = (anchor) => {
    const index = sections.indexOf(anchor.substring(1));
    if (index !== -1) {
      // Swiper 인스턴스에 접근하기 위해 slideTo 사용
      document.querySelector(".swiper").swiper.slideTo(index);
    }
  };

  return (
    <>
      <CustomNavbar activeKey={activeAnchor} onNavClick={handleNavClick} />
      <Swiper
        modules={[Mousewheel, Keyboard]}
        direction="vertical"
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        keyboard={{
          enabled: true,
        }}
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.swiper}
        style={{ height: "calc(100vh - 110px)" }}
      >
        <SwiperSlide className={styles.section}>
          <Main />
        </SwiperSlide>
        <SwiperSlide className={styles.section}>
          <Intro />
        </SwiperSlide>
        <SwiperSlide className={styles.section}>
          <Menu />
        </SwiperSlide>
        <SwiperSlide className={styles.section}>
          <Blog />
        </SwiperSlide>
        <SwiperSlide className={styles.section}>
          <Location />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
