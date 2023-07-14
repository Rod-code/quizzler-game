import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User login successful
        const user = userCredential.user;
        console.log('User logged in:', user);
        setLoginStatus('Login successful');
        navigate("/")
      
      })
      .catch((error) => {
        // User login failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error logging in user:', errorMessage);
        setLoginStatus('Login failed');
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white flex flex-col justify-center">
        <form className="min-w-[400px] w-full mx-auto rounded-lg bg-green-600 p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">LOGIN</h2>
          {loginStatus && (
            <p className={loginStatus === 'Login successful' ? 'text-green-500' : 'text-red-500'}>{loginStatus}</p>
          )}
          <div className="flex flex-col dark:text-white py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-green-700 mt-2 p-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col dark:text-white py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-green-700 mt-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-between dark:text-white py-2">
            {/* <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p> */}
            <p>Forgot Password</p>
          </div>
          <button
            className="w-full my-5 py-2 bg-green-900 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-white">dont have account <span  className="text-green-900 cursor-pointer"><Link to='/signup'>signup</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

//<p className="text-white">dont have account <span  className="text-green-900 cursor-pointer"><Link to='/signup'>signup</Link></span></p>