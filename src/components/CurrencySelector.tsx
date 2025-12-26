import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Currency } from "@/lib/currencies";

interface CurrencySelectorProps {
  currencies: Currency[];
  value: string;
  onChange: (value: string) => void;
}

const CurrencySelector = ({ currencies, value, onChange }: CurrencySelectorProps) => {
  const selectedCurrency = currencies.find(c => c.code === value);

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-card border-border/50 h-14 text-lg">
        <SelectValue>
          {selectedCurrency && (
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selectedCurrency.flag}</span>
              <span className="font-semibold">{selectedCurrency.code}</span>
              <span className="text-muted-foreground hidden sm:inline">- {selectedCurrency.name}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-card border-border max-h-80">
        {currencies.map((currency) => (
          <SelectItem 
            key={currency.code} 
            value={currency.code}
            className="py-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{currency.flag}</span>
              <span className="font-medium">{currency.code}</span>
              <span className="text-muted-foreground">- {currency.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CurrencySelector;
