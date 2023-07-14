import React from 'react';
import profileImage from '../assets/person.jpg';

const Home = () => {
  return (
    <div className="bg-green-600 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white font-bold mb-24">Welcome to Quizzler</h1>
      <img className="block mx-auto h-40  mb-28" src={profileImage} alt="profile" />
      {/* <img className="block mx-auto h-20 rounded-full mb-12" src={profileImage} alt="profile" /> */}
      <div className="text-center space-y-2 sm:text-left">
        <p className="text-lg text-white font-semibold">Let's play</p>
        <p className="text-white font-medium">Level up</p>
      </div>
      <button className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-200 hover:text-green hover:bg-green-600 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Play Now</button>
    </div>
  );
}

export default Home;
