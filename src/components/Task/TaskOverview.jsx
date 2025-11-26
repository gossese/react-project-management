import Input from "../Input";
import Task from "./Task";
import { useState, useRef } from "react";

export default function TaskOverview() {
    const taskName = useRef();

    const [taskList, setTaskList] = useState(["Practice, practice, practice!", "Learn advanced concepts"]);

    function handleAddTask() {
        setTaskList(prev => [...prev, taskName.current.value]);
    }

    return (
        <article>
            <h3 className="text-2xl font-bold text-stone-800">Tasks</h3>
            <div className="flex gap-4">
                <Input ref={taskName} className="w-250px"></Input>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="bg-stone-100 py-6 px-4 rounded-md">
                {taskList.map((task, index) => {
                    return (<Task key={index}>{task}</Task>)
                })}
            </div>
        </article>
    )
}