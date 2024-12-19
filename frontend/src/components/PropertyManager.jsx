import { useLocation } from 'react-router-dom';

const PropertyManagerDashboard = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>Welcome, {state.fullName}!</h1>
      <p>Role: Property Manager</p>
    </div>
  );
};

export default PropertyManagerDashboard;
