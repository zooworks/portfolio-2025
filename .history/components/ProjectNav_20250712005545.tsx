'use client';
import Link from 'next/link';

const sections = [
  'Introduction',
  'Background',
  'Problem',
  'Outcome',
  'Impact',
  'Research',
  'Iteration',
  'Takeaway',
];

export default function ProjectNav() {
  return (
    <nav className="hidden lg:block fixed left-10 top-40 bg-gray-100 p-6 rounded-xl shadow-md space-y-6">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          className="block text-gray-700 hover:text-blue-500 font-medium"
        >
          {section}
        </a>
      ))}
    </nav>
  );
}
