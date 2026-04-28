// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import './App.css';

function App() {
  // Simple state to hold our students
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman', score: 78 },
    { id: 2, name: 'Mayank', score: 45 },
    { id: 3, name: 'Sahil', score: 90 },
    { id: 4, name: 'Abdul', score: 32 },
  ]);

  const [nameInput, setNameInput] = useState('');
  const [scoreInput, setScoreInput] = useState('');

  // 1. Calculate stats using a simple "for" loop (very student-friendly)
  let total = students.length;
  let passedCount = 0;
  let totalScore = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 40) {
      passedCount++;
    }
    totalScore += Number(students[i].score);
  }

  let average = 0;
  if (total > 0) {
    average = Math.floor(totalScore / total);
  }

  // 2. Add a new student
  const addStudent = () => {
    if (nameInput === '' || scoreInput === '') {
      alert('Please enter both a name and a score!');
      return;
    }

    const newStudent = {
      id: Math.random(), // A basic way to make a random ID
      name: nameInput,
      score: Number(scoreInput)
    };

    // Add to the array and clear inputs
    setStudents([...students, newStudent]);
    setNameInput('');
    setScoreInput('');
  };

  // 3. Instantly update score when typing in the box
  const updateScore = (id, newScoreValue) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, score: newScoreValue };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  return (
    <div className="main-container">
      <h2>STUDENT SCOREBOARD</h2>

      {/* Add Student Form */}
      <div className="box add-box">
        <p>Register Student</p>
        <input 
          type="text" 
          placeholder="Name" 
          value={nameInput} 
          onChange={(e) => setNameInput(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Score" 
          value={scoreInput} 
          onChange={(e) => setScoreInput(e.target.value)} 
        />
        <button onClick={addStudent}>+ ADD</button>
      </div>

      {/* Stats Display */}
      <div className="box stats-box">
        <div className="stat">
          <p>Total: {total}</p>
        </div>
        <div className="stat">
          <p>Passed: {passedCount}</p>
        </div>
        <div className="stat">
          <p>Average Score: {average}</p>
        </div>
      </div>

      {/* Table Display */}
      <div className="box table-box">
        <div className="table-header">
          <span className="col">Name</span>
          <span className="col">Score</span>
          <span className="col">Status</span>
          <span className="col">Update</span>
        </div>

        {students.map((student) => {
          let isPass = student.score >= 40;
          
          return (
            <div className="table-row" key={student.id}>
              <span className="col">{student.name}</span>
              <span className="col score-text">{student.score}</span>
              <span className="col">
                {isPass ? (
                  <span className="pass-badge">PASS</span>
                ) : (
                  <span className="fail-badge">FAIL</span>
                )}
              </span>
              <span className="col">
                <input 
                  type="number" 
                  value={student.score} 
                  onChange={(e) => updateScore(student.id, e.target.value)}
                  className="edit-input"
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;