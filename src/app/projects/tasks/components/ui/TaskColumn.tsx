//app/tasks/components/ui/TaskColumn.tsx
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";

interface TaskColumnProps {
  status: string;
  children?: React.ReactNode;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div ref={setNodeRef} className={`w-full h-full p-4 ${isOver ? "bg-green-200" : "bg-gray-100"}`}>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold border border-gray-500 rounded-full px-4 py-1">
          {status}
        </h2>
          <button className="px-3 py-1 bg-gray-500 text-white rounded flex items-center">
            <BarsArrowDownIcon className="w-5 h-5" />
          </button>
      </div>
      <ul className="space-y-3">{children}</ul> 
    </div>
  );
};

export default TaskColumn;
