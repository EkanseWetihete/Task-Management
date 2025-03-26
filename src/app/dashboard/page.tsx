"use client";
import { useRouter } from 'next/navigation'

export default function Dashboard() {
    const router = useRouter()

    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Dashboard Content</h1>
            <button type="button" onClick={() => router.push('/tasks')} className="px-5 py-2.5 text-sm font-medium border border-blue-500 text-blue-600 hover:bg-blue-100 hover:border-blue-600 rounded-md"> View Tasks </button>
        </main>
    );
  }
