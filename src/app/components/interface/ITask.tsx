//app/api/interface/ITask.tsx
export default interface Task {
  id: number;
  title: string;
  description: string;
  progress: (string | boolean)[][];
  status: string;  // Now directly on the Task object
  min: number;
  max: number;
  deadline: string;
  creationDate: string;
  editingDate: string;
}
