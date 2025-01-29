import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex">
            <AppSidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
