import React, { useState } from 'react';
import { auth, googleProvider} from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
        navigate("/home")
      
      })
      .catch((error) => {
        // User login failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error logging in user:', errorMessage);
        setLoginStatus('Login failed');
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Google sign-in successful
        const user = result.user;
        console.log('User signed in with Google:', user);
        setLoginStatus('Google sign-in successful');
        navigate('/');
      })
      .catch((error) => {
        // Google sign-in failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in with Google:', errorMessage);
        setLoginStatus('Google sign-in failed');
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
            <span className='font-light cursor-pointer'>Forgot Password</span>
          </div>
          <button
            className="w-full my-5 py-2 bg-green-900 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>
                <div className="px-6 sm:px-0 max-w-sm">
    <button type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={handleGoogleSignIn}><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" ></path></svg>Sign up with Google<div></div></button>
</div>
          <p className="text-white">dont have account <span  className="text-green-900 cursor-pointer"><Link to='/signup'>signup</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

//<p className="text-white">dont have account <span  className="text-green-900 cursor-pointer"><Link to='/signup'>signup</Link></span></p>