import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationDetailsPage from './pages/LocationDetailsPage';
import LocationForm from './components/LocationForm';

function App() {
  return (
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path="/location/:id" element={<LocationDetailsPage />} />
  <Route path="/location/new" element={<LocationForm />} />
</Routes>
  );
}

export default App;
