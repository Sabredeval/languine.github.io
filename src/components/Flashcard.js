import React, { useState } from 'react';
import Flashcard from '../components/Flashcard';
import './Flashcards.css';

const wordsList = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const Flashcards = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleNext = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
  };

  return (
    <div className="flashcards-container">
      <Flashcard word={wordsList[currentWordIndex]} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Flashcards;