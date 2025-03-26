import { useState, useEffect } from "react";
import Task from "@/app/components/interface/ITask";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [randomNumbers1, setRandomNumbers1] = useState<number[]>([]);
  const [randomNumbers2, setRandomNumbers2] = useState<number[]>([]);
  
  useEffect(() => {
    const nums1 = [];
    const nums2 = [];
    for (let i = 0; i < 12; i++) {
      nums1.push(getRandomNumber(1, 5));
      nums2.push(getRandomNumber(5, 10));
    }
    setRandomNumbers1(nums1);
    setRandomNumbers2(nums2);
  }, []); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };
    fetchTasks();
  }, []); 

  return { tasks, randomNumbers1, randomNumbers2, setTasks };
};

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default useTasks;
