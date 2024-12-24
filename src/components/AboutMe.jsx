import { useState } from 'react';
import '../App.css';

function AboutMe({ aboutRef }) {
  const [count, setCount] = useState(0);

  return (
    <div
      className="flex flex-col text-left p-10 2xl:py-18 about 2xl:px-20"
      ref={aboutRef}
    >
      <h1 className="text-xl lg:text-2xl font-bold py-3">About me</h1>
      <p className="2xl:pr-48 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eget aliquet odio. Suspendisse non neque fringilla, tincidunt nulla at,
        fringilla dui. Integer vulputate erat sem, finibus aliquam nibh luctus
        id. Vestibulum tristique vehicula placerat. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam
        eleifend metus posuere tellus dapibus hendrerit. In eleifend nulla sed
        fermentum imperdiet. Proin auctor ipsum a scelerisque lacinia. Phasellus
        dui felis, luctus mollis leo eu, tristique imperdiet erat. Morbi ut urna
        non dolor rutrum pellentesque. Morbi tellus turpis, efficitur in dolor
        non, ornare faucibus felis. Cras in libero quis odio egestas gravida.
        Sed eleifend massa sit amet bibendum laoreet. Ut varius tellus id
        scelerisque accumsan.
      </p>
    </div>
  );
}

export default AboutMe;
