import { useState, useMemo } from "react";
import Header from "@/components/Header";
import CurrencySelector from "@/components/CurrencySelector";
import AmountInput from "@/components/AmountInput";
import CurrencyCard from "@/components/CurrencyCard";
import { currencies, getExchangeRate, mockChanges } from "@/lib/currencies";
import { Helmet } from "react-helmet";

const Index = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [amount, setAmount] = useState("1000");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const selectedCurrency = useMemo(
    () => currencies.find((c) => c.code === baseCurrency) || currencies[0],
    [baseCurrency]
  );

  const otherCurrencies = useMemo(
    () => currencies.filter((c) => c.code !== baseCurrency),
    [baseCurrency]
  );

  const numericAmount = parseFloat(amount) || 0;

  const handleRefresh = () => {
    setLastUpdated(new Date());
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
        <Header onRefresh={handleRefresh} lastUpdated={lastUpdated} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Converter Section */}
          <section className="mb-10">
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Convert from
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Base Currency
                  </label>
                  <CurrencySelector
                    currencies={currencies}
                    value={baseCurrency}
                    onChange={setBaseCurrency}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Amount
                  </label>
                  <AmountInput
                    value={amount}
                    onChange={setAmount}
                    currency={selectedCurrency}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">
                {numericAmount.toLocaleString()} {baseCurrency} equals
              </h2>
              <span className="text-sm text-muted-foreground">
                {otherCurrencies.length} currencies
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {otherCurrencies.map((currency) => (
                <CurrencyCard
                  key={currency.code}
                  code={currency.code}
                  name={currency.name}
                  symbol={currency.symbol}
                  flag={currency.flag}
                  rate={getExchangeRate(baseCurrency, currency.code)}
                  amount={numericAmount}
                  change={mockChanges[currency.code]}
                />
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 py-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Exchange rates are for demonstration purposes. 
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span>
              Rates update in real-time when connected to a live API.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;
