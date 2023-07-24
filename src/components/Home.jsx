
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import profileImage from '../assets/person.jpg';
// import secondProfileImage from '../assets/another_person.jpg'; // Replace this with the path to your second profile image

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate()
  const handleLogout = () => {
    // Perform the logout action here, such as clearing user session
    // For demonstration purposes, let's simply log a message to the console
    console.log('Logged out!');
    localStorage.removeItem('userToken');
    // Redirect to the login page
    navigate("/login"); // Replace '/login' with the actual path to your login page
  };

  const toggleProfileCard = () => {
    setIsProfileOpen(!isProfileOpen);
  };

 

  return (
    <div className="bg-green-600 h-screen flex flex-col items-center justify-center relative">
      <h1 className="text-4xl text-white font-bold mb-24">Welcome to Quizzler</h1>
      <button onClick={toggleProfileCard} className="rounded-full overflow-hidden absolute top-0 right-0 mt-4 mr-4">
        <img className="h-10 w-10 rounded-full border-2 border-white" src={profileImage} alt="profile" />
      </button>
      <img className="block mx-auto h-40 mb-28" src={profileImage} alt="profile" />
      {/* Add the second profile picture */}
      {/* <button onClick={toggleSecondProfileCard} className="rounded-full overflow-hidden absolute top-0 right-0 mt-4 mr-20">
        <img className="h-10 w-10 rounded-full border-2 border-white" src={profileImage} alt="second-profile" />
      </button> */}
      <div className="text-center space-y-2 sm:text-left">
        <p className="text-lg text-white font-semibold">Let's play</p>
        <p className="text-white font-medium">Level up</p>
      </div>
      <button className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
        <Link to="/quiz">Play Now</Link>
      </button>

      {/* First Profile Popup */}
      {isProfileOpen && (
        <div className="absolute top-0 right-0 mt-14 mr-4 p-4 bg-white rounded-lg shadow-lg z-10">
        <ul className="space-y-2">
            <li className="text-gray-600 font-semibold">profile</li>
            <li className="text-gray-600 font-semibold cursor-pointer" onClick={handleLogout}>logout</li>
            {/* Add other profile details here */}
          </ul>
          {/* Profile details here */}
          <button
            onClick={toggleProfileCard}
            className="px-4 py-2 mt-4 text-sm text-white font-semibold bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            Close
          </button>
        
        </div>
      )}

    
    </div>
  );
};

export default Home;

