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

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        <div className="relative z-10">
          <Header onRefresh={refresh} lastUpdated={lastUpdated} />

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Converter Section */}
            <section className="mb-8">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-border shadow-sm">
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
                        <Wifi className="w-3 h-3 text-[hsl(var(--success))]" />
                        <span className="text-[hsl(var(--success))]">Live</span>
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
      </div>
    </>
  );
};

export default Index;
