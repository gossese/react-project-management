import Sidebar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";

function App() {

  const [projects, setProjects] = useState([{ title: 'learning React', description: 'first descriptioin' }, { title: 'second title', description: 'second descriptioin' }]);
  const [creatingProject, setCreatingProject] = useState(false);

  function handleSaveNewProject(newProject) {
    setProjects(prev => [...prev, newProject]);
    setCreatingProject(false);
  }

  return (
    <main className="flex flex-row gap-8 h-screen">
      <h1 className="hidden">Project Management React App</h1>
      <Sidebar projects={projects} handleClick={() => setCreatingProject(true)} />
      {creatingProject ?
        <NewProject onAdd={handleSaveNewProject} />
        :
        <NoProjectSelected handleClick={() => setCreatingProject(true)} />
      }
    </main>
  );
}

export default App;
