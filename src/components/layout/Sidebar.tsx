"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
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
  ChevronRight,
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
    child: [],
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
    child: [],
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#09090B] text-white w-64 h-screen">
      <SidebarContent className="bg-[#09090B] h-screen">
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
            <SidebarMenu className="text-xs">
              {items.map((item) => (
                <SidebarItem key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function SidebarItem({ item }) {
  return (
    <Collapsible defaultOpen={false}>
      <CollapsibleTrigger asChild>
        <button className="flex items-center justify-between w-full p-2 hover:bg-gray-800 rounded group">
          <div className="flex items-center">
            <item.icon className="mr-2" />
            <Link href={item.url} className="text-white">
              {item.title}
            </Link>
          </div>
          {item.child.length > 0 && (
            <ChevronRight className="text-xs transition-transform duration-200 ease-in-out transform group-data-[state=open]:rotate-90" />
          )}
        </button>
      </CollapsibleTrigger>

      {Array.isArray(item.child) && item.child.length > 0 && (
        <CollapsibleContent>
          <div className="pl-6 mt-2">
            {item.child.map((subItem) => (
              <SidebarMenuSubItem key={subItem.url}>
                <Link
                  href={subItem.url}
                  className="block text-sm text-gray-300 hover:text-white py-1"
                >
                  {subItem.title}
                </Link>
              </SidebarMenuSubItem>
            ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}
