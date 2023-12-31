import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
// import useAuth from './UseAuth';
import { getDocs, collection, addDoc,  doc, orderBy, query, limit, setDoc} from 'firebase/firestore';
import { Link,  } from 'react-router-dom';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
// import congratulations from '../assets/congratulations.jpg';

const Quiz = () => {
  // useAuth();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const questionsRef = collection(db, 'questions');
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const snapshot = await getDocs(questionsRef);
        const data = snapshot.docs.map(doc => doc.data());
        setQuestions(data);
        console.log('Questions:', data); 
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);


  const handleOptionSelect = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);

      if (isOptionCorrect(option)) {
        setScore(score + 1);
      }

      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }, 1000);
    }
  };

  // const handleNextQuestion = () => {
  //   if (selectedOption === questions[currentQuestion].correctAnswer) {
  //     setScore(score + 1);
  //   }

  //   setSelectedOption(null);
  //   setCurrentQuestion(currentQuestion + 1);
  // };

  useEffect(() => {
    // Function to fetch the currently authenticated user's email
    const fetchUserEmail = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserEmail(user.email);
          console.log('User Email:', user.email);
          // Place the rest of your code here that depends on the user's email
        }
      });
    };
  
    // Call the function to fetch the user's email
    fetchUserEmail();
    // The rest of your useEffect code...
  }, []);

  if (currentQuestion >= questions.length) {
    try {
      if (userEmail) {
        const userScore = score;
        const leaderboardRef = doc(collection(db, 'leaderboard'), userEmail);
        setDoc(leaderboardRef, {
          email: userEmail,
          score: userScore,
        });
      }
    } catch (error) {
      console.error('Error saving user score:', error);
    }
  }
  
  
  
  
  // if (currentQuestion >= questions.length) {
  //   // Save the user score and username to the database
  //   try {
  //     const userEmail = 'ishimwerodrigue10@gmail.com'; // Replace this with the actual username of the user
  //     const userScore = score;
  //     const leaderboardRef = doc(collection(db, 'leaderboard'), userEmail);
  //      setDoc(leaderboardRef, {
  //        email: userEmail,
  //       score: userScore,
  //     });
  //   } catch (error) {
  //     console.error('Error saving user score:', error);
  //   }
  // }
  const isOptionCorrect = (option) => {
    return option === questions[currentQuestion].correctAnswer;
  };
  const renderOptions = () => {
    const options = questions[currentQuestion].options;
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const isAnswered = selectedOption !== null;
  
    return (
      <div className="grid grid-cols-2 gap-4 my-4  text-white">
        {options.map((option, index) => {
          const isOptionSelected = selectedOption === option;
          const isCorrect = isOptionCorrect(option);
          const optionClass = `option w-[200px] h-[45px] p-2 rounded-2xl cursor-pointer ${
            isAnswered
              ? isCorrect
                ? 'bg-green-400'
                : isOptionSelected
                ? 'bg-red-500'
                : 'bg-green-700'
              : 'bg-green-700'
          }`;
  
          return (
            <div
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={optionClass}
            >
              {option}
            </div>
          );
        })}
      </div>
    );
  };


  if (questions.length === 0) {
    return <div className="bg-green-600 min-h-screen flex flex-col items-center justify-center  text-white">Loading...</div>;
  }

  if (currentQuestion >= questions.length) {
    return (
      <div className="flex flex-col items-center bg-green-600 min-h-screen">
        <h1 className="text-4xl font-bold text-white">Quiz Finished!</h1>
        {/* <img src ={congratulations}/> */}
        <h2 className="text-2xl mt-4 text-white">Final Score: {score} out 3</h2>
        <button className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"><Link to='/'>Try Again</Link></button>
        <h1 className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"><Link to='/leaderboard'>See top Leaders</Link></h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-green-600 min-h-screen">
      <h2 className="text-xl font-bold text-white">Question {currentQuestion + 1}</h2>

  <img src={questions[currentQuestion].question} alt="" className="w-[230px] h-[250px] rounded-lg" />


      <div className="options mt-4 px-4">
        {renderOptions()}
      </div>
      {/* <button
        onClick={handleNextQuestion}
        disabled={!selectedOption}
        className="px-4 py-2 mt-4 bg-green-700 text-white rounded disabled:bg-gray-400"
      >
        Next
      </button> */}
    </div>
  );
};

