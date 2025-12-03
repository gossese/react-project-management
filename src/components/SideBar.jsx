import PrimaryButton from "./primaryButton"

export default function ProjectSidebar({projects, handleClick, handleClickProject}) {

    return (
        <aside className="bg-stone-900 text-stone-50 w-1/3 px-8 py-16 flex flex-col mt-12 rounded-r-xl tracking-wide md:w-72" >
            <h2 className="mb-8 uppercase font-semibold md:text-xl">Your Projects</h2>
            <PrimaryButton onClick={handleClick}>+ Add Project</PrimaryButton>
            {<ul className="mt-8">
                {projects.map((project, index) => {
                    return <li className="my-1 p-1 text-stone-400 text-md capitalize font-light rounded hover:text-stone-200 hover:bg-stone-900 hover:cursor-pointer" key={index} onClick={() => handleClickProject(project)}>{project.title}</li>
                })}
            </ul>}
        </aside>
    )
}