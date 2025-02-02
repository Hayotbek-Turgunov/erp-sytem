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
    <html lang="en" className="h-full">
      <body className="h-full overflow-auto">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 bg-darkBg p-8 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
