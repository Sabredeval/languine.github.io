import React, { useState, useEffect } from 'react';

const Flashcard = ({ word }) => {
  const [translation, setTranslation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (e) => {
    setTranslation(e.target.value);
  };

  const getRandomImage = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random/200x200');
      setImageUrl(response.url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  useEffect(() => {
    getRandomImage();
  }, [word]);

  return (
    <div className="flashcard">
      <img src={imageUrl} alt="Random" />
      <p>{word}</p>
      <input 
        type="text" 
        value={translation} 
        onChange={handleInputChange} 
        placeholder="Translate the word" 
      />
    </div>
  );
};

export default Flashcard;
