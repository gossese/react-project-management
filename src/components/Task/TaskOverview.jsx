import Input from "../Input";
import Task from "./Task";
import { useRef, useState } from "react";

export default function TaskOverview({
  project,
  handleDeleteTask,
  handleAddTask,
  taskList,
}) {
  const taskName = useRef();
  const [taskError, setTaskError] = useState(false);

  function addTask() {
    if (!taskName.current.value.trim()) {
      setTaskError(true);
      return;
    }
    setTaskError(false);
    handleAddTask(taskName.current.value);
    taskName.current.value = '';
  }

  return (
    <article>
      <h3 className="text-2xl font-bold text-stone-800">Tasks</h3>
      <div className="flex gap-4">
          <Input ref={taskName} error={taskError} className="w-64"></Input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="bg-stone-100 py-6 px-4 rounded-md">
        {taskList.map((task, index) => {
          if (task.prId === project.id) {
            return (
              <Task key={index} deleteTask={() => handleDeleteTask(index)}>
                {" "}
                {task.tName}
              </Task>
            );
          }
        })}
      </div>
    </article>
  );
}
