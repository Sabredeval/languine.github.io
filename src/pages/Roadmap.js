// src/components/Roadmap.js
import React from 'react';

function Roadmap() {
  // Placeholder data
  const roadmap = ['Learn Basics', 'Intermediate Level', 'Advanced Level'];

  return (
    <div className="roadmap">
      <h2>Roadmap</h2>
      <ul>
        {roadmap.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default Roadmap;
