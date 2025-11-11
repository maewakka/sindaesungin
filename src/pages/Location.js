import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Location.module.css";

const Location = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#f3ecdc" }}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className={styles.locationContainer}>
        <h1 className={styles.title}>오시는 길</h1>
        <div className={styles.infoBox}>
          <h2>신대성인삼숯불갈비</h2>
          <p>
            <strong>주소:</strong> 충청남도 논산시
          </p>
          <p>
            <strong>전화:</strong> 010 - 5435 - 1143 / 041 - 735 - 0013
          </p>
          <p>
            <strong>영업시간:</strong> 매일 11:00 ~ 22:00
          </p>
          <div className={styles.mapContainer}>
            <iframe
              title="신대성인삼숯불갈비 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.6834567890!2d127.1!3d36.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ba8b0!2d127.1!3d36.5!5e0!3m2!1sko!2skr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Location;
