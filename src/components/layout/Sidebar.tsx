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
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import {
  Home,
  User,
  GraduationCap,
  Users,
  Calendar,
  BookOpen,
  FileText,
  BarChart2,
  CheckCircle,
  Bell,
  MessageCircle,
  Archive,
} from "lucide-react";

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
    icon: GraduationCap,
    subItems: [
      { title: "Teacher List", url: "/teachers/list" },
      { title: "Add Teacher", url: "/teachers/add" },
    ],
  },
  {
    title: "Students",
    url: "/students",
    icon: User,
    subItems: [
      { title: "Student List", url: "/students/list" },
      { title: "Add Student", url: "/students/add" },
    ],
  },
  {
    title: "Parents",
    url: "/parents",
    icon: Users,
    subItems: [
      { title: "Parent List", url: "/parents/list" },
      { title: "Add Parent", url: "/parents/add" },
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
      { title: "Schedule Exam", url: "/exams/schedule" },
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
      { title: "View Results", url: "/results/view" },
      { title: "Generate Report", url: "/results/report" },
    ],
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: CheckCircle,
    subItems: [
      { title: "View Attendance", url: "/attendance/view" },
      { title: "Mark Attendance", url: "/attendance/mark" },
    ],
  },
  {
    title: "Events",
    url: "/events",
    icon: Calendar,
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
    icon: Bell,
    subItems: [
      { title: "Announcement List", url: "/announcements/list" },
      { title: "Add Announcement", url: "/announcements/add" },
    ],
  },
  {
    title: "Subjects",
    url: "/subjects",
    icon: Archive,
    subItems: [
      { title: "Subject List", url: "/subjects/list" },
      { title: "Add Subject", url: "/subjects/add" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-gray-900 text-white w-64 h-screen">
      <SidebarContent className="bg-slate-800">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold pt-8 pl-3 pb-8 border-b border-gray-700 text-green-200">
            ERP System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible key={item.title} className="group">
                  {/* Parent Menu Item */}
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <div className="flex items-center justify-between w-full p-3 space-x-3 text-sm cursor-pointer hover:bg-gray-800 hover:text-white">
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                          </div>
                          {item.subItems.length > 0 && (
                            <span className="text-gray-400 group-open:rotate-90 transition-transform">
                              ▶
                            </span>
                          )}
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>

                  {/* Sub Items */}
                  {item.subItems.length > 0 && (
                    <CollapsibleContent>
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
