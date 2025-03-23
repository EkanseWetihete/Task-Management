//app/page.tsx
"use client";
import { useState } from 'react';
import EditForms from "./components/ui/forms";
import Project from "./components/ui/projects";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Project setIsOpen={setIsOpen}/>
      <EditForms isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  );
}


