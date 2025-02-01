import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  User,
  Users,
  Calendar,
  BookOpen,
  FileText,
  BarChart2,
  CheckCircle,
  Bell,
  MessageCircle,
  Archive,
  Settings,
  LogOut,
  Info,
} from "lucide-react";

// Menu items.
const items = [
  { title: "Home", url: "/home", icon: Home },
  { title: "Admins", url: "/admins", icon: User },
  { title: "Teachers", url: "/teachers", icon: Users },
  { title: "Students", url: "/students", icon: Users },
  { title: "Classes", url: "/classes", icon: Calendar },
  { title: "Lessons", url: "/lessons", icon: BookOpen },
  { title: "Exams", url: "/exams", icon: FileText },
  { title: "Assignments", url: "/assignments", icon: FileText },
  { title: "Results", url: "/results", icon: BarChart2 },
  { title: "Attendance", url: "/attendance", icon: CheckCircle },
  { title: "Events", url: "/events", icon: Bell },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Announcements", url: "/announcements", icon: Archive },
  { title: "Subjects", url: "/subjects", icon: BookOpen },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Logout", url: "/logout", icon: LogOut },
  { title: "About", url: "/about", icon: Info },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-gray-900 text-white w-64 h-screen">
      <SidebarContent className="bg-gray-900">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold pt-8 pl-4 pb-8 border-b border-gray-700 text-emerald-500">
            ERP System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center space-x-3 p-3 text-sm text-gray-400 hover:bg-gray-800 hover:text-white rounded"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
