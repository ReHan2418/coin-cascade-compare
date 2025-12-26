import { TrendingUp, TrendingDown } from "lucide-react";

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
    <div className="group p-4 rounded-xl bg-card border border-border hover:border-border/80 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">{flag}</span>
          <div>
            <p className="text-sm font-medium text-foreground">{code}</p>
            <p className="text-xs text-muted-foreground">{name}</p>
          </div>
        </div>
        {change !== 0 && (
          <div className={`flex items-center gap-0.5 text-xs ${
            isPositive ? 'text-accent' : 'text-destructive'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{Math.abs(change).toFixed(2)}%</span>
          </div>
        )}
      </div>
      
      <p className="text-xl font-semibold text-foreground tabular-nums">
        {symbol}{convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        1 = {symbol}{rate.toFixed(4)}
      </p>
    </div>
  );
};

export default CurrencyCard;
