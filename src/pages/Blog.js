import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Blog.css";

const Main = () => {
  const handleClick = (linkUrl) => {
    window.open(linkUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Container
      fluid
      style={{ backgroundColor: "#f3ecdc" }}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="blog-container">
        <img className="front-image" src="/front.png" alt="blog" />
        <div className="blog-image-container">
          <div className="blog-title">
            <span className="blog-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ fontSize: "30px", marginRight: "8px" }}
              >
                <path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h10v2H4z" />
                <circle
                  cx="17"
                  cy="17"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="20"
                  y1="20"
                  x2="22"
                  y2="22"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span>블로그 보러가기</span>
          </div>
          <div className="img-cont">
            <img
              className="blog-image"
              src="/blog01.png"
              alt="blog"
              onClick={() =>
                handleClick("https://blog.naver.com/to_dodo/223712754379")
              }
            />
            <img
              className="blog-image"
              src="/blog02.png"
              alt="blog"
              onClick={() =>
                handleClick("https://blog.naver.com/nonger10/223346898674")
              }
            />
            <img
              className="blog-image"
              src="/blog03.png"
              alt="blog"
              onClick={() =>
                handleClick("https://blog.naver.com/louisdor71/223018822995")
              }
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
