"use client";

import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
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

// Sidebar menyu elementlari
const items = [
  { title: "Home", url: "/home", icon: Home, subItems: [] },
  {
    title: "Admins",
    url: "/admins",
    icon: User,
    subItems: [
      { title: "Admin List", url: "/admins/list" },
      { title: "Add Admin", url: "/admins/add" },
    ],
  },
  {
    title: "Teachers",
    url: "/teachers",
    icon: Users,
    subItems: [
      { title: "Teacher List", url: "/teachers/list" },
      { title: "Add Teacher", url: "/teachers/add" },
    ],
  },
  {
    title: "Students",
    url: "/students",
    icon: Users,
    subItems: [
      { title: "Student List", url: "/students/list" },
      { title: "Add Student", url: "/students/add" },
    ],
  },
  {
    title: "Classes",
    url: "/classes",
    icon: Calendar,
    subItems: [
      { title: "Class List", url: "/classes/list" },
      { title: "Add Class", url: "/classes/add" },
    ],
  },
  {
    title: "Lessons",
    url: "/lessons",
    icon: BookOpen,
    subItems: [
      { title: "Lesson List", url: "/lessons/list" },
      { title: "Add Lesson", url: "/lessons/add" },
    ],
  },
  {
    title: "Exams",
    url: "/exams",
    icon: FileText,
    subItems: [
      { title: "Exam List", url: "/exams/list" },
      { title: "Add Exam", url: "/exams/add" },
    ],
  },
  {
    title: "Assignments",
    url: "/assignments",
    icon: FileText,
    subItems: [
      { title: "Assignment List", url: "/assignments/list" },
      { title: "Add Assignment", url: "/assignments/add" },
    ],
  },
  {
    title: "Results",
    url: "/results",
    icon: BarChart2,
    subItems: [
      { title: "Result List", url: "/results/list" },
      { title: "Add Result", url: "/results/add" },
    ],
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: CheckCircle,
    subItems: [
      { title: "Attendance List", url: "/attendance/list" },
      { title: "Mark Attendance", url: "/attendance/mark" },
    ],
  },
  {
    title: "Events",
    url: "/events",
    icon: Bell,
    subItems: [
      { title: "Event List", url: "/events/list" },
      { title: "Add Event", url: "/events/add" },
    ],
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageCircle,
    subItems: [
      { title: "Inbox", url: "/messages/inbox" },
      { title: "Sent", url: "/messages/sent" },
    ],
  },
  {
    title: "Announcements",
    url: "/announcements",
    icon: Archive,
    subItems: [
      { title: "Announcement List", url: "/announcements/list" },
      { title: "Add Announcement", url: "/announcements/add" },
    ],
  },
  {
    title: "Subjects",
    url: "/subjects",
    icon: BookOpen,
    subItems: [
      { title: "Subject List", url: "/subjects/list" },
      { title: "Add Subject", url: "/subjects/add" },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    subItems: [
      { title: "Profile Settings", url: "/settings/profile" },
      { title: "System Settings", url: "/settings/system" },
    ],
  },
  {
    title: "Logout",
    url: "/logout",
    icon: LogOut,
    subItems: [],
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
    subItems: [],
  },
];

export function AppSidebar() {
  // Ochiladigan elementlar uchun state
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  // Elementni ochish yoki yopish funksiyasi
  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title], // Ochish yoki yopish
    }));
  };

  return (
    <Sidebar className="bg-gray-900 text-white w-64 h-screen">
      <SidebarContent className="bg-slate-800 text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold pt-8 pl-4 pb-8 border-b border-gray-700 text-emerald-500">
            ERP System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <div key={item.title} className="group">
                  {/* Parent Menu Item */}
                  <SidebarMenuItem>
                    <div
                      onClick={() => toggleItem(item.title)}
                      className="flex items-center justify-between w-full p-3 space-x-3 text-sm cursor-pointer hover:bg-gray-800"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </div>
                      {item.subItems.length > 0 && (
                        <span
                          className={`text-gray-400 transform transition-transform duration-300 ${
                            openItems[item.title] ? "rotate-90" : ""
                          }`}
                        >
                          ▶
                        </span>
                      )}
                    </div>
                  </SidebarMenuItem>

                  {/* Sub Items */}
                  {item.subItems.length > 0 && openItems[item.title] && (
                    <div className="pl-8">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="block p-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white rounded"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
