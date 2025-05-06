import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Intro.css";

const Intro = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#f3ecdc" }}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="intro-page">
        <div className="intro-left-container">
          <div className="intro-left-first">
            <span className="first-wrap">저희 신대성인삼숯불갈비는</span>
            <span className="first-wrap">논산에서 20년 동안 한 자리를</span>
            <span className="first-wrap">지켜온 정직한 맛집입니다.</span>
          </div>
          <div className="intro-left-second">
            <div className="second-wrap">
              <div>건강한 인삼 소스를 더한</div>
              <div>깊은 맛의 숯불갈비,</div>
              <div>언제나 깨끗한 환경, 정성 어린 서비스,</div>
            </div>
            <div className="second-wrap">
              <div>그리고 맛있는 음식으로</div>
              <div>고객 여러분께 최선을 다하겠습니다.</div>
            </div>
            <div className="second-wrap">찾아주셔서 진심으로 감사합니다.</div>
            <div className="second-wrap">- 사장 김기영 -</div>
          </div>
        </div>

        <div className="intro-right-container">
          <div>
            <img src="/sogae.png" alt="soage" className="sogae-image" />
          </div>
          <div className="res-content">
            <div className="res-text">
              <img src="/phone.png" className="res-text-img"></img>
              <div>예약 문의</div>
            </div>
            <div className="phone-text">
              010 - 5435 - 1143 &nbsp;/ &nbsp;041 - 735 - 0013
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
