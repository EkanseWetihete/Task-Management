// app/components/header.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon } from '@heroicons/react/24/solid'; // Import the menu icon

export default function Combination() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>("dashboard"); // State to track selected page

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (page: string) => {
    setSelectedPage(page); // Update selected page when menu item is clicked
    setIsOpen(false); // Close the menu after selection
  };

  return (
    <>
      <header className="flex justify-center items-center py-4 px-6 bg-blue-600 text-white border-b relative">
        <button onClick={handleToggle} className="absolute left-6 hover:bg-blue-700 rounded">
          <Bars3Icon className="h-6 w-6" />
        </button>

        <h1 className="text-2xl font-bold">Užduočių valdymas</h1>

        <select className="p-2 border rounded bg-white text-black absolute right-6">
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
      </header>

      <div className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
          onClick={handleClose}
        ></div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-300 p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-black">✖</button>
          </div>

          <ul className="space-y-3">
            <li>
              <a 
                href="#" 
                className="block p-2 hover:bg-gray-100 rounded"
                onClick={() => handleMenuClick("dashboard")}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block p-2 hover:bg-gray-100 rounded"
                onClick={() => handleMenuClick("projects")}
              >
                Projects
              </a>
            </li>
           
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Tasks</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Board</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">List</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Calendar</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Teams</a></li>
          </ul>
        </motion.div>
      </div>

      <div className="p-6">
        {selectedPage === "dashboard" && (
          <div>
            <h2 className="text-xl font-bold">Dashboard</h2>
            <p>This is the content for the Dashboard page.</p>
          </div>
        )}
        {selectedPage === "projects" && (
          <div>
            <h2 className="text-xl font-bold">Projects Page</h2>
            <p>This is the content for the Projects page.</p>
          </div>
        )}
      </div>
    </>
  );
}
