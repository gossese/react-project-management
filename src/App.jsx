import ProjectSidebar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import { useState, useRef } from "react";

function App() {
  const project = useRef();

  const [projects, setProjects] = useState([{ title: 'first title', description: 'first descriptioin' }, { title: 'second title', description: 'second descriptioin' }]);
  const [creatingProject, setCreatingProject] = useState(false);

  function handleNewProject() {
    const form = project.current;
    if (!form) return;

    const formData = new FormData(form);
    const newProject = Object.fromEntries(formData.entries()); // { title: "...", description: "...", date: "..."}

    console.log(newProject);
    setProjects(prev => [...prev, newProject]);
    setCreatingProject(false);
  }

  return (
    <div className="flex flex-row gap-8">
      <h1 className="my-8 text-center text-5xl font-bold hidden">Learning React</h1>
      <ProjectSidebar projects={projects} handleClick={() => setCreatingProject(true)}></ProjectSidebar>
      {creatingProject && <NewProject ref={project} onSubmit={handleNewProject}></NewProject>}
    </div>
  );
}

export default App;
