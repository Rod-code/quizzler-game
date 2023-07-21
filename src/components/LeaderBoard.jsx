import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';
import { Link,  } from 'react-router-dom';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const leaderboardRef = collection(db, 'leaderboard');
        const querySnapshot = await getDocs(query(leaderboardRef, orderBy('score', 'desc')));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div className="bg-green-800 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
      <table className="mt-4 border-collapse border border-green-800">
        <thead>
          <tr>
            <th className="bg-green-600 text-white py-2 px-4">Email</th>
            <th className="bg-green-600 text-white py-2 px-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-green-400' : 'bg-green-500'}>
              <td className="border border-green-700 py-2 px-4">{entry.email}</td>
              <td className="border border-green-700 py-2 px-4">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"><Link to='/'>Back Home</Link></button>
    </div>
  );
};

export default Leaderboard;


// // Leaderboard.jsx

// import React, { useEffect, useState } from 'react';
// import { db } from '../config/firebase';
// import { getDocs, collection, orderBy, query } from 'firebase/firestore';

// const Leaderboard = () => {
//   const [leaderboardData, setLeaderboardData] = useState([]);

//   useEffect(() => {
//     const fetchLeaderboardData = async () => {
//       try {
//         const leaderboardRef = collection(db, 'leaderboard');
//         const querySnapshot = await getDocs(query(leaderboardRef, orderBy('score', 'desc')));
//         const data = querySnapshot.docs.map((doc) => doc.data());
//         setLeaderboardData(data);
//       } catch (error) {
//         console.error('Error fetching leaderboard data:', error);
//       }
//     };

//     fetchLeaderboardData();
//   }, []);

//   return (
//     <div className="bg-green-600 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold">Leaderboard</h1>
//       <table className="mt-4">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboardData.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.email}</td>
//               <td>{entry.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Leaderboard;


