import PrimaryButton from "./CoreComponent/PrimaryButton";
import { ProjectContext } from "../store/project-context";
import { use } from 'react';


export default function ProjectSidebar() {
  const { projects, handleClickProject, handleStartNewProject, selectedProjectId } = use(ProjectContext);

  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 px-8 py-16 flex flex-col mt-12 rounded-r-xl tracking-wide md:w-72">
      <h2 className="mb-8 uppercase font-semibold md:text-xl">Your Projects</h2>
      <PrimaryButton onClick={handleStartNewProject}>+ Add Project</PrimaryButton>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "my-1 p-2 text-md capitalize font-light rounded hover:text-stone-200 hover:bg-stone-900 hover:cursor-pointer "

          if (project.id === selectedProjectId){
            cssClasses += 'bg-stone-800 text-stone-200';
          } else {
            cssClasses += 'text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => handleClickProject(project)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