export default Quiz;
// import React, { useEffect, useState } from 'react';
// import { db } from '../config/firebase';
// // import useAuth from './UseAuth';
// import { getDocs, collection, addDoc,  doc, orderBy, query, limit, setDoc} from 'firebase/firestore';
// import { Link,  } from 'react-router-dom';

// // import congratulations from '../assets/congratulations.jpg';

// const Quiz = () => {
//   // useAuth();
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

//   // const handleNextQuestion = () => {
//   //   if (selectedOption === questions[currentQuestion].correctAnswer) {
//   //     setScore(score + 1);
//   //   }

//   //   setSelectedOption(null);
//   //   setCurrentQuestion(currentQuestion + 1);
//   // };
//   if (currentQuestion >= questions.length) {
//     // Save the user score and username to the database
//     try {
//       const userEmail = 'ishimwerodrigue10@gmail.com'; // Replace this with the actual username of the user
//       const userScore = score;
//       const leaderboardRef = doc(collection(db, 'leaderboard'), userEmail);
//        setDoc(leaderboardRef, {
//          email: userEmail,
//         score: userScore,
//       });
//     } catch (error) {
//       console.error('Error saving user score:', error);
//     }
//   }
//   const isOptionCorrect = (option) => {
//     return option === questions[currentQuestion].correctAnswer;
//   };
//   const renderOptions = () => {
//     const options = questions[currentQuestion].options;
//     const correctAnswer = questions[currentQuestion].correctAnswer;
//     const isAnswered = selectedOption !== null;
  
//     return (
//       <div className="grid grid-cols-2 gap-4 my-4  text-white">
//         {options.map((option, index) => {
//           const isOptionSelected = selectedOption === option;
//           const isCorrect = isOptionCorrect(option);
//           const optionClass = `option w-[200px] h-[45px] p-2 rounded-2xl cursor-pointer ${
//             isAnswered
//               ? isCorrect
//                 ? 'bg-green-400'
//                 : isOptionSelected
//                 ? 'bg-red-500'
//                 : 'bg-green-700'
//               : 'bg-green-700'
//           }`;
  
//           return (
//             <div
//               key={index}
//               onClick={() => handleOptionSelect(option)}
//               className={optionClass}
//             >
//               {option}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };


//   if (questions.length === 0) {
//     return <div className="bg-green-600 min-h-screen flex flex-col items-center justify-center  text-white">Loading...</div>;
//   }

//   if (currentQuestion >= questions.length) {
//     return (
//       <div className="flex flex-col items-center bg-green-600 min-h-screen">
//         <h1 className="text-4xl font-bold text-white">Quiz Finished!</h1>
//         {/* <img src ={congratulations}/> */}
//         <h2 className="text-2xl mt-4 text-white">Final Score: {score} out 3</h2>
//         <button className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"><Link to='/'>Try Again</Link></button>
//         <h1 className="px-10 py-1 mt-8 text-sm text-white font-semibold rounded-full border border-green-400 hover:text-green hover:bg-green-800 hover:border-green focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"><Link to='/leaderboard'>See top Leaders</Link></h1>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center bg-green-600 min-h-screen">
//       <h2 className="text-xl font-bold text-white">Question {currentQuestion + 1}</h2>

//   <img src={questions[currentQuestion].question} alt="" className="w-[230px] h-[250px] rounded-lg" />


//       <div className="options mt-4 px-4">
//         {renderOptions()}
//       </div>
//       {/* <button
//         onClick={handleNextQuestion}
//         disabled={!selectedOption}
//         className="px-4 py-2 mt-4 bg-green-700 text-white rounded disabled:bg-gray-400"
//       >
//         Next
//       </button> */}
//     </div>
//   );
// };

// export default Quiz;