// app/tasks/page.tsx
"use client";
import { useState } from 'react';
import EditForms from './forms';
import TaskItem from "./components/ui/TaskBox";
import TaskColumn from './components/ui/TaskColumn';
import useTasks from './components/effect/useTasks';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

export default function Tasks() {
  const { tasks, filters, setTasks} = useTasks();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over) {
      const updatedTask = {
        id: active.id,
        status: over.id as string,
      };

      try {
        const response = await fetch('/api/tasks', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        });

        if (response.ok) {
          const updatedTaskData = await response.json();
          console.log('Task updated:', updatedTaskData);

          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task.id === updatedTask.id ? { ...task, status: updatedTask.status } : task
            )
          );
        } else {
          const errorResponse = await response.json();
          console.error('Failed to update task:', errorResponse);
        }
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  return (
    <div>
      <div className="mb-2 px-3 w-1/2 mx-auto flex gap-2">
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Add Tasks</button>
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Add Tables</button>
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Filter Tables</button>
      </div>
      
      <div className="overflow-x-auto scroll-smooth">
        <DndContext onDragEnd={handleDragEnd}>  {/* Add the handleDragEnd here */}
          <div className="flex space-x-6 min-w-max p-4 min-h-[500px]"> 
          {filters.map((status) => (
            <div key={status} className="bg-white mb-4 dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-300 w-80">
              <TaskColumn key={status} status={status}>
                  {tasks.filter((task) => task.status === status).map((task) => (
                      <TaskItem key={task.id} task={task} setIsFormOpen={setIsFormOpen} />
                    ))}
              </TaskColumn>
            </div>
          ))}
          </div>
        </DndContext>
      </div>
      <EditForms isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
