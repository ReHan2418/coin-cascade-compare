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
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg font-medium text-muted-foreground">
        {currency.symbol}
      </div>
      <Input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        placeholder="0.00"
        className="pl-10 h-12 text-lg bg-card border-border tabular-nums"
      />
    </div>
  );
};

export default AmountInput;
