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
      <SelectTrigger className="w-full bg-card border-border h-12">
        <SelectValue>
          {selectedCurrency && (
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{selectedCurrency.flag}</span>
              <span className="font-medium">{selectedCurrency.code}</span>
              <span className="text-muted-foreground text-sm hidden sm:inline">{selectedCurrency.name}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-card border-border max-h-72">
        {currencies.map((currency) => (
          <SelectItem 
            key={currency.code} 
            value={currency.code}
            className="py-2.5 cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">{currency.flag}</span>
              <span className="font-medium">{currency.code}</span>
              <span className="text-muted-foreground text-sm">{currency.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CurrencySelector;
