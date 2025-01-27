import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "ERP System",
  description: "A scalable ERP system for educational centers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="ml-64 p-4 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
