import { ArrowRightLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onRefresh: () => void;
  lastUpdated: Date;
}

const Header = ({ onRefresh, lastUpdated }: HeaderProps) => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10">
            <ArrowRightLeft className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">CurrencyCompare</h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Real-time multi-currency converter</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-muted-foreground">Last updated</p>
            <p className="text-sm font-medium text-foreground">
              {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={onRefresh}
            className="shrink-0"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
