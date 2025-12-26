import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onRefresh: () => void;
  lastUpdated: Date;
}

const Header = ({ onRefresh, lastUpdated }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
        <span className="text-xs text-muted-foreground">
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
    </header>
  );
};

export default Header;
