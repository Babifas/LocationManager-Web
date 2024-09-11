import axios from "axios";
const API_URL = "https://localhost:7181/api/Locations";

export const getAllLocations = () => axios.get(API_URL);
export const getLocationById = (id) => axios.get(`${API_URL}/${id}`);
export const addLocation = (location) => axios.post(API_URL, location);
export const updateLocation = (id, location) => axios.put(`${API_URL}/${id}`, location);
export const deleteLocation = (id) => axios.delete(`${API_URL}/${id}`);