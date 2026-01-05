import { createContext, useState } from "react";
import { demoProjects } from "../data/demoProjects";
import ProjectState from "../constants/ProjectState";

export const ProjectContext = createContext({
  projects: [],
  uiState: ProjectState,
  selectedProjectId: Number,
  handleCancelProject: () => {},
  handleClickNewProject: () => {},
  handleDeleteProject: () => {},
  handleSaveNewProject: () => {},
  handleStartNewProject: () => {},
});

export default function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState(demoProjects);

  const [uiState, setUiState] = useState(ProjectState.NONE_SELECTED);
  const [selectedProjectId, setProjectId] = useState(null);

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

  function handleCancelProject() {
    setUiState(ProjectState.NONE_SELECTED);
  }

  const ctxValue = {
    projects,
    uiState,
    selectedProjectId,
    handleCancelProject,
    handleClickProject,
    handleDeleteProject,
    handleSaveNewProject,
    handleStartNewProject,
  };

  return <ProjectContext value={ctxValue}>{children}</ProjectContext>;
}
