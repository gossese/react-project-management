import Sidebar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import { useState } from "react";
import { removeFromArray } from "./util";

function App() {
  const [projects, setProjects] = useState([{ title: 'learning React', description: 'first descriptioin', id: 0.5 }, { title: 'second title', description: 'second descriptioin', id: 0.6, date: 11 - 11 - 2025 }]);

  const ProjectState = Object.freeze({ //immutable enum 
    NONE_SELECTED: 'noneSelected',
    IS_CREATING: 'isCreating',
    IS_EDITING: 'isEditing'
  });

  const [creatingProject, setCreatingProject] = useState(ProjectState.NONE_SELECTED);
  const [selectedProjectId, setProjectId] = useState(null);

  function handleSaveNewProject(newProject) {
    setProjects(prev => [...prev, newProject]);
    setCreatingProject(ProjectState.NONE_SELECTED);
  }

  function handleClickProject(project) {
    setCreatingProject(ProjectState.IS_EDITING);
    setProjectId(project.id);
  }

  function handleDeleteProject(project) {
    setProjects(prev => removeFromArray([...prev], p => p.id === project.id))
    setCreatingProject(ProjectState.NONE_SELECTED);
  }

  let mainScreen;

  if (creatingProject === ProjectState.IS_CREATING) {
    mainScreen = <NewProject onAdd={handleSaveNewProject} onCancel={() => setCreatingProject(ProjectState.NONE_SELECTED)} />
  }
  else if (creatingProject === ProjectState.IS_EDITING) {
    mainScreen = <Project project={projects.find((p) => p.id == selectedProjectId)} deleteProject={handleDeleteProject}></Project>
  } else {
    mainScreen = <NoProjectSelected handleClick={() => setCreatingProject(ProjectState.IS_CREATING)} />
  }

  return (
    <main className="flex flex-row gap-8 h-screen">
      {/* aside[title="tiet"]{hoi}>div */}
      {/* ul>li*5 */}
      <h1 className="hidden">Project Management React App</h1>
      <Sidebar projects={projects} handleClick={() => { setCreatingProject(ProjectState.IS_CREATING) }} handleClickProject={(project) => handleClickProject(project)} />
      {mainScreen}
    </main>
  );
}

export default App;
