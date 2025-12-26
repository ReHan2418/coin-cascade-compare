export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export const currencies: Currency[] = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$", flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", symbol: "$", flag: "🇦🇺" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF", flag: "🇨🇭" },
  { code: "SGD", name: "Singapore Dollar", symbol: "$", flag: "🇸🇬" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "$", flag: "🇳🇿" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "$", flag: "🇭🇰" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr", flag: "🇸🇪" },
  { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "🇰🇷" },
  { code: "MXN", name: "Mexican Peso", symbol: "$", flag: "🇲🇽" },
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "🇿🇦" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  { code: "THB", name: "Thai Baht", symbol: "฿", flag: "🇹🇭" },
  { code: "SAR", name: "Saudi Riyal", symbol: "﷼", flag: "🇸🇦" },
  { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك", flag: "🇰🇼" },
];

// Mock exchange rates (relative to USD)
export const mockRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.12,
  AED: 3.67,
  CAD: 1.36,
  AUD: 1.53,
  JPY: 149.50,
  CNY: 7.24,
  CHF: 0.88,
  SGD: 1.34,
  NZD: 1.63,
  HKD: 7.82,
  SEK: 10.42,
  KRW: 1298.50,
  MXN: 17.15,
  ZAR: 18.65,
  BRL: 4.97,
  THB: 35.20,
  SAR: 3.75,
  KWD: 0.31,
};

// Mock 24h changes (percentage)
export const mockChanges: Record<string, number> = {
  USD: 0,
  EUR: -0.15,
  GBP: 0.22,
  INR: -0.45,
  AED: 0.01,
  CAD: 0.18,
  AUD: -0.32,
  JPY: 0.55,
  CNY: -0.08,
  CHF: 0.12,
  SGD: 0.05,
  NZD: -0.28,
  HKD: 0.02,
  SEK: -0.41,
  KRW: 0.38,
  MXN: -0.25,
  ZAR: 0.65,
  BRL: -0.52,
  THB: 0.15,
  SAR: 0.00,
  KWD: 0.08,
};

export const getExchangeRate = (from: string, to: string): number => {
  const fromRate = mockRates[from] || 1;
  const toRate = mockRates[to] || 1;
  return toRate / fromRate;
};
