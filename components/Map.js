import React, { useEffect } from "react";

const Map = ({ width, height, location }) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_CLIENT_ID}`;
    script.async = true;

    const onLoad = () => {
      initNaverMap();
    };

    script.addEventListener('load', onLoad);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);
      document.head.removeChild(script);
    };
  }, []);

  const initNaverMap =() => {
    if (window.naver && window.naver.maps) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5665, 126.9780),
        zoom: 10,
      };

      const map = new window.naver.maps.Map('map', mapOptions);

      if (location) {
        const marker = new window.naver.maps.Marker({
          position: location,
          map: map,
        })
      }
    }
  };

  return (
    <div>
      <div id="map" style={{ width, height }}></div>
    </div>
  );

};

export default Map;