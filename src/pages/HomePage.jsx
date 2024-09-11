import React, { useEffect, useState } from 'react'
import LocationList from '../components/LocationList'
import MapView from '../components/MapView'
import { getAllLocations } from '../services/locationService';

const HomePage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getAllLocations();
        setLocations(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLocations();
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>HomePage</h1>
      <LocationList />
      <MapView locations={locations} />
    </div>
  )
}

export default HomePage