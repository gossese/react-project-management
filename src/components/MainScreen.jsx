import { use } from "react";
import { ProjectContext } from "../store/project-context";
import ProjectState from "../constants/ProjectState"
import NoProjectSelected from "./NoProjectSelected"
import NewProject from "./NewProject";
import Project from "./Project";

export default function MainScreen(){
      const projectContext = use(ProjectContext);
    
      function renderMainScreen() {
        switch (projectContext.uiState) {
          case ProjectState.IS_CREATING:
            return (
              <NewProject/>
            );
          case ProjectState.IS_EDITING:
            return (
              <Project/>
            );
          default: // ProjectState.NONE_SELECTED
            return <NoProjectSelected/>;
        }
      }
    
      return renderMainScreen();
}