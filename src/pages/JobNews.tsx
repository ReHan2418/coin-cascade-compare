import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Briefcase, MapPin, Clock, Building2 } from "lucide-react";

const mockJobs = [
  {
    id: 1,
    title: "Tech Giants Announce Major Hiring Spree in Asia",
    summary: "Leading technology companies including Google, Microsoft, and Amazon are expanding their workforce across Asian markets, with thousands of new positions opening in India, Singapore, and Japan.",
    source: "TechCrunch",
    time: "1 hour ago",
    region: "Asia",
    sector: "Technology",
  },
  {
    id: 2,
    title: "European Banking Sector Sees Surge in Remote Positions",
    summary: "Major European banks are increasingly offering remote work opportunities, with a 40% increase in work-from-anywhere positions compared to last year.",
    source: "Financial News",
    time: "3 hours ago",
    region: "Europe",
    sector: "Finance",
  },
  {
    id: 3,
    title: "Healthcare Industry Faces Global Talent Shortage",
    summary: "Hospitals and healthcare providers worldwide are struggling to fill critical positions, leading to increased wages and international recruitment efforts.",
    source: "Healthcare Weekly",
    time: "5 hours ago",
    region: "Global",
    sector: "Healthcare",
  },
  {
    id: 4,
    title: "Renewable Energy Sector Creates 500,000 New Jobs",
    summary: "The transition to clean energy has generated half a million new positions globally, with solar and wind industries leading the growth.",
    source: "Energy Today",
    time: "7 hours ago",
    region: "Global",
    sector: "Energy",
  },
  {
    id: 5,
    title: "US Manufacturing Jobs Return with AI Integration",
    summary: "American manufacturing is experiencing a renaissance as companies combine automation with skilled human workers, creating new hybrid roles.",
    source: "Industry Week",
    time: "10 hours ago",
    region: "North America",
    sector: "Manufacturing",
  },
  {
    id: 6,
    title: "Middle East Expands Finance Hub with New Opportunities",
    summary: "Dubai and Abu Dhabi continue to attract global talent with competitive packages and growing opportunities in fintech and traditional banking.",
    source: "Gulf Business",
    time: "14 hours ago",
    region: "Middle East",
    sector: "Finance",
  },
];

const JobNews = () => {
  return (
    <>
      <Helmet>
        <title>Job News - Worldwide Employment Updates</title>
        <meta
          name="description"
          content="Explore the latest job market news, employment trends, and career opportunities from around the world."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">Job News Worldwide</h1>
          </div>

          <div className="space-y-4">
            {mockJobs.map((job) => (
              <article
                key={job.id}
                className="p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-medium text-foreground mb-2">
                  {job.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  {job.summary}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span>{job.source}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {job.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.region}
                  </span>
                  <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-accent text-accent-foreground">
                    <Building2 className="w-3 h-3" />
                    {job.sector}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default JobNews;
