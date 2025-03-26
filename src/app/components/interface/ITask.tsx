import { TaskStatus } from '@/app/components/enum/status';

type IProgress = [string, number, number];

export default interface Task {
    id: number;
    title: string;
    description: string;
    progress: IProgress[];
    status: TaskStatus;
    min: number;
    max: number;
    deadline: Date;
    creationDate: Date;
    editingDate: Date;
}