// app/api/tasks/route.tsx
import { NextResponse } from 'next/server';
import tasksData from './data.json'

export async function GET() {
  try {
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const processedTasks = tasksData.tasks.map((task, index) => ({
      ...task,
      min: task.progress.filter(item => item[1] === true).length,
      max: task.progress.length,
      deadline: task.deadline ? new Date(task.deadline) : new Date(),
      creationDate: task.creationDate ? new Date(task.creationDate) : new Date(),
      editingDate: task.editingDate ? new Date(task.editingDate) : new Date()
    }));

    const defaultStatus = tasksData.defaultStatus[0].status || ['Free', 'In progress', 'Done', 'Pending', 'Deleted'];

    return NextResponse.json({
      tasks: processedTasks,
      defaultStatus: defaultStatus
    });
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process tasks' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json();
    const taskIndex = tasksData.tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    tasksData.tasks[taskIndex].status = status;
    tasksData.tasks[taskIndex].editingDate = new Date().toISOString();  // Update editing date

    return NextResponse.json({ task: tasksData.tasks[taskIndex] });

    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}