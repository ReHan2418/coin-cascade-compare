import { TrendingUp, TrendingDown } from "lucide-react";
import { getFlagUrl } from "@/lib/countryFlags";

interface CurrencyCardProps {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  rate: number;
  amount: number;
  change?: number;
}

const CurrencyCard = ({ code, name, symbol, rate, amount, change = 0 }: CurrencyCardProps) => {
  const convertedAmount = amount * rate;
  const isPositive = change > 0;
  const isNegative = change < 0;

  return (
    <div className="group relative overflow-hidden p-4 rounded-xl bg-card border border-border hover:border-border/80 hover:shadow-md transition-all duration-200">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0 bg-repeat" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <img 
              src={getFlagUrl(code)} 
              alt={`${name} flag`}
              className="w-8 h-5 object-cover rounded shadow-sm"
            />
            <div>
              <p className="text-sm font-medium text-foreground">{code}</p>
              <p className="text-xs text-muted-foreground">{name}</p>
            </div>
          </div>
          {change !== 0 && (
            <div className={`flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded ${
              isPositive 
                ? 'text-[hsl(var(--success))] bg-[hsl(var(--success)/0.1)]' 
                : 'text-destructive bg-destructive/10'
            }`}>
              {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span>{isPositive ? '+' : ''}{change.toFixed(2)}%</span>
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
    </div>
  );
};

export default CurrencyCard;
