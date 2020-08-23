import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header'

function App() {

  // Antes de usar useState
  // const projects = ['Desenvolvimento Web', 'Frontend web', 'React Native'];

  // Com useState
  const [projects, setProjects] = useState(['Desenvolvimento Web', 'Frontend web', 'React Native']);

  function handleAddProject() {
    // projects.push(`New Project :: ${Date.now()}`);
    setProjects([...projects, `New Project :: ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={400} src={backgroundImage} alt="Background"/>
        
      <ul>
        {projects.map(project => <li key={project}>{project}</li> )}
      </ul>

      <button type="button" onClick={handleAddProject} >Add Project</button>
    </>

  );
}

export default App;