import { useState } from 'react';
import '../App.css';

function Projects({ aboutRef }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col m-10 text-left 2xl:m-20" ref={aboutRef}>
      <h1 className="text-xl lg:text-2xl font-bold pt-5 2xl:py-5">
        Some Of My Projects!
      </h1>
      <div className="flex sm:flex-col lg:flex-row text-centers flex-col justify-evenly">
        <div className="my-5">
          <div>
            <a
              href="https://ai-chat-bot-neon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./chatBot.png"
                alt="AI Chat Bot"
                className="  rounded-lg shadow-lg project-img"
              />
            </a>
          </div>
          <h2>AI Chat Bot</h2>
        </div>
        <div className="my-5">
          <div>
            <a
              href="https://habit-app-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./habitTracker.png"
                alt="AI Chat Bot"
                className="  rounded-lg shadow-lg project-img"
              />
            </a>
          </div>
          <h2>Habit Tracking App</h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
