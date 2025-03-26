import React from "react";
import { TaskStatus } from "@/app/components/enum/status";

interface TaskColumnProps {
  status: TaskStatus;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status }) => {
    return (
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{status}</h2>
        <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-500 text-white rounded">Sort Tasks</button>
        </div>
        </div>
    );
};

export default TaskColumn;
