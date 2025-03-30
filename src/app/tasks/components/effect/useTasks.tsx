/* eslint-disable @typescript-eslint/no-unused-vars */
//app/tasks/components/effect/useTasks.tsx
import { useState, useEffect } from "react";
import Task from "@/app/components/interface/ITask";

interface IfilterTasks {
  Task: Task[],
  defaultStatus: string[]
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        
        setTasks(data.tasks);
        
        const defaultStatus = data.defaultStatus; 
        setFilters(defaultStatus);  

      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };
    fetchTasks();
  }, []); 

  return { tasks, filters, setTasks };
};

export default useTasks;
