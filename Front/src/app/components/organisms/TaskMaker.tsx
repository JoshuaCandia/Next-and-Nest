"use client";

import { useState, useEffect } from "react";
import { Task } from "@/types/types";
import TaskForm from "../molecules/TaskForm";
import TaskViewer from "../molecules/TaskViewer";
const TaskMaker = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [shouldReloadTasks, setShouldReloadTasks] = useState<boolean>(false);

  useEffect(() => {
    const loadTasks = async () => {
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      setTasks(data);
      setShouldReloadTasks(false);
    };

    if (shouldReloadTasks || tasks.length === 0) {
      loadTasks();
    }
  }, [shouldReloadTasks, tasks]);

  return (
    <div>
      <TaskForm setTasks={setTasks} />
      <TaskViewer setShouldReloadTasks={setShouldReloadTasks} tasks={tasks} />
    </div>
  );
};

export default TaskMaker;
