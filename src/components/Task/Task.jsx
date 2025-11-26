export default function Task({children}){

    return (
        <div className="flex justify-between p-2">
            <p>{children}</p>
            <button className="hover:text-red-600 focus:outline-none">Clear</button>
        </div>
    )
}