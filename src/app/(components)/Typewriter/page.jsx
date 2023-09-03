// 'use client'
// import 'src/app/(components)/Typewriter/Style.css'
// import React, { useState, useEffect } from 'react';

// function Typewriter() {
//   const words = ["Love", "like Art", "the Future", "Everything"];
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [currentWord, setCurrentWord] = useState('');

//   useEffect(() => {
//     const typeEffect = () => {
//       const current = words[wordIndex];

//       if (!isDeleting) {
//         if (charIndex < current.length) {
//           setCurrentWord(current.substring(0, charIndex + 1));
//           setCharIndex((prevIndex) => prevIndex + 1);
//         } else {
//           setIsDeleting(true);
//           setTimeout(() => {
//             setIsDeleting(false);
//             setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//           }, 1000); // Delay before starting to type the next word
//         }
//       } else {
//         if (charIndex > 0) {
//           setCurrentWord(current.substring(0, charIndex - 1));
//           setCharIndex((prevIndex) => prevIndex - 1);
//         } else {
//           setIsDeleting(false);
//           setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }
//       }

//       setTimeout(typeEffect, isDeleting ? 500 : 300); // Typing speed and deleting speed
//     };

//     typeEffect();
//   }, [charIndex, wordIndex, isDeleting]);

//   return (
//     <h1 className='transition duration-500 ease-in'>
//       {currentWord}
//       <span className="stopBlinking transition duration-300"></span> {/* Apply the CSS class */}
//     </h1>
//   );
// }

// export default Typewriter;