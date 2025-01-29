import { cookies } from "next/headers";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/Sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Cookie orqali sidebarning default ochiq yoki yopiq holatini o'qish
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en">
      <body>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <SidebarTrigger />
          <main>{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
