import Input from "../CoreComponent/Input";
import Task from "./Task";
import { useRef, useState, use } from "react";
import { TaskContext } from "../../store/task-context";

export default function TaskOverview({ project }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [taskError, setTaskError] = useState(false);
  const inputRef = useRef();
  const { handleAddTask, handleDeleteTask, taskList } = use(TaskContext);

  function addTask() {
    if (!enteredTask.trim()) {
      setTaskError(true);
      return;
    }
    setTaskError(false);
    handleAddTask(enteredTask);
    setEnteredTask("");
    inputRef.current?.focus();
  }

  return (
    <article>
      <h3 className="text-2xl font-bold text-stone-800">Tasks</h3>
      <div className="flex gap-4">
        <Input
          error={taskError}
          className="w-64"
          onChange={(event) => setEnteredTask(event.target.value)}
          value={enteredTask}
          ref={inputRef}
        ></Input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="bg-stone-100 py-6 px-4 rounded-md">
        {taskList.filter((task) => task.prId === project.id).length > 0 ? (
          <ul>
            {taskList.map((task, index) => {
              if (task.prId === project.id) {
                return (
                  <Task
                    key={task.tId}
                    deleteTask={() => handleDeleteTask(index)}
                  >
                    {task.tName}
                  </Task>
                );
              }
            })}
          </ul>
        ) : (
          <p className="text-stone-500 text-center">
            This project does not have any tasks yet
          </p>
        )}
      </div>
    </article>
  );
}
