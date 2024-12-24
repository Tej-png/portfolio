import { useState } from 'react';
import '../App.css';

function NavBar({ scrollToAbout, scrollToProjects, scrollToContact }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center p-5 w-full bg-white shadow-md z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold">TEJBIR</h1>

      {/* Hamburger Menu */}
      <button
        className="sm:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-8">
        <li
          className="cursor-pointer hover:text-gray-500"
          onClick={() => scrollToAbout()}
        >
          ABOUT ME
        </li>
        <li
          className="cursor-pointer hover:text-gray-500"
          onClick={() => scrollToProjects()}
        >
          PROJECTS
        </li>
        <li
          className="cursor-pointer hover:text-gray-500"
          onClick={() => scrollToContact()}
        >
          GET IN TOUCH
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-5 py-5 shadow-lg sm:hidden">
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => {
              scrollToAbout();
              setIsOpen(false);
            }}
          >
            ABOUT ME
          </li>
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => {
              scrollToProjects();
              setIsOpen(false);
            }}
          >
            PROJECTS
          </li>
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => {
              scrollToContact();
              setIsOpen(false);
            }}
          >
            GET IN TOUCH
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
