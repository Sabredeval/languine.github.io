import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your Dashboard</h1>
      
      <div className="section profile-overview">
        <h2>Profile Overview</h2>
        <p>Username: JohnDoe</p>
        <p>Current Level: Intermediate</p>
        <p>Points: 1200</p>
      </div>

      <div className="section roadmap">
        <h2>Roadmap</h2>
        <p>Next Lesson: Vocabulary Expansion</p>
        <p>Upcoming Milestones: Complete 5 lessons to unlock the next level</p>
      </div>

      <div className="section achievements">
        <h2>Achievements</h2>
        <p>Completed: Basic Grammar Course</p>
        <p>Unlocked: 100 New Words</p>
        <p>Awarded: Beginner's Trophy</p>
      </div>
    </div>
  );
}

export default Home;
