import React, { useState } from "react";
import CustomNavbar from "./components/CustomNavbar";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Location from "./pages/Location";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/App.module.css";

const App = () => {
  const [activeAnchor, setActiveAnchor] = useState("#main");

  const handleNavClick = (anchor) => {
    setActiveAnchor(anchor);
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CustomNavbar activeKey={activeAnchor} onNavClick={handleNavClick} />
      <main className={styles.appContainer}>
        <section id="main" className={styles.section}>
          <Main />
        </section>
        <section id="intro" className={styles.section}>
          <Intro />
        </section>
        <section id="menu" className={styles.section}>
          <Menu />
        </section>
        <section id="blog" className={styles.section}>
          <Blog />
        </section>
        <section id="location" className={styles.section}>
          <Location />
        </section>
      </main>
    </>
  );
};

export default App;
