import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/Menu.css";

const menuSections = [
  {
    title: "메인 요리",
    items: [
      {
        name: "인삼왕갈비 🍖 (200g)",
        price: "₩14,000",
        description:
          "진한 갈비의 풍미에 건강한 인삼의 깊은 향을 더한 특별한 요리. 남녀노소 누구나 즐길 수 있는 프리미엄 갈비 메뉴입니다.",
      },
      {
        name: "생삼겹살 🐷 (200g)",
        price: "₩15,000",
        description:
          "신선함이 살아있는 두툼한 삼겹살. 촉촉한 육즙과 고소한 풍미가 그대로 살아 있어 씹을수록 깊은 맛을 느낄 수 있습니다.",
      },
      {
        name: "소갈비[LA갈비] 🥩 (200g)",
        price: "₩17,000",
        description:
          "달콤하고 짭조름한 인삼 특제 소스에 재운 부드러운 갈비. 얇게 썰어 더욱 풍미가 살아있는 LA갈비는 깊은 감칠맛이 일품입니다.",
      },
      {
        name: "장어구이 🐟 (1마리)",
        price: "₩24,000",
        description:
          "고소한 풍미와 쫄깃한 식감이 살아있는 보양식 장어구이. 신선한 생 장어에 소금 양념과 인삼 특제 양념을 선택하여 드실 수 있습니다.",
      },
    ],
  },
  {
    title: "식사 / 사이드 메뉴",
    items: [
      {
        name: "묵국수",
        price: "₩7,000",
        description: "담백하고 쫄깃한 묵과 시원한 육수가 어우러진 건강한 별미",
      },
      {
        name: "냉면",
        price: "₩7,000",
        description:
          "살얼음 동동 뜬 육수의 깔끔한 맛이 일품인 물냉면, 매콤달콤한 비빔냉면까지!",
      },
      {
        name: "소면",
        price: "₩6,000",
        description: "가벼운 식사로 즐기기 좋은 따뜻한 국물의 온소면",
      },
      {
        name: "누룽지",
        price: "₩2,000",
        description: "고소하게 눌린 든든한 누룽지 한그릇",
      },
      {
        name: "홍탁",
        price: "₩10,000",
        description: "홍어를 숙성시켜 깊고 진한 풍미가 살아있는 별미 술안주",
      },
      {
        name: "공기밥",
        price: "₩1,000",
        description: "간단하지만 든든한 한 끼의 기본",
      },
      {
        name: "된장찌개(추가)",
        price: "₩2,000",
        description: "구수하고 살짝 매콤한 맛이 일품인 전통 된장찌개",
      },
    ],
  },
  {
    title: "음료",
    items: [
      {
        name: "복분자주",
        price: "₩10,000",
        description: "복분자로 만든 달콤하고 진한 맛의 열매주",
      },
      {
        name: "청하",
        price: "₩6,000",
        description: "시원하고 깔끔한 맛이 특징인 전통 청주",
      },
      {
        name: "백세주",
        price: "₩7,000",
        description: "쌀과 한방 재료로 만든 깊고 풍부한 맛의 건강주",
      },
      { name: "소주", price: "₩4,000", description: "O2린 / 진로 / 참이슬" },
      { name: "맥주", price: "₩4,000", description: "카스 / 테라 / 하이트" },
      {
        name: "탄산 음료",
        price: "₩2,000",
        description: "콜라 / 사이다 / 환타",
      },
    ],
  },
];

const Menu = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const imageList = [
    "/menu01.png",
    "/menu02.png",
    "/menu03.png",
    "/menu04.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        setFadeClass("fade-in");
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      fluid
      style={{ backgroundColor: "#f3ecdc" }}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="menu-container">
        <div className="menu-image-container">
          <img
            className={`menu-image ${fadeClass}`}
            src={imageList[imageIndex]}
            alt="menu"
          />
        </div>
        <div className="menu-content">
          {menuSections.map((section, sectionIndex) => (
            <div className="menu-section" key={sectionIndex}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item, index) => (
                  <li key={index}>
                    <div className="menu-item-header">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Menu;
