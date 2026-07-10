import { Container } from "@/components/layout/Container";

const timeline = [
  {
    year: "1984",
    title: "Foundation",
    description: "Global Group founded as a regional infrastructure consultancy, prioritizing technical precision and client trust.",
    side: "left" as const,
  },
  {
    year: "2002",
    title: "Global Expansion",
    description: "Strategic entry into European and Asian markets, diversifying the portfolio into energy and industrial logistics.",
    side: "right" as const,
  },
  {
    year: "2018",
    title: "Digital Transformation",
    description: "Launched the Integrated Technology Division to pioneer AI-driven logistics and carbon-neutral operations.",
    side: "left" as const,
  },
];

const leaders = [
  {
    name: "Marcus Vance",
    role: "CHIEF EXECUTIVE OFFICER",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    description: "Leading the Group's global strategy with over 30 years of experience in international finance.",
  },
  {
    name: "Elena Rodriguez",
    role: "CHIEF OPERATIONS OFFICER",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    description: "Directing operational excellence and supply chain resilience across three continents.",
  },
  {
    name: "Dr. Julian Chen",
    role: "CHIEF TECHNOLOGY OFFICER",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    description: "Pioneering the group's digital future through proprietary AI and advanced data analytics.",
  },
  {
    name: "Sarah Mitchell",
    role: "CHIEF FINANCIAL OFFICER",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    description: "Overseeing financial strategy and capital allocation across the global portfolio.",
  },
];

export function About() {
  return (
    <main className="min-h-screen bg-surface">
      <Container>
        {/* Hero Section */}
        <section className="mb-24 mt-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center px-3 py-1 bg-secondary-container text-on-secondary-container font-label text-xs rounded-full">
              ESTABLISHED 1984
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Architecting the future through stability and innovation.
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Global Group is a multi-sector institutional leader committed to sustainable growth,
              operational excellence, and long-term value creation across international markets.
            </p>
          </div>
        </section>

        {/* Corporate History / Timeline */}
        <section className="mb-24">
          <div className="mb-8">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-2">
              Corporate History
            </h2>
            <p className="text-on-surface-variant font-body">
              Four decades of strategic evolution and resilience.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12 relative">
              {timeline.map((event, index) => (
                <div key={event.year} className="flex flex-col md:flex-row items-center justify-between w-full">
                  {event.side === "left" ? (
                    <>
                      <div className="w-full md:w-[45%] order-2 md:order-1 text-left md:text-right">
                        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl hover:border-primary transition-colors cursor-default">
                          <span className="font-headline text-xl font-semibold text-primary-container block mb-2">
                            {event.year}
                          </span>
                          <h3 className="font-label text-sm font-semibold text-on-surface mb-2">
                            {event.title}
                          </h3>
                          <p className="font-body text-sm text-on-surface-variant">
                            {event.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary z-10 flex items-center justify-center border-4 border-surface mb-4 md:mb-0 order-1 md:order-2">
                        <span className="text-on-primary text-sm">{index + 1}</span>
                      </div>
                      <div className="hidden md:block w-[45%] order-3"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block w-[45%] order-1"></div>
                      <div className="w-10 h-10 rounded-full bg-primary z-10 flex items-center justify-center border-4 border-surface mb-4 md:mb-0 order-1 md:order-2">
                        <span className="text-on-primary text-sm">{index + 1}</span>
                      </div>
                      <div className="w-full md:w-[45%] order-2 md:order-3">
                        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl hover:border-primary transition-colors cursor-default">
                          <span className="font-headline text-xl font-semibold text-primary-container block mb-2">
                            {event.year}
                          </span>
                          <h3 className="font-label text-sm font-semibold text-on-surface mb-2">
                            {event.title}
                          </h3>
                          <p className="font-body text-sm text-on-surface-variant">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-24">
          <div className="mb-8">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-2">
              Executive Leadership
            </h2>
            <p className="text-on-surface-variant font-body">
              Guidance from industry veterans and visionary strategists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader) => (
              <div key={leader.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant mb-4 bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={leader.image}
                    alt={leader.name}
                  />
                </div>
                <h3 className="font-headline text-xl font-semibold text-primary">
                  {leader.name}
                </h3>
                <p className="font-label text-xs text-on-secondary-container bg-secondary-container inline-block px-2 py-0.5 rounded mt-1">
                  {leader.role}
                </p>
                <p className="mt-4 font-body text-sm text-on-surface-variant line-clamp-2">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Annual Revenue", value: "$12.4B", sublabel: "Consolidated FY 2025" },
              { label: "Countries", value: "40+", sublabel: "Global Presence" },
              { label: "Employees", value: "68,000+", sublabel: "Worldwide Workforce" },
              { label: "Subsidiaries", value: "24", sublabel: "Operating Entities" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
                <p className="font-label text-xs text-on-surface-variant mb-2">
                  {stat.label}
                </p>
                <p className="font-headline text-3xl md:text-4xl font-bold text-on-surface">
                  {stat.value}
                </p>
                <p className="font-label text-xs text-on-surface-variant mt-2">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
