// app/tasks/forms.tsx
"use client";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from 'react';
import IOpen from '../components/interface/IOpen';

export default function EditFroms({isOpen, onClose }: IOpen) {
  const [getDate, setDate] = useState<string>('');

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch('/api/dates');
        if (!response.ok) throw new Error('Failed to fetch');
          const { date } = await response.json();
          setDate(date);
      } catch (error) {
          console.error('Error fetching date:', error);
          setDate('Error loading date');
      }
    };
    fetchDate();
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-400 pointer-events-auto w-[600px]">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <form>
          {/* Row 1: Pavadinimas */}
            <h2 className="mb-1 w-1/4">Pavadinimas:</h2>
            <input type="text" placeholder="Pavadinimas" className="border mb-2 p-2 w-full " />

          {/* Row 2: Aprašymas */}
          <h2 className="mb-0 w-1/4">Aprašymas:</h2>
          <input type="text" placeholder="Aprašymas" className="border mb-2 p-2 w-full" />

          {/* Row 3: Progresas */}
          <h2 className="mb-0 w-1/4">Progresas:</h2>
          <div className="mb-2">
            <div className="flex gap-2 mb-1">
              Užduotis 1 -
              <input type="checkbox" className="w-5 h-5"/>
            </div>
            
            <div className="flex gap-2 mb-1">
              Užduotis 2 -
              <input type="checkbox" className="w-5 h-5"/>
            </div>
            <button type="button" className="w-5 h-5 border flex items-center justify-center">
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Row 4: Datos */}
          <h2 className="mb-0 w-1/4">Baigimo data:</h2>
          <div className="flex items-center gap-4 mb-4">
            <input type="date" className="border p-2 w-half" />
            <input type="time" className="border p-2 w-half" />
          </div>

          <h2 className="mb-0 w-1/4">Sukūrimo Data:</h2>
          <h2 className="mb-1 w-1/4 whitespace-nowrap">{getDate}</h2>
          <h2 className="mb-1 w-1/4">Koregavimo Data:</h2>
          <h2 className="mb-1 w-1/4 whitespace-nowrap">{getDate}</h2>

          {/* Row 5: Mygtukai */}
          <div className="flex justify-center gap-6 mt-4">
            <button onClick={onClose} className="bg-green-500 text-white px-6 py-2 rounded">
              Close
            </button>
            <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
