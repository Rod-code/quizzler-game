import React, { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setRegistrationStatus('Passwords do not match');
      return;
    }

    try {
        // User registration successully
      await createUserWithEmailAndPassword(auth, email, password);
      setRegistrationStatus('User registered successfully');
      navigate("/login");
    } catch (error) {
      // User registration failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error registering user:', errorMessage);
      setRegistrationStatus('Error registering user');
    }
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white flex flex-col justify-center'>
          <form className='min-w-[400px] w-full mx-auto rounded-lg bg-green-600 p-8 px-8'>
            <h2 className='text-4xl dark:text-white font-bold text-center'>SIGNUP</h2>
            <div className='flex flex-col dark:text-white py-2'>
              <label>Name</label>
              <input
                className='rounded-lg bg-green-700 mt-2 p-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none'
                type='text'
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className='flex flex-col dark:text-white py-2'>
              <label>Email</label>
              <input
                className='rounded-lg bg-green-700 mt-2 p-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none'
                type='email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className='flex flex-col dark:text-white py-2'>
              <label>Password</label>
              <input
                className='p-2 rounded-lg bg-green-700 mt-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none'
                type='password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className='flex flex-col dark:text-white py-2'>
              <label>Confirm Password</label>
              <input
                className='p-2 rounded-lg bg-green-700 mt-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none'
                type='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>

            {password !== confirmPassword && (
              <p className='text-red-500'>Passwords do not match</p>
            )}

            {registrationStatus && (
              <p className={registrationStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}>
                {registrationStatus}
              </p>
            )}

            <button
              className='w-full my-5 py-2 bg-green-900 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
              onClick={handleSignUp}
            >
            SIGNUP
              
            </button>
            <p className="text-white">have account <span className="text-green-900 cursor-pointer"><Link to='/login'>login</Link></span></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

// import React, { useState } from 'react';
// import { auth, googleProvider } from '../config/firebase'; 
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { Link,} from 'react-router-dom';


// const Signup = () => {
//     const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       console.log('Passwords do not match');
//       return;
//     }

//     // auth
//     //   .createUserWithEmailAndPassword(auth, email, password)
//     //   .then((userCredential) => {
//     //     // User registration successful
//     //     const user = userCredential.user;
//     //     console.log('User registered:', user);
//     //   })
//     try {
//          createUserWithEmailAndPassword(auth, email, password);
//       } catch(error){
//         // User registration failed
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error registering user:', errorMessage);
//       }
//   };
  
//   return (
//     <>
//         <div className='flex justify-center items-center h-screen'>
//         {/* <div className='hidden sm:block'>
//             <img className='w-full h-full object-cover' src={personImg} alt="" />
//         </div> */}

//         <div className='bg-white flex flex-col justify-center'>
//             <form className='min-w-[400px] w-full mx-auto rounded-lg bg-green-600 p-8 px-8'>
//                 <h2 className='text-4xl dark:text-white font-bold text-center'>SIGNUP</h2>
//                 <div className='flex flex-col dark:text-white py-2'>
//                     <label>Names</label>
//                     <input className='rounded-lg bg-green-700 mt-2 p-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none' type="text"  value={name}
//                 onChange={handleNameChange} />
//                 </div>
               
//                 <div className='flex flex-col dark:text-white py-2'>
//                     <label>email</label>
//                     <input className='rounded-lg bg-green-700 mt-2 p-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none' type="email"  value={email}
//                 onChange={handleEmailChange} />
//                 </div>
//                 <div className='flex flex-col dark:text-white py-2'>
//                     <label>Password</label>
//                     <input className='p-2 rounded-lg bg-green-700 mt-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none' type="password" value={password}
//                 onChange={handlePasswordChange} />
//                 </div>
//                 <div className='flex flex-col dark:text-white py-2'>
//                     <label>ConfirmPassword</label>
//                     <input className='p-2 rounded-lg bg-green-700 mt-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none' type="password" value={confirmPassword}
//                 onChange={handleConfirmPasswordChange} />
//                 </div>
//                 {password !== confirmPassword && (
//               <p className='text-red-500'>Passwords do not match</p>
//             )}
               
//              <button className='w-full my-5 py-2 bg-green-900 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'onClick={handleSignUp} ><Link to='/login' > SIGNUP</Link></button>
                
//             </form>
//         </div>
//     </div>
//     </>
    
//   )
// }

// export default Signup