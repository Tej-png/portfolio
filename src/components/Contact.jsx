import { useState } from 'react';
import '../App.css';

function Contact({ aboutRef }) {
  const [count, setCount] = useState(0);

  return (
    <div
      className="flex flex-col p-10 text-left contact 2xl:px-20"
      ref={aboutRef}
    >
      <h1 className="py-3 text-xl lg:text-2xl font-bold">Contact Me</h1>
      <ul>
        <li>
          EMAIL:{' '}
          <a href="mailto:singh.bir978@gmail.com">singh.bir978@gmail.com</a>
        </li>
        <li>
          INSTAGRAM:{' '}
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tej-kl
          </a>
        </li>
        <li>
          LINKEDIN:{' '}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tejbir Singh
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
