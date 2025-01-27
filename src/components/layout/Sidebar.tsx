import { Link } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <ul>
        <li className="mb-4">
          <Link href="/dashboard" className="text-lg hover:underline">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <a href="/students" className="text-lg hover:underline">
            Students
          </a>
        </li>
      </ul>
    </aside>
  );
}
