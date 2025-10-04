import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "games", href: "/games" },
  { label: "apps", href: "/apps" },
  { label: "settings", href: "/settings" },
  { label: "pr0xy", href: "/pr0xy" },
];

export const Navigation = () => {
  const location = useLocation();
  const activeTab = location.pathname.slice(1) || "home";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-slide-in-top">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-foreground">
              hideout<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-[hsl(var(--nav-background))] border border-[hsl(var(--nav-border))] rounded-full p-1 backdrop-blur-sm shadow-subtle">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={activeTab === item.label ? "nav-active" : "nav"}
                size="nav"
                asChild
              >
                <Link to={item.href} className="relative">
                  {item.label}
                  {activeTab === item.label && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl -z-10" />
                  )}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </nav>
  );
};
