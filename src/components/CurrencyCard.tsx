import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CurrencyCardProps {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  rate: number;
  amount: number;
  change?: number;
}

const CurrencyCard = ({ code, name, symbol, flag, rate, amount, change = 0 }: CurrencyCardProps) => {
  const convertedAmount = amount * rate;
  const isPositive = change >= 0;

  return (
    <Card className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{flag}</span>
          <div>
            <h3 className="font-semibold text-foreground">{code}</h3>
            <p className="text-sm text-muted-foreground">{name}</p>
          </div>
        </div>
        {change !== 0 && (
          <div className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${
            isPositive 
              ? 'bg-accent/10 text-accent' 
              : 'bg-destructive/10 text-destructive'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span className="font-medium">{Math.abs(change).toFixed(2)}%</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl font-bold font-mono text-foreground">
          {symbol}{convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className="text-xs text-muted-foreground">
          1 = {symbol}{rate.toFixed(4)}
        </p>
      </div>
    </Card>
  );
};

export default CurrencyCard;
