import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import * as Icons from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import appsData from "@/data/apps.json";

type App = {
  name: string;
  icon: string;
  category: string;
  description: string;
  link: string;
};

const apps: App[] = appsData;

const Apps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredApps = apps.filter((app) => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || app.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const allCategories = Array.from(new Set(apps.map(app => app.category)));

  const handleAppClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 px-4 sm:px-6 pb-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground">Apps</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Access your favorite apps and services right from your browser.
          </p>

          {/* Search and Filters */}
          <div className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search apps..." 
                className="pl-10 bg-card border-border transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 bg-card border-border">
                  <Filter className="w-4 h-4" />
                  {categoryFilter === "all" ? "Category" : categoryFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border z-50">
                <DropdownMenuItem onClick={() => setCategoryFilter("all")}>
                  All
                </DropdownMenuItem>
                {allCategories.map((category) => (
                  <DropdownMenuItem key={category} onClick={() => setCategoryFilter(category)}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredApps.map((app, index) => {
            const IconComponent = (Icons as any)[app.icon] || Icons.AppWindow;
            
            return (
              <Card
                key={app.name}
                onClick={() => handleAppClick(app.link)}
                className="group p-6 bg-gradient-to-br from-card to-card/50 border-border hover:border-border/80 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary/90 transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{app.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {app.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* No results */}
        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No apps found matching your search</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Apps;
