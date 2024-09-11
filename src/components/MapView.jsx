import React, { useEffect } from 'react';
import { loadGoogleMapsScript } from '../utils/googleMaps';

const MapView = ({ locations }) => {
  useEffect(() => {
    const initMap = async () => {
      const google = await loadGoogleMapsScript();
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
      });

      locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: map,
          title: location.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div><h3>${location.name}</h3><p>${location.address}</p><p>${location.phone}</p><p>${location.company}</p></div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    initMap();
  }, [locations]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapView;
