import { useRef } from 'react';
import Input from "./Input"

export default function NewProject({onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function saveNewProject(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = dueDate.current.value;

        onAdd({
            title : enteredTitle, 
            description : enteredDescription, 
            date : enteredDate,
            id : Math.random()
        });
    }

    return ( 
        <div className="w-[35rem] mt-16 mr-8 flex flex-col items-stretch">
            <menu className="flex gap-4 items-center justify-end my-4">
                <li><button type='reset' className="text-stone-700 hover:text-stone-950">Cancel</button></li>
                <li><button type='submit' onClick={saveNewProject} className="bg-stone-800 hover:bg-stone-950 text-white rounded px-6 py-2 font-extralight">Save</button></li>
            </menu>
            <h2 className="hidden">New Project</h2>
            <div className="flex flex-col uppercase text-stone-500">
                <Input ref={title} label='Title'></Input>
                <Input ref={description} label='Description' isTextarea></Input>
                <Input ref={dueDate} label='Due' type='date'></Input>
            </div>
        </div>
    )
}