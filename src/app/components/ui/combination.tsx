// app/components/ui/combination.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useRouter, usePathname } from "next/navigation";


export default function Combination() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('lt');

  const title = { // testing purposes
    lt: "Užduočių valdymas",
    en: "Task Management",
    ru: "Управление задачами"
  };
  
  const handleMenuNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('language', language);

  }, [language]);
  
  return (
    <div>
      <header className="flex justify-center items-center py-2 px-6 bg-blue-600 text-white border-b relative">
        <button onClick={() => setIsOpen(!isOpen)} className="absolute left-6 hover:bg-blue-700 rounded">
          <Bars3Icon className="h-6 w-6" />
        </button>

        <h1 className="text-2xl font-bold">{title[language as keyof typeof title]}</h1>

         {/* Language selector */}
        <div className="flex items-center absolute right-30 gap-4">
          <div className="flex gap-2 bg-blue-700/30 p-1 rounded-lg">
            <button onClick={() => setLanguage('lt')} className={`p-1 rounded-md hover:bg-blue-500 transition-colors ${language === 'lt' ? 'bg-blue-500' : ''}`} aria-label="Lietuvių kalba">
              <ReactCountryFlag countryCode="LT" svg className="w-5 h-5 object-contain"aria-hidden="true"/>
            </button>
            
            <button onClick={() => setLanguage('en')} className={`p-1 rounded-md hover:bg-blue-500 transition-colors ${language === 'en' ? 'bg-blue-500' : ''}`} aria-label="English language">
              <ReactCountryFlag countryCode="US" svg className="w-5 h-5 object-contain"aria-hidden="true"/>
            </button>
            
            <button onClick={() => setLanguage('ru')} className={`p-1 rounded-md hover:bg-blue-500 transition-colors ${language === 'ru' ? 'bg-blue-500' : ''}`} aria-label="Русский язык">
              <ReactCountryFlag countryCode="RU" svg className="w-5 h-5 object-contain"aria-hidden="true"/>
            </button>
          </div>
        </div>

        <select className="p-2 border rounded bg-white text-black absolute right-6">
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
      </header>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        ></div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-300 p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">✖</button>
          </div>

          <ul className="space-y-3">
            <li>
              <button onClick={() => handleMenuNavigation("/dashboard")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/dashboard" ? "bg-blue-50 text-blue-600" : ""}`}> Dashboard </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/projects")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/projects" ? "bg-blue-50 text-blue-600" : ""}`}> Task Management </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/projects")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/projects" ? "bg-blue-50 text-blue-600" : ""}`}> __Projects </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/projects/tasks")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/projects/tasks" ? "bg-blue-50 text-blue-600" : ""}`}> ____Tasks </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/timeline")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/timeline" ? "bg-blue-50 text-blue-600" : ""}`}> ____Timeline </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/calendar")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/calendar" ? "bg-blue-50 text-blue-600" : ""}`}> ____Calendar </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/audit_log")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/audit_log" ? "bg-blue-50 text-blue-600" : ""}`}> ____Audit Log </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/teams")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/teams" ? "bg-blue-50 text-blue-600" : ""}`}> Teams </button>
            </li>
            <li>
              <button onClick={() => handleMenuNavigation("/chat")} className={`block w-full text-left p-2 hover:bg-gray-100 rounded ${pathname === "/chat" ? "bg-blue-50 text-blue-600" : ""}`}> Chat </button>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}