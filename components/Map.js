import React, { useEffect, useRef, useState } from "react";

const Map = ({ width, height, location }) => {

  const [mapInstance, setMapInstance] = useState(null);
  const [marker, setMarker] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {

    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_CLIENT_ID}&submodules=geocoder`;
    script.async = true;

    const onLoad = () => {
      console.log("Naver Maps API script loaded.");
      initNaverMap();
    };

    const onError = () => {
      console.error("Error loading Naver Maps API script.");
    };

    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
      console.log("Removing script from head...");
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {

    if (mapInstance && location) {
      const tm128= new naver.maps.Point(location.x, location.y);
      const latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);``

      const mapOptions = {
        center: new window.naver.maps.LatLng(latLng.y, latLng.x),
        zoom: 13,
      }

      mapInstance.setOptions(mapOptions);

      if (marker) {
        marker.setPosition(latLng);
      } else {
        const newMarker = new window.naver.maps.Marker({
          position: latLng,
          map: mapInstance,
        });

        setMarker(newMarker);
      }
      mapInstance.panTo(latLng);
    }
  }, [mapInstance, location, marker]);

  const initNaverMap = () => {
    console.log("Initializing Naver Map...");
    if (window.naver && window.naver.maps) {
      console.log("Naver Maps API available.");

      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5665, 126.9780),
        zoom: 10,
      };

      const map = new window.naver.maps.Map(mapContainerRef.current, mapOptions);
      setMapInstance(map);
    }
  };

  return (
    <div>
      <div ref={mapContainerRef} style={{ width, height }}></div>
    </div>
  );

};

export default Map;