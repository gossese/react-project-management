import Input from "../Input";
import Task from "./Task";
import { useState, useRef } from "react";

export default function TaskOverview({project}) {
    const taskName = useRef();

    const [taskList, setTaskList] = useState([]);

    function handleAddTask() {
        setTaskList(prev => [...prev, {prId : project.id, tName : taskName.current.value}]);
    }

    function deleteTask(indexToDelete) {
        setTaskList(prev => {
            return prev.filter((_, index) => index!== indexToDelete); //only use the index to filter out the task that we want to delete
        });
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
                    if (task.prId === project.id) {
                        return (
                            <Task 
                                key={index} 
                                deleteTask={() => deleteTask(index)}
                                > {task.tName}
                            </Task>
                        );
                    }
                })}
            </div>
        </article>
    )
}