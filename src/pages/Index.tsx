import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative flex items-center justify-center">
      {/* Background gradient glow - increased size to prevent cutoff */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-glow opacity-50 animate-glow-pulse -z-10" />
      
      <Navigation />

      {/* Main Content */}
      <main className="relative text-center space-y-12 animate-fade-in px-6 w-full max-w-3xl">
        {/* Big Hideout Text with Glow */}
        <div className="relative">
          {/* Glowing green background - increased size */}
          <div className="absolute inset-0 bg-primary/30 blur-[120px] animate-glow-pulse scale-[2]" />
          
          <h1 className="text-9xl md:text-[12rem] font-bold tracking-tight relative">
            <span className="text-foreground">Hideout</span>
            <span className="text-primary">.</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
          <Input 
            placeholder="search anything" 
            className="w-full h-16 pl-16 pr-6 text-lg bg-card border-border focus:border-primary transition-colors rounded-2xl"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
