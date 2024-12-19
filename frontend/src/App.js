
import './App.css';
import AuthPage from './components/Signup';
import LandlordTenantDashboard from './components/LandlordTenant';
import PropertyManagerDashboard from './components/PropertyManager';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/landlord-tenant-dashboard" element={<LandlordTenantDashboard />} />
        <Route path="/property-manager-dashboard" element={<PropertyManagerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
