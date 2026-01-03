import TaskOverview from "./Task/TaskOverview";

export default function Project({
  deleteProject,
  project,
}) {
  const formattedDate = project?.date
    ? new Date(project.date).toLocaleDateString({
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <article className="w-[35rem] mt-16">
      <header>
        <div className="pb-4 mb-4 flex border-b-2 justify-between capitalize">
          <h1 className="text-stone-600 text-3xl font-semibold ">
            {project.title}
          </h1>
          <button onClick={() => deleteProject(project)}>Delete</button>
        </div>
        <p
          className="mb-4 text-stone-400 font-light text-sm"
          dateTime={project.date}
        >
          {formattedDate}
        </p>
        <p className="my-4 text-stone-800 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <TaskOverview
        project={project}
      ></TaskOverview>
    </article>
  );
}
