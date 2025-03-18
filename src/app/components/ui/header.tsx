// app/components/ui/header.tsx
import { Bars3Icon } from '@heroicons/react/24/solid'; // Import the menu icon

export function Header() {
  return (
    <header className="flex justify-center items-center py-4 px-6 bg-blue-600 text-white border-b relative">
      <button className="absolute left-6 hover:bg-blue-700 rounded">
        <Bars3Icon className="h-6 w-6" />
      </button>

      <h1 className="text-2xl font-bold">Užduočių valdymas</h1>

      <select className="p-2 border rounded bg-white text-black absolute right-6">
        <option>Admin</option>
        <option>Editor</option>
        <option>Viewer</option>
      </select>
    </header>
  );
}