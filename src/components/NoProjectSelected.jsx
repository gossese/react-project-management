import img from '../assets/no-projects.png'
import PrimaryButton from './CoreComponent/PrimaryButton'
import { useContext } from 'react'
import { ProjectContext } from '../store/project-context'

export default function NoProjectSelected() {
    const {handleStartNewProject} = useContext(ProjectContext);

    return (
        <div className="text-center mt-24 w-2/3">
            <img src={img} alt="Empty task list" className="w-16 h-16 object-contain mx-auto"></img>
            <h2 className="font-bold text-stone-500 text-xl my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className='mt-8'>
                <PrimaryButton onClick={handleStartNewProject}>Create new Project</PrimaryButton>
            </p>
        </div>
    )
}