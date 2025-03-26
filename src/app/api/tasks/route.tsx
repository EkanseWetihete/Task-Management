// app/api/tasks/route.tsx
import { NextResponse } from 'next/server';
import { TaskStatus } from '@/app/components/enum/status';

const tasks = [
  { 
    id: 1, 
    title: 'Valgyti', 
    description: 'Pirmoji užduotis',
    progress: [["Uzduoties dalis 1", true], ["Uzduoties dalis 2", true], ["Uzduoties dalis 3", true]],
    status: TaskStatus.Free,
    min: 0,
    max: 1,
    deadline: Date,
    creationDate: Date,
    editingDate: Date
  },
  { 
    id: 2, 
    title: 'Dirbti', 
    description: 'Antroji užduotis',
    progress: [["Uzduoties dalis 1", true], ["Uzduoties dalis 2", false], ["Uzduoties dalis 3", false]],
    status: TaskStatus.Free,
    min: 0,
    max: 1,
    deadline: Date,
    creationDate: Date,
    editingDate: Date
  },
  { 
    id: 3, 
    title: 'Vaikščioti', 
    description: 'Trečioji užduotis',
    progress: [["Uzduoties dalis 1", true], ["Uzduoties dalis 2", false], ["Uzduoties dalis 3", true]],
    status: TaskStatus.InProgress,
    min: 0,
    max: 1,
    deadline: Date,
    creationDate: Date,
    editingDate: Date
  },
];

export async function GET() {
  tasks.forEach(task => {
    task.min = task.progress.filter(item => item[1] === true).length;
    task.max = task.progress.length;
  });

  return NextResponse.json(tasks);
}