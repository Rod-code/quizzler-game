// if (currentQuestion >= questions.length) {
//   // Save the user score and username to the database
//   try {
//     const email = 'ishimwerodrigue10@gmail.com'; // Replace this with the actual username of the user
//     const userScore = score;
//     const leaderboardRef = collection(db, 'leaderboard');
//      addDoc(leaderboardRef, {
//       email,
//       score: userScore,
//     });
//   } catch (error) {
//     console.error('Error saving user score:', error);
//   }

// };











// import React, { useEffect, useState } from 'react';
// import { db } from '../config/firebase';
// import { getDocs, collection } from 'firebase/firestore';
// import { Link,  } from 'react-router-dom';
// // import congratulations from '../assets/congratulations.jpg';

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const questionsRef = collection(db, 'questions');

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const snapshot = await getDocs(questionsRef);
//         const data = snapshot.docs.map(doc => doc.data());
//         setQuestions(data);
//         console.log('Questions:', data); 
//       } catch (error) {
//         console.log('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleOptionSelect = (option) => {
//     if (!selectedOption) {
//       setSelectedOption(option);

//       if (isOptionCorrect(option)) {
//         setScore(score + 1);
//       }

//       setTimeout(() => {
//         setCurrentQuestion(currentQuestion + 1);
//         setSelectedOption(null);
//       }, 1000);
//     }
//   };

//   const handleNextQuestion = () => {
//     if (selectedOption === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }

//     setSelectedOption(null);
//     setCurrentQuestion(currentQuestion + 1);
//   };
//   const isOptionCorrect = (option) => {
//     return option === questions[currentQuestion].correctAnswer;
//   };
  
//   const renderOptions = () => {
//     const options = questions[currentQuestion].options;
//     const halfLength = Math.ceil(options.length / 2);
//     const leftOptions = options.slice(0, halfLength);
//     const rightOptions = options.slice(halfLength);
  
//     return (
//       <div className="grid grid-cols-2 gap-4 my-4 ">
//         <div className="flex flex-col my-4 gap-4">
//           {leftOptions.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionSelect(option)}
//               className={`option ${
//                 selectedOption === option
//                   ? isOptionCorrect(option)
//                     ? 'bg-green-400'
//                     : 'bg-red-400'
//                   : 'bg-green-700'
//               } w-[200px] h-[45px] p-2 rounded-2xl cursor-pointer`}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col my-4 gap-4">
//           {rightOptions.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionSelect(option)}
//               className={`option ${
//                 selectedOption === option
//                   ? isOptionCorrect(option)
//                     ? 'bg-green-400'
//                     : 'bg-red-400'
//                   : 'bg-green-700'
//               } w-[200px] h-[45px] p-2 rounded-2xl cursor-pointer`}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  


//   if (questions.length === 0) {
//     return <div className="bg-green-600 min-h-screen flex flex-col items-center justify-center">Loading...</div>;
//   }

//   if (currentQuestion >= questions.length) {
//     return (
//       <div className="flex flex-col items-center bg-green-600 min-h-screen">
//         <h1 className="text-4xl font-bold">Quiz Finished!</h1>
//         {/* <img src ={congratulations}/> */}
//         <h2 className="text-2xl mt-4">Final Score: {score}</h2>
//         <button className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"><Link to='/'>Try Again</Link></button>
//         <h1 className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"><Link to='/leaderboard'>See top Leaders</Link></h1>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center bg-green-600 min-h-screen">
//       <h2 className="text-xl">Question {currentQuestion + 1}</h2>

//   <img src={questions[currentQuestion].question} alt="" className="w-[230px] h-[250px] rounded-lg" />


//       <div className="options mt-4 px-4">
//         {renderOptions()}
//       </div>
//       <button
//         onClick={handleNextQuestion}
//         disabled={!selectedOption}
//         className="px-4 py-2 mt-4 bg-green-700 text-white rounded disabled:bg-gray-400"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Quiz;




 // const renderOptions = () => {
  //   const options = questions[currentQuestion].options;
  //   const halfLength = Math.ceil(options.length / 2);
  //   const leftOptions = options.slice(0, halfLength);
  //   const rightOptions = options.slice(halfLength);
  
  //   return (
  //     <div className="grid grid-cols-2 gap-4 my-4 ">
  //       <div className="flex flex-col my-4 gap-4">
  //         {leftOptions.map((option, index) => (
  //           <div
  //             key={index}
  //             onClick={() => handleOptionSelect(option)}
  //             className={`option ${
  //               selectedOption === option
  //                 ? isOptionCorrect(option)
  //                   ? 'bg-green-400'
  //                   : 'bg-red-400'
  //                 : 'bg-green-700'
  //             } w-[200px] h-[45px] p-2 rounded-2xl cursor-pointer`}
  //           >
  //             {option}
  //           </div>
  //         ))}
  //       </div>
  //       <div className="flex flex-col my-4 gap-4">
  //         {rightOptions.map((option, index) => (
  //           <div
  //             key={index}
  //             onClick={() => handleOptionSelect(option)}
  //             className={`option ${
  //               selectedOption === option
  //                 ? isOptionCorrect(option)
  //                  ? 'bg-green-400'
  //                   : 'bg-red-400'
  //                 : 'bg-green-700'
  //             } w-[200px] h-[45px] p-2 rounded-2xl cursor-pointer`}
  //           >
  //             {option}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };