import { useLocation } from 'react-router-dom';
import propertyManagerImage from '../assets/lender.png'


const PropertyManagerDashboard = () => {
  const { state } = useLocation(); 
  const { fullName, role } = state;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
        <div className="flex justify-center mb-6">
          
          <img
            src={propertyManagerImage}
            alt={`${role} profile`}
            className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-sm"
          />
        </div>
       
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

export default PropertyManagerDashboard;
