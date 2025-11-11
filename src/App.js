import React, { useState, useEffect, useRef } from "react";
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
  const sections = ["home", "intro", "menu", "blog", "location"];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const isInitialMount = useRef(true);
  const activeAnchor = `#${sections[activeIndex]}`;

  const handleNavClick = (anchor) => {
    const sectionName = anchor.substring(1);
    const index = sections.indexOf(sectionName);
    if (index !== -1) {
      setActiveIndex(index);
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  };


  // 초기 로드 시 저장된 페이지로 이동 (스와이퍼 애니메이션 포함)
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isInitialMount.current) {
        swiperRef.current.swiper.slideTo(activeIndex);
        isInitialMount.current = false;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <CustomNavbar activeKey={activeAnchor} onNavClick={handleNavClick} />
      <Swiper
        ref={swiperRef}
        modules={[Mousewheel, Keyboard]}
        direction="vertical"
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        keyboard={{
          enabled: true,
        }}
        speed={800}
        nested={true}
        preventInteractionOnTransition={true}
        onSlideChange={handleSlideChange}
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
