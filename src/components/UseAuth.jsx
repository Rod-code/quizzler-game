// // useAuth.js
// import { useEffect } from 'react';
// import { auth } from '../config/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const useAuth = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is logged in, store the token in local storage
//         user.getIdToken().then((token) => {
//           localStorage.setItem('userToken', token);
//         });
//       } else {
//         // User is not logged in, clear the token from local storage
//         localStorage.removeItem('userToken');
//         // Redirect to the login page
//         navigate('/login');
//       }
//     });

//     // Clean up the subscription when the component unmounts
//     return () => unsubscribe();
//   }, [navigate]);

//   return null;
// };

// export default useAuth;

