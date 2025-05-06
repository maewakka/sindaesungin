import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import CustomNavbar from "./components/CustomNavbar";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Location from "./pages/Location";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

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
          const nextAnchor = `#${anchors[destination.index]}`;
          setActiveAnchor(nextAnchor);
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Main />
              </div>
              <div className="section">
                <Intro />
              </div>
              <div className="section">
                <Menu />
              </div>
              <div className="section">
                <Blog />
              </div>
              <div className="section">
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
