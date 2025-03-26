import React from "react";
import TaskProps from '../interface/TaskProps';

const TaskItem: React.FC<TaskProps> = ({ task, setIsFormOpen }) => {
    

  return (
    <li key={task.id} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow border border-gray-400">
      <div className="mb-2">
        <h3 className="font-semibold">Užduotis {task.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Užduoties aprašymas Nr. {task.id + 1}.</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-10/12">
          <span className="text-sm text-gray-500">Days Left: {task.max}</span>
          <span className="block text-sm font-medium">
            Progress bar: {task.min} / {task.max}
          </span>
          <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(task.min / task.max) * 100}%` }}></div>
          </div>
        </div>
        <button onClick={() => setIsFormOpen(true)} className="text-xs bg-yellow-400 text-black px-2 py-1 rounded self-end">
          Edit
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
