// app/tasks/page.tsx
"use client";
import { useState } from 'react';
import EditForms from './forms';
import TaskItem from "./components/ui/TaskBox";
import { TaskStatus } from '../components/enum/status';
import TaskColumn from './components/ui/TaskColumn';
import useTasks from './components/effect/useTasks';

export default function Tasks() {
  const { tasks } = useTasks();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <div className="mb-2 px-3 w-1/2 mx-auto flex gap-2">
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Add Tasks</button>
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Add Tables</button>
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Filter Tables</button>
      </div>
      
      <div className="overflow-x-auto scroll-smooth">
        <div className="flex space-x-6 min-w-max p-4"> 
        {Object.values(TaskStatus).map((status) => (
          <div key={status} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-300 w-80">
            <TaskColumn status={status} />
            <ul className="space-y-3">
              {tasks.filter((task) => task.status === status).map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    setIsFormOpen={setIsFormOpen}
                  />
                ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
      <EditForms isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}