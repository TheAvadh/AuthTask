import { useLocation } from 'react-router-dom';

const LandlordTenantDashboard = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>Welcome, {state.fullName}!</h1>
      <p>Role: {state.role}</p>
    </div>
  );
};

export default LandlordTenantDashboard;

