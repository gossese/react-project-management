export default function Task({deleteTask, children}){

    return (
        <div className="flex justify-between p-2">
            <p>{children}</p>
            <button className="hover:text-red-600 focus:outline-none" onClick={deleteTask}>Clear</button>
        </div>
    )
}