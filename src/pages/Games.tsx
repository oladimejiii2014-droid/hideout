import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Gamepad2 } from "lucide-react";

const games = [
  { id: 1, name: "Game 1", category: "Action" },
  { id: 2, name: "Game 2", category: "Puzzle" },
  { id: 3, name: "Game 3", category: "Strategy" },
  { id: 4, name: "Game 4", category: "Racing" },
  { id: 5, name: "Game 5", category: "Sports" },
  { id: 6, name: "Game 6", category: "Adventure" },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 px-6 pb-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold">
            <span className="text-foreground">Games</span>
            <span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Play unblocked games anywhere, anytime. No restrictions, just fun.
          </p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search games..." 
              className="pl-10 bg-card border-border focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Card
              key={game.id}
              className="group p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Game Icon Placeholder */}
              <div className="aspect-square mb-4 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Gamepad2 className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Game Info */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {game.name}
              </h3>
              <p className="text-sm text-muted-foreground">{game.category}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Games;
