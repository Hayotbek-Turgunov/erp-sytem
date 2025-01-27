import { Link } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ERP System</h1>
        <div>
          <Link href="/dashboard" className="mr-4">
            Dashboard
          </Link>
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  );
}
