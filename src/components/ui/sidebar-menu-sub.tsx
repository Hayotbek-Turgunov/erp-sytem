// Fayl: src/components/ui/sidebar-menu-sub.tsx

export function SidebarMenuSub({ children }: { children: React.ReactNode }) {
  return <div className="ml-4">{children}</div>;
}

export function SidebarMenuSubItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pl-4">{children}</div>;
}

export function SidebarMenuSubButton({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return asChild ? (
    <>{children}</>
  ) : (
    <button className="block text-left">{children}</button>
  );
}
