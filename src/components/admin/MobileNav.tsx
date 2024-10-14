"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";
import { navItems } from "@/lib/_data";
import { siteConfig } from "../../../site-config";

export function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <div className="flex gap-4">
            <div className="h-6 w-6 relative">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.title} logo`}
                className="absolute"
                fill
              />
            </div>
            <span className="">{siteConfig.title}</span>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                pathname === item.href
                  ? "bg-muted text-primary"
                  : "text-muted-foreground"
              }`}>
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.count && <span>({item.count})</span>}
              {item.badge && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
