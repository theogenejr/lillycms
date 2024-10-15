export const user = {
  id: 1,
  name: "Admin User",
  email: "admin@example.com",
  isAdmin: FinalizationRegistry,
};

import {
  Home,
  FileText,
  Plus,
  Tags,
  Users,
  MessageCircle,
  Settings,
} from "lucide-react";

export const navItems = [
  { href: "/admin", icon: Home, label: "Dashboard" },
  { href: "/admin/posts", icon: FileText, label: "Posts", count: "13" },
  { href: "/admin/new-post", icon: Plus, label: "New Post" },
  { href: "/admin/categories", icon: Tags, label: "Categories" },
  { href: "/admin/users", icon: Users, label: "Users" },
  {
    href: "/admin/comments",
    icon: MessageCircle,
    label: "Comments",
    badge: "2",
  },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];
