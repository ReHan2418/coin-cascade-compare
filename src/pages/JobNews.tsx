import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Briefcase, MapPin, Building2, ExternalLink } from "lucide-react";

const jobNews = [
  {
    id: 1,
    title: "LinkedIn Jobs - Global Opportunities",
    summary: "Browse millions of job listings worldwide across all industries. Find remote, hybrid, and on-site positions from top companies.",
    source: "LinkedIn",
    url: "https://www.linkedin.com/jobs/",
    region: "Global",
    sector: "All Industries",
  },
  {
    id: 2,
    title: "Indeed - Job Search Engine",
    summary: "Search millions of jobs from thousands of job boards, newspapers, and company career pages. One search covers all jobs.",
    source: "Indeed",
    url: "https://www.indeed.com/",
    region: "Global",
    sector: "All Industries",
  },
  {
    id: 3,
    title: "Glassdoor - Jobs & Company Reviews",
    summary: "Find jobs and research companies. Read employee reviews, salaries, and interview experiences before you apply.",
    source: "Glassdoor",
    url: "https://www.glassdoor.com/Job/index.htm",
    region: "Global",
    sector: "All Industries",
  },
  {
    id: 4,
    title: "Remote OK - Remote Jobs",
    summary: "Find remote jobs in programming, design, marketing, and more. Work from anywhere in the world.",
    source: "Remote OK",
    url: "https://remoteok.com/",
    region: "Remote",
    sector: "Technology",
  },
  {
    id: 5,
    title: "We Work Remotely - Remote Jobs",
    summary: "The largest remote work community in the world. Find remote jobs in design, programming, marketing, and more.",
    source: "We Work Remotely",
    url: "https://weworkremotely.com/",
    region: "Remote",
    sector: "Technology",
  },
  {
    id: 6,
    title: "AngelList - Startup Jobs",
    summary: "Find jobs at startups and tech companies. Apply privately to thousands of tech companies and startups.",
    source: "AngelList",
    url: "https://angel.co/jobs",
    region: "Global",
    sector: "Startups",
  },
  {
    id: 7,
    title: "Naukri - Jobs in India",
    summary: "India's largest job portal. Search for jobs across all industries and locations in India.",
    source: "Naukri",
    url: "https://www.naukri.com/",
    region: "India",
    sector: "All Industries",
  },
  {
    id: 8,
    title: "Gulf Talent - Middle East Jobs",
    summary: "Leading job site for professionals in the Middle East. Find jobs in UAE, Saudi Arabia, Qatar, and more.",
    source: "GulfTalent",
    url: "https://www.gulftalent.com/",
    region: "Middle East",
    sector: "All Industries",
  },
];

const JobNews = () => {
  return (
    <>
      <Helmet>
        <title>Job News - Worldwide Employment Opportunities</title>
        <meta
          name="description"
          content="Explore job opportunities and career resources from around the world. Find remote, hybrid, and on-site positions."
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
            {jobNews.map((job) => (
              <a
                key={job.id}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h2>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {job.summary}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-medium">{job.source}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.region}
                  </span>
                  <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-accent text-accent-foreground">
                    <Building2 className="w-3 h-3" />
                    {job.sector}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default JobNews;
