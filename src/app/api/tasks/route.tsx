// app/api/tasks/route.tsx
import { NextResponse } from 'next/server';

const tasks = [
    { id: 1, title: 'Valgyti', description: 'Pirmoji užduotis' },
    { id: 2, title: 'Dirbti', description: 'Antroji užduotis' },
    { id: 3, title: 'Miegoti', description: 'Trečioji užduotis' },
  ];
  
export async function GET() {
  return NextResponse.json(tasks);
}