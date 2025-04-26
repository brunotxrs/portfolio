import { useRef } from 'react';
import './App.css';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import Project from './components/project/project';

function App() {
  const skillsRef = useRef(null);
  const projectRef = useRef(null);


  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div>
      <Header onSkillsClick={scrollToSkills} onProjectClick={scrollToProject}/>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>

    
    </div>
  );
}

export default App;
