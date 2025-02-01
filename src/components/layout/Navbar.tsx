import React from "react";
import {
  Bell,
  Search,
  MessageCircle,
  ChevronDown,
  Settings,
} from "lucide-react";

export function Navbar() {
  return (
    <header className="flex items-center justify-between bg-[#09090B] text-white px-7 py-3 shadow-md sticky top-0 z-50">
      <div className="hidden md:flex items-center text-sm text-gray-400 space-x-2">
        <span className="hover:text-white cursor-pointer">Dashboard</span>
        <span>{">"}</span>
        <span className="hover:text-white cursor-pointer">List</span>
        <span>{">"}</span>
        <span className="text-white">Students</span>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <MessageCircle className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://picsum.photos/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <span className="block font-medium">Jack Smith</span>
            <span className="block text-gray-400 text-xs">Super Admin</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
