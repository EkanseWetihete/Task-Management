import Task from "@/app/components/interface/ITask";

export default interface TaskProps {
    task: Task;
    setIsFormOpen: (open: boolean) => void;
  }