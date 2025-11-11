import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import CustomNavbar from "./components/CustomNavbar";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Location from "./pages/Location";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/App.module.css";

const App = () => {
  const anchors = ["main", "intro", "menu", "blog", "location"];
  const [activeAnchor, setActiveAnchor] = useState("#main");

  return (
    <>
      <CustomNavbar activeKey={activeAnchor} onNavClick={setActiveAnchor} />
      <ReactFullpage
        scrollingSpeed={1000}
        anchors={anchors}
        navigation
        onLeave={(origin, destination, direction) => {
          if (destination && destination.index !== undefined) {
            const nextAnchor = `#${anchors[destination.index]}`;
            setActiveAnchor(nextAnchor);
          }
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className={styles.section}>
                <Main />
              </div>
              <div className={styles.section}>
                <Intro />
              </div>
              <div className={styles.section}>
                <Menu />
              </div>
              <div className={styles.section}>
                <Blog />
              </div>
              <div className={styles.section}>
                <Location />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
