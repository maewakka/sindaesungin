import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Main.css";

const Main = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 container-fluid">
      <img src="/main.png" alt="main" className="main-image" />
      <div className="main-caption">
        <div className="main-caption-row">
          <span className="main-box main-bold">" 건강한 한 끼,</span>
          <span className="main-box main-bold">정성을 더했습니다. "</span>
        </div>
        <div className="main-caption-row">
          <span className="main-box main-regular">
            가족 외식, 단체 모임, 회식 자리까지 모두 만족할 수 있는 곳.
          </span>
          <span className="main-box main-regular">
            정성껏 구운 인삼 갈비로 따뜻한 식사를 전해드립니다.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Main;
