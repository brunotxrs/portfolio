import { useRef } from 'react';
import './App.css';
import AboutMe from './components/about-me/about-me';
import Header from './components/header/header';

function App() {
  const aboutMeRef = useRef(null);



  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header onAboutMeClick={scrollToAboutMe}/>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>

    
    </div>
  );
}

export default App;
