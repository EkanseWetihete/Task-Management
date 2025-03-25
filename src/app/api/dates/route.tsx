import { NextResponse } from 'next/server';

export async function GET() {
  const dateTime = new Date();
  
  const date = dateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return NextResponse.json({ date });
}