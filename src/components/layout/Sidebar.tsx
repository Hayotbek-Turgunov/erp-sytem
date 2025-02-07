import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import {
  Home,
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
import Link from "next/link";

const items = [
  {
    title: "Analitika",
    url: "/home",
    icon: Home,
    child: [],
  },
  {
    title: "Teachers",
    url: "/teachers",
    icon: Users,
    child: [
      { title: "Add Teacher", url: "/teachers/add" },
      { title: "View Teachers", url: "/teachers/view" },
    ],
  },
  {
    title: "Students",
    url: "/students",
    icon: Users,
    child: [
      { title: "Davomat", url: "/students/davomat" },
      { title: "Talabalar Ro'yxati", url: "/students/list" },
      { title: "Aktiv", url: "/students/aktiv" },
      { title: "Arxiv", url: "/students/arxiv" },
      { title: "Ota-ona", url: "/students/parent" },
    ],
  },
  {
    title: "HR",
    url: "/classes",
    icon: Calendar,
    child: [
      { title: "Ro'llar", url: "/classes/rol" },
      { title: "Hodimlar", url: "/classes/xodim" },
    ],
  },
  {
    title: "Kurslar",
    url: "/lessons",
    icon: BookOpen,
    child: [
      { title: "Add Lesson", url: "/lessons/add" },
      { title: "View Lessons", url: "/lessons/view" },
    ],
  },
  {
    title: "Exams",
    url: "/exams",
    icon: FileText,
    child: [
      { title: "Add Exam", url: "/exams/add" },
      { title: "View Exams", url: "/exams/view" },
    ],
  },
  {
    title: "Assignments",
    url: "/assignments",
    icon: FileText,
    child: [
      { title: "Add Assignment", url: "/assignments/add" },
      { title: "View Assignments", url: "/assignments/view" },
    ],
  },
  {
    title: "Results",
    url: "/results",
    icon: BarChart2,
    child: [{ title: "View Results", url: "/results/view" }],
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: CheckCircle,
    child: [
      { title: "Mark Attendance", url: "/attendance/mark" },
      { title: "View Attendance", url: "/attendance/view" },
    ],
  },
  {
    title: "Events",
    url: "/events",
    icon: Bell,
    child: [
      { title: "Add Event", url: "/events/add" },
      { title: "View Events", url: "/events/view" },
    ],
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageCircle,
    child: [
      { title: "Compose Message", url: "/messages/compose" },
      { title: "Inbox", url: "/messages/inbox" },
    ],
  },
  {
    title: "Announcements",
    url: "/announcements",
    icon: Archive,
    child: [
      { title: "Add Announcement", url: "/announcements/add" },
      { title: "View Announcements", url: "/announcements/view" },
    ],
  },
  {
    title: "Subjects",
    url: "/subjects",
    icon: BookOpen,
    child: [
      { title: "Add Subject", url: "/subjects/add" },
      { title: "View Subjects", url: "/subjects/view" },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    child: [
      { title: "Profile Settings", url: "/settings/profile" },
      { title: "Account Settings", url: "/settings/account" },
    ],
  },
  {
    title: "Logout",
    url: "/logout",
    icon: LogOut,
    child: [], // Logoutda child kerak bo'lmasligi mumkin
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
    child: [], // Aboutda ham child bo'lishi shart emas
  },
];
export function AppSidebar() {
  return (
    <Sidebar className="bg-[#09090B] text-white w-64 h-screen">
      <SidebarContent className="bg-[#09090B] h-screen ">
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold pt-8 pl-3 pb-8 border-b gap-3 border-gray-700 text-white sticky top-0 bg-black z-50">
            <img
              width={40}
              height={40}
              src="/icons/SidebarLogo.svg"
              alt="Sidebar logo"
              className="inline-block"
            />
            <span className="text-white text-sm ml-2">
              School Management System
            </span>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible key={item.title} defaultOpen>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon />
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                  {item.child.length > 0 && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.child.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <Link href={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
