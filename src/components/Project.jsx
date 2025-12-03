import TaskOverview from "./Task/TaskOverview";

export default function Project({deleteProject, project}){

    return (
        <article className="w-[35rem] mt-24">
            <div className="pb-2 flex justify-between capitalize">
                <h2 className="text-stone-600 text-3xl font-semibold ">{project.title}</h2>
                <button onClick={() => deleteProject(project)}>Delete</button>
            </div>
            <time className="pb-2 text-stone-400 font-light text-sm" dateTime={project.date}>{project.date}</time>
            <p className="py-2 text-stone-800">{project.description}</p>
            <hr className="decoration-gray-500 h-6"></hr>
            <TaskOverview project={project}></TaskOverview>
        </article>
    )
}