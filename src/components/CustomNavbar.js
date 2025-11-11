import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";

const CustomNavbar = ({ activeKey, onNavClick }) => {
  return (
    <Navbar fixed="top" expand="lg" className={styles.customNavbar}>
      <Navbar.Brand
        href="#home"
        className={styles.customLogo}
        onClick={() => onNavClick("#home")}
      >
        <div className={styles.logoContainer}>
          <img src="/ginseng-logo.png" alt="ginseng" className={styles.logoImage} />
          <div className={styles.logoDivider} />
          <div className="logo-text">
            <div className={styles.logoMainTitle}>신대성인삼숯불갈 비</div>
            <div className={styles.logoSubtitle}>행복한 한 입</div>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav
          className={`ms-auto me-4 ${styles.customNav}`}
          activeKey={activeKey}
          onSelect={(key) => onNavClick(key)}
        >
          <Nav.Link eventKey="#home" href="#home" className={`${styles.customNavLink} ${activeKey === "#home" ? styles.active : ""}`}>
            Home
          </Nav.Link>
          <Nav.Link eventKey="#intro" href="#intro" className={`${styles.customNavLink} ${activeKey === "#intro" ? styles.active : ""}`}>
            소개
          </Nav.Link>
          <Nav.Link eventKey="#menu" href="#menu" className={`${styles.customNavLink} ${activeKey === "#menu" ? styles.active : ""}`}>
            메뉴
          </Nav.Link>
          <Nav.Link eventKey="#blog" href="#blog" className={`${styles.customNavLink} ${activeKey === "#blog" ? styles.active : ""}`}>
            블로그 후기
          </Nav.Link>
          <Nav.Link
            eventKey="#location"
            href="#location"
            className={`${styles.customNavLink} ${activeKey === "#location" ? styles.active : ""}`}
          >
            오시는길
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
