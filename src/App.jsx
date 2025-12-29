import Sidebar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import { useState } from "react";
import { ProjectState } from "./constants/ProjectState";
import { demoProjects } from "./data/DemoProjects";

function App() {
  const [projects, setProjects] = useState(demoProjects);

  const [uiState, setUiState] = useState(ProjectState.NONE_SELECTED);
  const [selectedProjectId, setProjectId] = useState(null);
  const [taskList, setTaskList] = useState([]); // this tasklist could also be merged with the projects, so it would look like: 
  // [projects: [{title, description, id}], tasks: [{prId, tName, tId}]]

  // TASKS --------------------------

  function handleAddTask(taskName) {
    setTaskList((prev) => [
      ...prev,
      {
        prId: selectedProjectId,
        tName: taskName,
        tId: Math.random(),
      },
    ]);
  }

  function handleDeleteTask(indexToDelete) {
    setTaskList((prev) => {
      return prev.filter((_, index) => index !== indexToDelete); //only use the optional parameter 'index' to filter out the task that we want to delete, we're not using the first parameter (the element itself)
    });
  }

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
            handleAddTask={handleAddTask}
            handleDeleteTask={handleDeleteTask}
            taskList={taskList}
          />
        );
      default: // ProjectState.NONE_SELECTED
        return <NoProjectSelected handleClick={handleStartNewProject} />;
    }
  }

  return (
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
  );
}

export default App;
