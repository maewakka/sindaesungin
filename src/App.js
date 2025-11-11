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
  const [activeIndex, setActiveIndex] = useState(() => {
    // localStorage에서 이전에 방문한 페이지 불러오기
    const saved = localStorage.getItem("currentPageIndex");
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const swiperRef = useRef(null);
  const isInitialMount = useRef(true);
  const activeAnchor = `#${sections[activeIndex]}`;

  const handleNavClick = (anchor) => {
    const index = sections.indexOf(anchor.substring(1));
    if (index !== -1) {
      setActiveIndex(index);
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  };

  // 페이지 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("currentPageIndex", activeIndex.toString());
  }, [activeIndex]);

  // 초기 로드 시 저장된 페이지로 이동
  useEffect(() => {
    if (isInitialMount.current && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
      isInitialMount.current = false;
    }
  }, [activeIndex]);

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
        }}
        keyboard={{
          enabled: true,
        }}
        speed={800}
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
