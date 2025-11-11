import React, { useEffect } from "react";
import styles from "../styles/Location.module.css";

const Location = () => {
  useEffect(() => {
    // 네이버맵 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=5gh78e4wf2";
    script.async = true;
    script.onload = () => {
      initMap();
    };
    script.onerror = () => {
      console.error("네이버맵 스크립트 로드 실패");
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const initMap = () => {
    try {
      if (!window.naver || !window.naver.maps) {
        console.error("네이버맵 API 로드 실패");
        return;
      }

      // 정확한 좌표로 지도 생성
      const restaurantLocation = new window.naver.maps.LatLng(36.194835, 127.086851);
      
      const mapOptions = {
        center: restaurantLocation,
        zoom: 19,
        draggable: true,
        pinchZoom: true,
        scrollWheel: true,
        disableDoubleClickZoom: false,
      };

      const map = new window.naver.maps.Map("map", mapOptions);

      // 마커 추가
      const marker = new window.naver.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: "신대성인삼숯불갈비",
      });

      // 정보 윈도우 (상세 정보 포함)
      const infowindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding:15px;color:#2e4a21;background:#fff;border-radius:6px;font-size:13px;min-width:300px;box-shadow:0 2px 6px rgba(0,0,0,0.1);">
            <div style="font-weight:bold;font-size:15px;margin-bottom:10px;border-bottom:2px solid #2e4a21;padding-bottom:8px;">신대성인삼숯불갈비</div>
            <div style="margin-bottom:6px;"><strong>🛣️ 도로명:</strong> 충남 논산시 부창로72번길 15-13</div>
            <div style="margin-bottom:8px;"><strong>🏠 지번:</strong> 충남 논산시 부창동 629번지</div>
            <div style="margin-bottom:8px;"><strong>📞 전화:</strong> 010-5435-1143 / 041-735-0013</div>
            <div style="margin-bottom:8px;"><strong>🕐 영업시간:</strong></div>
            <div style="margin-left:24px;margin-bottom:6px;">평일: 12:00 ~ 22:00</div>
            <div style="margin-left:24px;margin-bottom:6px;">브레이크타임: 13:30 ~ 17:00</div>
            <div style="margin-left:24px;margin-bottom:8px;">주말: 11:00 ~ 22:00</div>
            <div style="color:#999;font-size:12px;line-height:1.5;">⚠️ 12시~1시 반 정심영업은 선예약 손님만 받고 있습니다.</div>
            <div style="color:#999;font-size:12px;margin-top:8px;">📍 위치: 새순교회앞, 세븐일레븐 건너편</div>
          </div>
        `,
      });

      infowindow.open(map, marker);

      // 마커 클릭 시 정보 윈도우 토글
      window.naver.maps.Event.addListener(marker, "click", function () {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      });
    } catch (error) {
      console.error("지도 초기화 실패:", error);
    }
  };

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
      <div className={styles.locationContainer}>
        <div id="map" className={styles.mapContainer}></div>
      </div>
    </div>
  );
};

export default Location;
