"use client";

import React from "react";
import {
  Bell,
  Search,
  MessageCircle,
  ChevronDown,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <header className="flex items-center justify-between bg-[#09090B] text-white px-7 py-3 shadow-md sticky top-0 z-50">
      {/* Breadcrumb Section */}
      <div className="hidden md:flex items-center text-sm text-gray-400 space-x-2">
        <Link href="/" className="hover:text-white cursor-pointer">
          Dashboard
        </Link>
        {pathnames.map((value, index) => {
          const href = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={href}>
              <span>{">"}</span>
              {isLast ? (
                <span className="text-white">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              ) : (
                <Link href={href} className="hover:text-white cursor-pointer">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full hover:bg-gray-800"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        <button
          className="p-2 rounded-full hover:bg-gray-800"
          aria-label="Bell"
        >
          <Bell className="w-5 h-5" />
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-800"
          aria-label="Message"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://picsum.photos/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
            aria-label="User img"
          />
          <div className="text-sm">
            <span className="block font-medium">Jack Smith</span>
            <span className="block text-gray-400 text-xs">Super Admin</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <button
          className="p-2 rounded-full hover:bg-gray-800"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
