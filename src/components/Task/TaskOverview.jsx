import Input from "../Input";
import Task from "./Task";
import { useRef } from "react";

export default function TaskOverview({project, handleDeleteTask, handleAddTask, taskList}) {
    const taskName = useRef();

    function addTask(){
        handleAddTask(taskName.current.value)
    }

    return (
        <article>
            <h3 className="text-2xl font-bold text-stone-800">Tasks</h3>
            <div className="flex gap-4">
                <Input ref={taskName} className="w-250px"></Input>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="bg-stone-100 py-6 px-4 rounded-md">
                {taskList.map((task, index) => {
                    if (task.prId === project.id) {
                        return (
                            <Task 
                                key={index} 
                                deleteTask={() => handleDeleteTask(index)}
                                > {task.tName}
                            </Task>
                        );
                    }
                })}
            </div>
        </article>
    )
}