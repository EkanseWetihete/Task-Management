//app/page.tsx
'use client'

import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/dashboard');
}

/* gonna need to change it for another file
const [isOpen, setIsOpen] = useState(false);

<Project setIsOpen={setIsOpen}/>
<EditForms isOpen={isOpen} onClose={() => setIsOpen(false)}/>
*/