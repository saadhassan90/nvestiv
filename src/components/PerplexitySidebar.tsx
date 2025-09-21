import { Home, Globe, Layers, Plus, MessageSquare, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Globe, label: "Discover", href: "/discover" },
  { icon: Layers, label: "Spaces", href: "/spaces" },
];

export function PerplexitySidebar() {
  return (
    <div className="sidebar-perplexity">
      {/* Logo/Brand */}
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <span className="text-primary font-bold text-lg">N</span>
      </div>
      
      {/* Navigation Items */}
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn("sidebar-item", isActive && "active")
            }
            title={item.label}
          >
            <Icon className="w-5 h-5" />
          </NavLink>
        );
      })}
      
      {/* Add New Thread */}
      <div className="sidebar-item mt-auto mb-4">
        <Plus className="w-5 h-5" />
      </div>
      
      {/* User Profile */}
      <div className="sidebar-item">
        <User className="w-5 h-5" />
      </div>
    </div>
  );
}