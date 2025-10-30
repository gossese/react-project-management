
export default function ProjectSidebar({projects, handleClick}) {

    return (
        <article className="bg-black text-white w-1/3 h-screen p-8 flex flex-col m-0 mt-12 rounded-r-lg" >
            <h2 className="my-8 text-center text-2xl uppercase font-bold">Your Projects</h2>
            <button onClick={handleClick} className="bg-stone-800 text-stone-400 rounded-xl p-4 text-xl w-fit">+ Add Project</button>
            {<ul>
                {projects.map((project, index) => {
                    return <li key={index}>{project.title}</li>
                })}
            </ul>}
        </article>
    )
}