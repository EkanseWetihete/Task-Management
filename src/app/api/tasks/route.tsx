// app/api/tasks/route.tsx
import { NextResponse } from 'next/server';

const tasks = [
  { 
    id: 1, 
    title: 'Valgyti', 
    description: 'Pirmoji užduotis',
    progress: [["Uzduoties dalis 1", true], ["Uzduoties dalis 2", true], ["Uzduoties dalis 3", false]],
    progress_min: 0,
    progress_max: 1,
    status: "",
    deadline: Date,
    creationDate: Date,
    editingDate: Date
  },
  { 
    id: 2, 
    title: 'Dirbti', 
    description: 'Antroji užduotis',
    progress: [["Uzduoties dalis 1", true], ["Uzduoties dalis 2", false], ["Uzduoties dalis 3", false]],
    progress_min: 0,
    progress_max: 1,
    status: "",
    deadline: Date,
    creationDate: Date,
    editingDate: Date
  },
  { 
    id: 3, 
    title: 'Vaikščioti', 
    description: 'Trečioji užduotis',
    progress: [["Uzduoties dalis 1", true], ["Uzduoties dalis 2", false], ["Uzduoties dalis 3", false]],
    progress_min: 0,
    progress_max: 1,
    status: "",
    deadline: Date,
    creationDate: Date,
    editingDate: Date
  },
];

export async function GET() {
  
  tasks.forEach(task => {
    task.progress_min = task.progress.filter(item => item[1] === true).length;
    task.progress_max = task.progress.length;
  });


  return NextResponse.json(tasks);
}