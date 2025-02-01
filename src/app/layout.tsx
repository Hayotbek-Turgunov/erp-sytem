import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 bg-[#09090B] h-screen">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
