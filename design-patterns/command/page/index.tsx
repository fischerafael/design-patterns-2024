import { useRef, useState } from "react";

export const PageCommand = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = () => {
    const taskMgmt = new TaskManager();

    const task: Task = {
      completed: false,
      id: 1,
      text: "tests",
    };

    const addCommand = new AddTaskCommand(taskMgmt, task);
    addCommand.execute();

    setTasks(taskMgmt.getTasks());
  };

  return <>hi</>;
};
