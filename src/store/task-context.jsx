import { createContext, useState } from 'react';

export const TaskContext = createContext({
    taskList: [],
    handleAddTask: () => {},
    handleDeleteTask: () => {},
})

export default function TaskContextProvider({children, selectedProjectId}){
  const [taskList, setTaskList] = useState([]);
  
    function handleAddTask(taskName) {
      setTaskList((prev) => [
        ...prev,
        {
          prId: selectedProjectId,
          tName: taskName,
          tId: Math.random(),
        },
      ]);
    }
  
    function handleDeleteTask(indexToDelete) {
      setTaskList((prev) => {
        return prev.filter((_, index) => index !== indexToDelete); //only use the optional parameter 'index' to filter out the task that we want to delete, we're not using the first parameter (the element itself)
      });
    }

    const ctxValue = {
        taskList,
        handleAddTask,
        handleDeleteTask
    }

    return (
        <TaskContext value={ctxValue}>{children}</TaskContext>
    )
}