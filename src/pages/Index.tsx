import { useState, useMemo } from "react";
import Header from "@/components/Header";
import CurrencySelector from "@/components/CurrencySelector";
import AmountInput from "@/components/AmountInput";
import CurrencyCard from "@/components/CurrencyCard";
import { currencies } from "@/lib/currencies";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { Helmet } from "react-helmet";
import { Wifi, WifiOff, Loader2 } from "lucide-react";

const Index = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [amount, setAmount] = useState("1000");

  const { rates, changes, lastUpdated, isLoading, isLive, refresh } = useExchangeRates(baseCurrency);

  const selectedCurrency = useMemo(
    () => currencies.find((c) => c.code === baseCurrency) || currencies[0],
    [baseCurrency]
  );

  const otherCurrencies = useMemo(
    () => currencies.filter((c) => c.code !== baseCurrency),
    [baseCurrency]
  );

  const numericAmount = parseFloat(amount) || 0;

  const getRate = (targetCurrency: string): number => {
    if (rates[targetCurrency]) {
      return rates[targetCurrency];
    }
    return 1;
  };

  return (
    <>
      <Helmet>
        <title>CurrencyCompare - Multi-Currency Exchange Rate Converter</title>
        <meta
          name="description"
          content="Compare exchange rates for USD, EUR, GBP, INR, AED, CAD, AUD and 15+ currencies simultaneously. Real-time currency converter with live rates."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header onRefresh={refresh} lastUpdated={lastUpdated} />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Converter Section */}
          <section className="mb-8">
            <div className="bg-card rounded-2xl p-5 sm:p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Convert from
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Loading...</span>
                    </>
                  ) : isLive ? (
                    <>
                      <Wifi className="w-3 h-3 text-accent" />
                      <span>Live</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="w-3 h-3" />
                      <span>Demo</span>
                    </>
                  )}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <CurrencySelector
                  currencies={currencies}
                  value={baseCurrency}
                  onChange={setBaseCurrency}
                />
                <AmountInput
                  value={amount}
                  onChange={setAmount}
                  currency={selectedCurrency}
                />
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-base font-medium text-foreground">
                <span className="tabular-nums">{numericAmount.toLocaleString()}</span> {baseCurrency}
              </h2>
              <span className="text-xs text-muted-foreground">
                {otherCurrencies.length} currencies
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {otherCurrencies.map((currency) => (
                <CurrencyCard
                  key={currency.code}
                  code={currency.code}
                  name={currency.name}
                  symbol={currency.symbol}
                  flag={currency.flag}
                  rate={getRate(currency.code)}
                  amount={numericAmount}
                  change={changes[currency.code] || 0}
                />
              ))}
            </div>
          </section>
        </main>

        <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs text-center text-muted-foreground">
            {isLive ? "Live rates from ExchangeRate-API" : "Demo rates"}
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;
