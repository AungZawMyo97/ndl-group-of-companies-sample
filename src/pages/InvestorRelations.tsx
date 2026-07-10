const reports = [
  {
    title: "Annual Report 2023",
    size: "4.2 MB",
    type: "PDF",
    icon: "picture_as_pdf",
    iconBg: "bg-error-container text-on-error-container",
  },
  {
    title: "Q3 2024 Earnings",
    size: "1.8 MB",
    type: "PDF",
    icon: "description",
    iconBg: "bg-secondary-container text-on-secondary-container",
  },
  {
    title: "Sustainability Report",
    size: "3.1 MB",
    type: "PDF",
    icon: "description",
    iconBg: "bg-secondary-container text-on-secondary-container",
  },
];

const pressReleases = [
  {
    title: "NDL Group Reports Record Q4 2025 Earnings",
    date: "January 15, 2026",
    badge: "Financial Report",
  },
  {
    title: "Solaris Grid Secures $1.2B Infrastructure Contract",
    date: "January 10, 2026",
    badge: "Press Release",
  },
  {
    title: "2025 ESG & Sustainability Report Published",
    date: "December 20, 2025",
    badge: "ESG Report",
  },
];

export function InvestorRelations() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="pt-24 pb-32 px-4 md:px-10 max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Investor Relations
          </h2>
          <p className="font-body text-lg text-secondary max-w-2xl">
            Global Group is committed to providing transparent, timely, and accurate information
            to our shareholders and the global financial community.
          </p>
        </section>

        {/* Bento Grid: Stock & Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          {/* Stock Widget */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden border border-outline-variant">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="font-label text-sm text-secondary uppercase tracking-wider">
                    Ticker: GLBL (NYSE)
                  </span>
                  <div className="flex items-baseline gap-4 mt-2">
                    <span className="font-headline text-4xl font-bold">$142.85</span>
                    <span className="text-emerald-600 font-label text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined">trending_up</span>
                      +2.45 (1.75%)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-body text-sm text-secondary">Market Open</span>
                  <p className="font-label text-xs text-on-surface-variant mt-1">
                    Oct 24, 10:45 AM EDT
                  </p>
                </div>
              </div>
              {/* Simplified Chart Placeholder */}
              <div className="h-40 w-full mt-4 relative">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2">
                  <div className="w-full h-24 bg-gradient-to-t from-primary/5 to-transparent border-b-2 border-primary/20 relative">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                      <path
                        d="M0,80 Q50,75 100,85 T200,60 T300,40 T400,20"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-center border-l-4 border-primary border border-outline-variant">
              <span className="font-label text-sm text-secondary">Market Cap</span>
              <span className="font-headline text-2xl font-semibold mt-1">$42.6B</span>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-center border border-outline-variant">
              <span className="font-label text-sm text-secondary">Dividend Yield</span>
              <span className="font-headline text-2xl font-semibold mt-1">2.84%</span>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-center border border-outline-variant">
              <span className="font-label text-sm text-secondary">P/E Ratio</span>
              <span className="font-headline text-2xl font-semibold mt-1">18.4x</span>
            </div>
          </div>
        </div>

        {/* Downloadable Reports & Press Releases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Financial Reports */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-headline text-xl font-semibold text-primary">
                Financial Reports
              </h3>
              <span className="material-symbols-outlined text-secondary">folder_open</span>
            </div>
            {reports.map((report) => (
              <div
                key={report.title}
                className="group flex items-center p-4 bg-surface-container-lowest border border-outline-variant rounded-lg hover:border-primary transition-colors cursor-pointer"
              >
                <div className={`w-12 h-12 ${report.iconBg} rounded flex items-center justify-center mr-4`}>
                  <span className="material-symbols-outlined">{report.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label text-sm text-on-surface">{report.title}</h4>
                  <p className="font-body text-xs text-on-surface-variant">
                    {report.size} • {report.type}
                  </p>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">
                  download
                </span>
              </div>
            ))}
          </div>

          {/* Press Releases */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-xl font-semibold text-primary mb-4">
              Press Releases
            </h3>
            <div className="space-y-3">
              {pressReleases.map((release) => (
                <div
                  key={release.title}
                  className="bg-surface-container-lowest border border-outline-variant rounded-lg p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="font-headline font-semibold text-on-surface">
                      {release.title}
                    </h3>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label text-xs">
                      {release.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="font-label text-sm text-on-surface-variant hidden sm:block">
                      {release.date}
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant">
                      chevron_right
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary-container rounded-xl p-8 text-center">
          <h2 className="font-headline text-xl font-semibold text-white mb-2">
            Download Latest Annual Report
          </h2>
          <p className="font-body text-on-primary-container mb-6">
            Access the complete 2025 Annual Report including financial statements, strategic
            outlook, and governance details.
          </p>
          <button className="px-8 py-4 bg-white text-primary font-label text-sm rounded-lg hover:bg-surface-container-low transition-all">
            Download Report (PDF)
          </button>
        </div>
      </div>
    </main>
  );
}
