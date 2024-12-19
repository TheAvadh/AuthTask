import { useState } from 'react';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );

  const Input = ({ id, type = 'text', ...props }) => (
    <input
      id={id}
      type={type}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-base-100 focus:border-base-200 sm:text-sm"
      {...props}
    />
  );

  const Button = ({ isActive, children, onClick }) => (
    <button
      type="button"
      className={`py-2 px-4 font-bold rounded w-full ${
        isActive ? 'bg-base-100 text-black' : 'bg-base-200 text-gray-500'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return (
    <div className="font-poppins antialiased text-gray-900 bg-gradient-to-b from-base-200 to-base-200 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mt-3 space-y-6 p-8 bg-white rounded-2xl shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold">
            {isSignup ? 'Create an Account' : 'Login to Account'}
          </h2>
        </div>
        <div className="flex justify-around space-x-4">
          <Button isActive={isSignup} onClick={() => setIsSignup(true)}>
            Sign Up
          </Button>
          <Button isActive={!isSignup} onClick={() => setIsSignup(false)}>
            Login
          </Button>
        </div>
        {isSignup ? (
          <form className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <select
                    id="role"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-base-100 focus:border-base-200 sm:text-sm"
                    required
                >
                    <option value="">Select your role</option>
                    <option value="landlord">Landlord</option>
                    <option value="propertyManager">Property Manager</option>
                    <option value="tenant">Tenant</option>
                </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" minLength="8" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm your password" minLength="8" required />
            </div>
            <button type="submit" className="py-2 px-4 bg-base-100 hover:bg-base-200 text-black font-bold rounded w-full">
              Sign Up
            </button>
          </form>
        ) : (
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="py-2 px-4 bg-base-100 hover:bg-base-200 text-black font-bold rounded w-full">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
