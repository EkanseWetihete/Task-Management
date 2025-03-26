type IProgress = [string, number, number];

export default interface Task {
    id: number;
    title: string;
    description: string;
    progress: IProgress[];
    status: string;
    deadline: Date;
    creationDate: Date;
    editingDate: Date;
}