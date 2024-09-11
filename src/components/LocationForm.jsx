import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLocationById, addLocation, updateLocation } from '../services/locationService';
const LocationForm = () => {
    const { id } = useParams();
    const [location, setLocation] = useState({ name: '', address: '', phone: '', latitude: '', longitude: '', company: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchLocation = async () => {
                try {
                    const response = await getLocationById(id);
                    setLocation(response.data);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchLocation();
        }
    }, [id]);

    const handleChange = (e) => {
        setLocation({ ...location, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateLocation(id, location);
            } else {
                await addLocation(location);
            }
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto', gap: '10px' }}>
            <input
                type="text"
                name="name"
                value={location.name}
                onChange={handleChange}
                placeholder="Name"
                required
                style={{ marginTop: '25px', padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
                type="text"
                name="address"
                value={location.address}
                onChange={handleChange}
                placeholder="Address"
                required
                style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
                type="text"
                name="phone"
                value={location.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
                type="number"
                step="any"
                name="latitude"
                value={location.latitude}
                onChange={handleChange}
                placeholder="Latitude"
                required
                style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
                type="number"
                step="any"
                name="longitude"
                value={location.longitude}
                onChange={handleChange}
                placeholder="Longitude"
                required
                style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input
                type="text"
                name="company"
                value={location.company}
                onChange={handleChange}
                placeholder="Company"
                required
                style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button
                type="submit"
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Save
            </button>
        </form>)
}

export default LocationForm