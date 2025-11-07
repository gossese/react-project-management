import Input from "./Input"

export default function NewProject({onSubmit, ref}){

    return ( 
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} ref={ref} className="w-1/2 self-center flex flex-col items-stretch">
            <div className="flex flex-row gap-4 self-end text-md p-4">
                <button type='reset'>Cancel</button>
                <button type='submit' className="bg-black text-white rounded px-6 py-2 font-extralight
">Save</button>
            </div>
            <h2 className="hidden">New Project</h2>
            <fieldset className="flex flex-col uppercase text-stone-600">
                <Input label='Title'></Input>
                <Input label='Description' textarea={true}></Input>
                <Input label='Due' type='date'></Input>
            </fieldset>
        </form>
    )
}