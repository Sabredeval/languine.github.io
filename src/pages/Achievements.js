// src/components/Achievements.js
import React from 'react';

function Achievements() {
  // Placeholder data
  const achievements = ['Completed Basics', '10 Days Streak', 'First Conversation'];

  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
