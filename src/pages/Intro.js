import React from "react";
import styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f3ecdc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.introPage}>
        <div className={styles.introLeftContainer}>
          <div className={styles.topContent}>
            <div className={styles.introLeftFirst}>
              <span className={styles.firstWrap}>저희 신대성인삼숯불갈비는</span>
              <span className={styles.firstWrap}>논산에서 20년 동안 한 자리를</span>
              <span className={styles.firstWrap}>지켜온 정직한 맛집입니다.</span>
            </div>
            <div className={styles.introLeftSecond}>
              <div className={styles.secondWrap}>
                <div>건강한 인삼 소스를 더한</div>
                <div>깊은 맛의 숯불갈비,</div>
                <div>언제나 깨끗한 환경, 정성 어린 서비스,</div>
              </div>
              <div className={styles.secondWrap}>
                <div>그리고 맛있는 음식으로</div>
                <div>고객 여러분께 최선을 다하겠습니다.</div>
              </div>
              <div className={styles.secondWrap}>찾아주셔서 진심으로 감사합니다.</div>
              <div className={styles.secondWrap}>- 사장 김기영 -</div>
            </div>
          </div>
          <div className={styles.resContent}>
            <div className={styles.resText}>
              <img src="/phone.png" alt="phone" className={styles.resTextImg}></img>
              <div>예약 문의</div>
            </div>
            <div className={styles.phoneText}>
              010 - 5435 - 1143 &nbsp;/ &nbsp;041 - 735 - 0013
            </div>
          </div>
        </div>

        <div className={styles.introRightContainer}>
          <div>
            <img src="/sogae.png" alt="soage" className={styles.sogaeImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
