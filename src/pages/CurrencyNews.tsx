import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Newspaper, TrendingUp, TrendingDown, Clock } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "US Dollar Strengthens Amid Federal Reserve Rate Decision",
    summary: "The Federal Reserve's latest policy meeting has led to increased confidence in the US Dollar, with major currency pairs showing significant movement.",
    source: "Financial Times",
    time: "2 hours ago",
    trend: "up",
    currencies: ["USD", "EUR"],
  },
  {
    id: 2,
    title: "Euro Faces Pressure as ECB Signals Cautious Outlook",
    summary: "European Central Bank officials have indicated a more measured approach to monetary policy, impacting Euro valuations across global markets.",
    source: "Reuters",
    time: "4 hours ago",
    trend: "down",
    currencies: ["EUR", "GBP"],
  },
  {
    id: 3,
    title: "Japanese Yen Hits Multi-Year Low Against Dollar",
    summary: "The Yen continues its decline as Bank of Japan maintains ultra-loose monetary policy while other central banks tighten rates.",
    source: "Bloomberg",
    time: "6 hours ago",
    trend: "down",
    currencies: ["JPY", "USD"],
  },
  {
    id: 4,
    title: "British Pound Rallies on Strong Economic Data",
    summary: "Better-than-expected UK employment figures have boosted Sterling, with markets now pricing in potential rate adjustments.",
    source: "The Guardian",
    time: "8 hours ago",
    trend: "up",
    currencies: ["GBP"],
  },
  {
    id: 5,
    title: "Emerging Market Currencies Show Resilience",
    summary: "Several emerging market currencies including Indian Rupee and Brazilian Real have shown stability despite global volatility.",
    source: "CNBC",
    time: "12 hours ago",
    trend: "up",
    currencies: ["INR", "BRL"],
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
            {mockNews.map((news) => (
              <article
                key={news.id}
                className="p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg font-medium text-foreground mb-2">
                      {news.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3">
                      {news.summary}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{news.source}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {news.time}
                      </span>
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
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CurrencyNews;
