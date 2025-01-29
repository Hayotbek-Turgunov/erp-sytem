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
          <div className="flex w-full">
            <AppSidebar />
            <main className="w-full">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
