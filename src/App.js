import { useRef } from 'react';
import './App.css';
import Header from './components/header/header';
import Skills from './components/skills/skills';

function App() {
  const skillsRef = useRef(null);


  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header onSkillsClick={scrollToSkills}/>
      <div ref={skillsRef}>
        <Skills />
      </div>

    
    </div>
  );
}

export default App;
