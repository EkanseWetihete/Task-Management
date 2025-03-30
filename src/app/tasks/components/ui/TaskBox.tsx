import React from "react";
import TaskProps from '../interface/TaskProps';
import { useDraggable } from '@dnd-kit/core';

const TaskItem: React.FC<TaskProps> = ({ task, setIsFormOpen }) => {
  const { attributes, listeners, setNodeRef: setDraggableRef, transform } = useDraggable({
    id: task.id, 
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div ref={setDraggableRef} style={style} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow overflow-hidden border border-black border-opacity-20">
      {/* Top Bar */}
      <div {...listeners} {...attributes} className="bg-blue-500 dark:bg-blue-600 px-4 py-1 text-white font-medium flex justify-between items-center shadow cursor-move overflow-hidden">
        <span>Task #{task.id}</span>
        <span className="text-xs bg-blue-400 dark:bg-blue-500 px-2 py-1 rounded-full">
          {((task.min / task.max) * 100).toFixed(0)}% Complete
        </span>
      </div>
      
      {/* Task Content */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-lg">{task.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {task.description || "No description provided"}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10/12">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Days Left: {task.max - task.min}</span>
              <span>{task.min} / {task.max} days</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: `${(task.min / task.max) * 100}%` }}
              ></div>
            </div>
          </div>
          <button type="button" className="text-xs bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1.5 rounded transition-colors" onClick={() => setIsFormOpen(true)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;