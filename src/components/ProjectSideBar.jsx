
export default function ProjectSidebar({projects, handleClick}) {

    return (
        <article className="bg-black text-stone-200 w-1/3 h-screen p-8 flex flex-col xl:items-center m-0 mt-12 rounded-r-lg tracking-wide" >
            <h2 className="my-8 text-2xl uppercase font-semibold line">Your Projects</h2>
            <button onClick={handleClick} className="bg-stone-800 text-stone-400 rounded-lg px-6 py-3 text-xl font-light w-fit  hover:text-white hover:bg-stone-700">+ Add Project</button>
            {<ul className="mt-8">
                {projects.map((project, index) => {
                    return <li className="my-1 p-1 text-stone-400 text-lg capitalize font-light rounded hover:text-stone-200 hover:bg-stone-900" key={index}>{project.title}</li>
                })}
            </ul>}
        </article>
    )
}