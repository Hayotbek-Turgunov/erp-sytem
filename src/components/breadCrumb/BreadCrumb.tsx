"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-300 hover:underline">
            Dashboard
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-gray-500">›</span>
              {isLast ? (
                <span className="text-white font-bold">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              ) : (
                <Link href={href} className="text-gray-300 hover:underline">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
