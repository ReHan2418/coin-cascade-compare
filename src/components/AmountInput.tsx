import { Input } from "@/components/ui/input";
import { Currency } from "@/lib/currencies";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  currency: Currency;
}

const AmountInput = ({ value, onChange, currency }: AmountInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow only numbers and decimals
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-semibold text-muted-foreground">
        {currency.symbol}
      </div>
      <Input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        placeholder="0.00"
        className="pl-14 h-16 text-2xl font-mono bg-card border-border/50 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
};

export default AmountInput;
