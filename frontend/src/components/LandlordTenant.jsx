import { useLocation } from 'react-router-dom';
import tenantImage from '../assets/tenant.png'
import landlordImage from '../assets/landlord.png'

const roleImages = {
  tenant: tenantImage,
  landlord: landlordImage, 
};

const LandlordTenantDashboard = () => {
  const { state } = useLocation(); // Retrieve user details (fullName and role)
  const { fullName, role } = state;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
        <div className="flex justify-center mb-6">
          {/* Role-based Profile Picture */}
          <img
            src={roleImages[role]}
            alt={`${role} profile`}
            className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-sm"
          />
        </div>
        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{fullName}</h1>
        <p className="text-lg text-gray-500 mb-4 capitalize">Role: {role}</p>
        {/* Additional Feature Section */}
        <button className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 shadow-lg">
          Explore Features
        </button>
      </div>
    </div>
  );
};

export default LandlordTenantDashboard;
