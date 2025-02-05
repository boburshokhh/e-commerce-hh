import { NavLink } from 'react-router-dom';
import dl from '../assets/images/SIGIN/dl.beatsnoop 1.png';
import google from '../assets/images/SIGIN/goggle.png';
export function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex bg-white p-8 rounded-lg  w-full max-w-4xl">
        {/* Левая сторона с изображением */}
        <div className="w-1/2 flex justify-center items-center p-4">
          <img src={dl} alt="Shopping" className="w-full object-cover" />
        </div>
        
        {/* Правая сторона с формой регистрации */}
        <div className="w-1/2 flex flex-col justify-center p-6">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Inter' }}>Create an account</h2>
          <p className="text-lg mb-6" style={{ fontFamily: 'Poppins' }}>Enter your details below</p>
          
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full mb-4 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors text-lg"
            >
              Create Account
            </button>
          </form>
          
          <button
            className="w-full mt-4 flex items-center justify-center border py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          
          <p className="mt-4 text-center text-lg" style={{ fontFamily: 'Poppins' }}>
            Already have an account? <NavLink to="/login" className="text-red-500">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
