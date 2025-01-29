export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-md px-4 py-2 mr-4"
        />
      </div>
      <div className="flex items-center">
        <span className="text-sm text-gray-600 mr-6">17:38 PM</span>
        <span className="text-sm text-gray-600 mr-6">9-sentabr 2022</span>
      </div>
    </nav>
  );
}
