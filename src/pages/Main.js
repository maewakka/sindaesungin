import React from "react";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/main.png" alt="main" className={styles.mainImage} />
      <div className={styles.mainCaption}>
        <div>
          <span className={`${styles.mainBox} ${styles.mainBold}`}>
            " 건강한 한 끼,
          </span>
          <span className={`${styles.mainBox} ${styles.mainBold}`}>
            정성을 더했습니다. "
          </span>
        </div>
        <div>
          <span className={`${styles.mainBox} ${styles.mainRegular}`}>
            가족 외식, 단체 모임, 회식 자리까지 모두 만족할 수 있는 곳.
          </span>
          <span className={`${styles.mainBox} ${styles.mainRegular}`}>
            정성껏 구운 인삼 갈비로 따뜻한 식사를 전해드립니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
