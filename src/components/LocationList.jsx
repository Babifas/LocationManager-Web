import React, { useEffect, useState } from 'react'
import { getAllLocations } from '../services/locationService';
import { useNavigate } from 'react-router-dom';

const LocationList = () => {
    const [locations,setLocations]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchLocations=async ()=>{
        try{
            const response=await getAllLocations();
            setLocations(response.data);
        }catch(err){
            console.log(err);           
        }
        }
      fetchLocations();
    },[])
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
    <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Location List</h1>
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {locations.map(location => (
        <li key={location.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '16px' }}>{location.name}</span>
          <button 
            onClick={() => navigate(`/location/${location.id}`)} 
            style={{
              padding: '8px 12px',
              fontSize: '14px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
    <button 
      onClick={() => navigate('/location/new')}
      style={{
        marginTop: '20px',
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Add Location
    </button>
  </div>
  
  )
}

export default LocationList