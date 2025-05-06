import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.css";

const CustomNavbar = ({ activeKey, onNavClick }) => {
  return (
    <Navbar fixed="top" expand="lg" className="custom-navbar">
      <Navbar.Brand
        href="#main"
        className="custom-logo"
        onClick={() => onNavClick("#main")}
      >
        <div className="logo-container">
          <img src="/ginseng-logo.png" alt="ginseng" className="logo-image" />
          <div className="logo-divider" />
          <div className="logo-text">
            <div className="logo-main-title">신대성인삼숯불갈  비</div>
            <div className="logo-subtitle">행복한 한 입</div>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav
          className="ms-auto me-4 custom-nav"
          activeKey={activeKey}
          onSelect={(key) => onNavClick(key)}
        >
          <Nav.Link eventKey="#intro" href="#intro" className="custom-nav-link">
            소개
          </Nav.Link>
          <Nav.Link eventKey="#menu" href="#menu" className="custom-nav-link">
            메뉴
          </Nav.Link>
          <Nav.Link eventKey="#blog" href="#blog" className="custom-nav-link">
            블로그 후기
          </Nav.Link>
          <Nav.Link
            eventKey="#location"
            href="#location"
            className="custom-nav-link"
          >
            오시는길
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
