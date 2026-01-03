import Sidebar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import { useState } from "react";
import { ProjectState } from "./constants/ProjectState";
import { demoProjects } from "./data/DemoProjects";
import TaskContextProvider from "./store/task-context";

function App() {
  const [projects, setProjects] = useState(demoProjects);

  const [uiState, setUiState] = useState(ProjectState.NONE_SELECTED);
  const [selectedProjectId, setProjectId] = useState(null);

  // Projects --------------------------

  function handleSaveNewProject(newProject) {
    setProjects((prev) => [...prev, newProject]);
    setUiState(ProjectState.NONE_SELECTED);
    setProjectId(null);
  }

  function handleStartNewProject() {
    setUiState(ProjectState.IS_CREATING);
    setProjectId(null);
  }

  function handleClickProject(project) {
    setUiState(ProjectState.IS_EDITING);
    setProjectId(project.id);
  }

  function handleDeleteProject() {
    setProjects((prev) => prev.filter((p) => p.id !== selectedProjectId)); //only use the element for filtering
    setUiState(ProjectState.NONE_SELECTED);
    setProjectId(null);
  }

  // Main Screen -------------------------

  function renderMainScreen() {
    switch (uiState) {
      case ProjectState.IS_CREATING:
        return (
          <NewProject
            onAdd={handleSaveNewProject}
            onCancel={() => setUiState(ProjectState.NONE_SELECTED)}
          />
        );
      case ProjectState.IS_EDITING:
        return (
          <Project
            project={projects.find((p) => p.id == selectedProjectId)}
            deleteProject={handleDeleteProject}
          />
        );
      default: // ProjectState.NONE_SELECTED
        return <NoProjectSelected handleClick={handleStartNewProject} />;
    }
  }

  return (

    <TaskContextProvider selectedProjectId={selectedProjectId}>
      <main className="flex flex-row gap-8 h-screen">
        <h1 className="hidden">Project Management React App</h1>
        <Sidebar
          projects={projects}
          handleClick={handleStartNewProject}
          handleClickProject={(project) => handleClickProject(project)}
          selectedProjectId={selectedProjectId}
        />
        {renderMainScreen()}
      </main>
    </TaskContextProvider>
  );
}

export default App;
