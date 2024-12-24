import { useState, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0);
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="">
      <NavBar scrollToAbout={scrollToAbout} />
      <div className="flex justify-center flex-col text-center m-10 main 2xl:px-5">
        <h1 className="text-5xl 2xl:text-8xl p-5">I'm Tejbir</h1>
        <p className="main-text 2xl:px-36 2xl:py-12">
          Welcome to my portfolio website. As a React expert, I combine stunning
          web designs with top-notch functionality to create engaging digital
          experiences for clients and employers alike.
        </p>
      </div>
      <AboutMe aboutRef={aboutRef} />
      <Projects aboutRef={aboutRef} />
      <Contact aboutRef={aboutRef} />
    </div>
  );
}

export default App;
