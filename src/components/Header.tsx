import { ArrowRightLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onRefresh: () => void;
  lastUpdated: Date;
}

const Header = ({ onRefresh, lastUpdated }: HeaderProps) => {
  return (
    <header className="w-full py-5 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-primary/10">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">CurrencyCompare</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground hidden sm:block">
            Updated {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRefresh}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
