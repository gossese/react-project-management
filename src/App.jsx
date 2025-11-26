import Sidebar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([{ title: 'learning React', description: 'first descriptioin', id: 0.5 }, { title: 'second title', description: 'second descriptioin', id: 0.6, date: 11-11-2025 }]);
  const [creatingProject, setCreatingProject] = useState('noneSelected'); // ['noneSelected', 'isCreating', 'isEditing']
  const [selectedProjectId, setProjectId] = useState(null);

  let mainScreen;

  if (creatingProject === 'isCreating') {
    mainScreen = <NewProject onAdd={handleSaveNewProject} />
  }
  else if (creatingProject === 'isEditing') {
     mainScreen = <Project project={projects.find((p) => p.id == selectedProjectId)}></Project>
  } else {
    mainScreen = <NoProjectSelected handleClick={() => setCreatingProject('isCreating')} />
  }

  function handleSaveNewProject(newProject) {
    setProjects(prev => [...prev, newProject]);
    setCreatingProject('noneSelected');
  }

  function handleClickProject(project){
    setCreatingProject('isEditing');
    setProjectId(project.id);
  }

  return (
    <main className="flex flex-row gap-8 h-screen">
      {/* aside[title="tiet"]{hoi}>div */}
      {/* ul>li*5 */}
      <h1 className="hidden">Project Management React App</h1>
      <Sidebar projects={projects} handleClick={() => {setCreatingProject('isCreating')}}handleClickProject={(project) => handleClickProject(project)} />
      {mainScreen}
    </main>
  );
}

export default App;
