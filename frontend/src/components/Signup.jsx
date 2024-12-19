import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName: e.target.fullName?.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword?.value,
      role: e.target.role?.value,
    };

    const url = isSignup
      ? 'http://localhost:8080/api/auth/signup'
      : 'http://localhost:8080/api/auth/login';

    try {
      setLoading(true);

      const response = await axios.post(url, data, {
        headers: { 'Content-Type': 'application/json' },
      });

      toast.success(response.data.message || (isSignup ? 'Signup successful!' : 'Login successful!'));

      if (!isSignup) {
        const { user } = response.data;

        // So here I am using a single dashbooard for landlord and tenant with dynamic content(role). And have separate dashboard for property manager.
        if (user.role === 'tenant') {
          navigate('/landlord-tenant-dashboard', { state: { fullName: user.fullName, role: user.role } });
        } else if (user.role === 'landlord') {
          navigate('/landlord-tenant-dashboard', { state: { fullName: user.fullName, role: user.role } });
        } else if (user.role === 'propertyManager') {
          navigate('/property-manager-dashboard', { state: { fullName: user.fullName, role: user.role } });
        }
      } else {
        setIsSignup(false); // Switch to login view after signup
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'An error occurred. Please try again.';
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-poppins antialiased text-gray-900 bg-gradient-to-b from-base-200 to-base-200 min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-md mt-3 space-y-6 p-8 bg-white rounded-2xl shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold">{isSignup ? 'Create an Account' : 'Login to Account'}</h2>
        </div>
        <div className="flex justify-around space-x-4">
          <button onClick={() => setIsSignup(true)} className={`py-2 px-4 rounded ${isSignup ? 'bg-base-100' : 'bg-base-200'}`}>Sign Up</button>
          <button onClick={() => setIsSignup(false)} className={`py-2 px-4 rounded ${!isSignup ? 'bg-base-100' : 'bg-base-200'}`}>Login</button>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {isSignup && (
            <>
              <div className="grid gap-2">
                <label htmlFor="role">Role</label>
                <select id="role" required>
                  <option value="">Select your role</option>
                  <option value="landlord">Landlord</option>
                  <option value="propertyManager">Property Manager</option>
                  <option value="tenant">Tenant</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" required />
              </div>
            </>
          )}
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" required />
          </div>
          {isSignup && (
            <div className="grid gap-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password" required />
            </div>
          )}
          <button type="submit" disabled={loading} className="py-2 px-4 bg-base-100 hover:bg-base-200 rounded">
            {loading ? 'Loading...' : isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
