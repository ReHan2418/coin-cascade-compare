import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Newspaper, TrendingUp, TrendingDown, Clock, ExternalLink } from "lucide-react";

const currencyNews = [
  {
    id: 1,
    title: "US Dollar News & Analysis",
    summary: "Latest updates on the US Dollar including Federal Reserve decisions, economic indicators, and forex market analysis.",
    source: "Reuters",
    url: "https://www.reuters.com/markets/currencies/",
    trend: "up",
    currencies: ["USD"],
  },
  {
    id: 2,
    title: "Euro Currency Updates",
    summary: "European Central Bank policy updates, Euro exchange rates, and Eurozone economic news.",
    source: "Financial Times",
    url: "https://www.ft.com/currencies",
    trend: "down",
    currencies: ["EUR"],
  },
  {
    id: 3,
    title: "Forex Market Live News",
    summary: "Real-time currency market news, forex trading insights, and global exchange rate movements.",
    source: "Bloomberg",
    url: "https://www.bloomberg.com/markets/currencies",
    trend: "up",
    currencies: ["USD", "EUR", "GBP"],
  },
  {
    id: 4,
    title: "British Pound Sterling News",
    summary: "GBP exchange rate updates, Bank of England decisions, and UK economic indicators.",
    source: "BBC News",
    url: "https://www.bbc.com/news/topics/c9qdqqkgz27t",
    trend: "up",
    currencies: ["GBP"],
  },
  {
    id: 5,
    title: "Asian Currency Markets",
    summary: "Japanese Yen, Chinese Yuan, and other Asian currency news with regional economic analysis.",
    source: "CNBC",
    url: "https://www.cnbc.com/currencies/",
    trend: "down",
    currencies: ["JPY", "CNY", "INR"],
  },
  {
    id: 6,
    title: "Emerging Market Currencies",
    summary: "Currency news from emerging markets including India, Brazil, South Africa, and Middle East.",
    source: "MarketWatch",
    url: "https://www.marketwatch.com/investing/currencies",
    trend: "up",
    currencies: ["INR", "BRL", "AED"],
  },
];

const CurrencyNews = () => {
  return (
    <>
      <Helmet>
        <title>Currency News - Latest Forex Market Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest currency news, forex market analysis, and exchange rate movements from around the world."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Newspaper className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">Currency News</h1>
          </div>

          <div className="space-y-4">
            {currencyNews.map((news) => (
              <a
                key={news.id}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {news.title}
                      </h2>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {news.summary}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="font-medium">{news.source}</span>
                      <div className="flex items-center gap-1">
                        {news.currencies.map((c) => (
                          <span
                            key={c}
                            className="px-1.5 py-0.5 rounded bg-accent text-accent-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`p-2 rounded-lg ${
                      news.trend === "up"
                        ? "bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))]"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {news.trend === "up" ? (
                      <TrendingUp className="w-5 h-5" />
                    ) : (
                      <TrendingDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CurrencyNews;
