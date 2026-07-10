import { useState } from "react";
import { Search } from "lucide-react";

const sectors = [
  "All Sectors",
  "Renewables",
  "FinTech",
  "Logistics",
  "Infrastructure",
];

const companies = [
  {
    name: "Lumina Energy",
    sector: "Renewables",
    description: "Leading the transition to zero-carbon grids with utility-scale solar and advanced grid stabilization technologies.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    acquired: "Acquired 2018",
    metric: "1.2 GW Capacity",
  },
  {
    name: "Vertex Capital",
    sector: "FinTech",
    description: "Next-generation institutional asset management platform powered by proprietary AI and blockchain settlement.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
    acquired: "Established 2021",
    metric: "$4.2B AUM",
  },
  {
    name: "SwiftPath Global",
    sector: "Logistics",
    description: "Omnichannel fulfillment networks integrating automated robotics with real-time global supply chain tracking.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&h=400&fit=crop",
    acquired: "Acquired 2015",
    metric: "42 Hubs Worldwide",
  },
  {
    name: "Aura Development",
    sector: "Infrastructure",
    description: "Designing and building critical urban infrastructure that stands as a testament to engineering longevity and social impact.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",
    acquired: "Joint Venture",
    metric: "Top 10 Global",
  },
  {
    name: "Nexus Systems",
    sector: "Infrastructure",
    description: "Enterprise-grade cloud infrastructure and data center operations serving Fortune 500 clients globally.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    acquired: "Acquired 2019",
    metric: "99.99% Uptime",
  },
  {
    name: "BioGenix Labs",
    sector: "Renewables",
    description: "Pioneering synthetic biology solutions for sustainable manufacturing and pharmaceutical development.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop",
    acquired: "Founded 2020",
    metric: "12 Patent Families",
  },
];

export function Portfolio() {
  const [activeSector, setActiveSector] = useState("All Sectors");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = companies.filter((c) => {
    const matchesSector =
      activeSector === "All Sectors" || c.sector === activeSector;
    const matchesSearch =
      searchQuery === "" ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.sector.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-surface">
      <div className="pt-24 pb-32 px-4 md:px-10 max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Strategic Portfolio
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl">
            Global Group orchestrates a diverse ecosystem of industry leaders, driving sustainable growth
            through operational excellence and institutional stability.
          </p>
        </section>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <div className="relative w-full md:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search subsidiaries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:outline-none transition-all font-body text-on-surface placeholder:text-outline"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">
            {sectors.map((sector) => {
              const isActive = activeSector === sector;
              return (
                <button
                  key={sector}
                  onClick={() => setActiveSector(sector)}
                  className={`px-5 py-2 rounded-full font-label text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-high text-on-surface-variant hover:bg-secondary-container"
                  }`}
                >
                  {sector}
                </button>
              );
            })}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((company) => (
            <div
              key={company.name}
              className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col hover:border-primary transition-all duration-300 group"
            >
              <div className="h-48 mb-4 rounded-lg overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={company.image}
                  alt={company.name}
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label text-xs">
                  {company.sector}
                </span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary">
                  open_in_new
                </span>
              </div>
              <h3 className="font-headline text-xl font-semibold text-primary mb-2">
                {company.name}
              </h3>
              <p className="font-body text-sm text-on-surface-variant mb-6">
                {company.description}
              </p>
              <div className="mt-auto border-t border-surface-container-high pt-4 flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-wider text-outline">
                  {company.acquired}
                </span>
                <span className="font-label text-sm text-primary font-bold">
                  {company.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-on-surface-variant text-lg">
              No companies match your search criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
