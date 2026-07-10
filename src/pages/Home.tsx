import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[751px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7KM67AQfujmuqHG8oGw6eZIczvX-HQ5nW2pbqBeIKDCSRVDjqPZb4dZ8GRqEEdvrK5s6kAbfSsiXgFmuDtn-J-sfIucGAkxNQWBgcPnmvZBj5kw-pLcX0vnU7OzW57hDoBGV00PsNmijyA-reQC-fBqRXmBp_Fi-ZJV6kZDHL3_xjchXNcuHRcVdX-6iKRqznEprubU1fY67ohqaGsLZ1BjfC8IkoZSccw097cBwGYzZhtHE2qnVrog4O91t8_aC_T9uQGYjqVoN-')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto w-full relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label text-xs rounded mb-4">
              STRATEGIC INITIATIVE
            </span>
            <h1 className="font-headline text-headline-lg-mobile md:text-headline-xl font-bold text-primary mb-2 leading-tight">
              Powering Global <br />
              <span className="text-gradient">Progress</span>
            </h1>
            <p className="font-body text-body-md md:text-body-lg text-secondary mb-8 max-w-lg">
              Driving sustainable growth and industrial transformation across 64 countries through
              disciplined capital allocation and visionary leadership.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/portfolio"
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label text-sm flex items-center gap-2 group"
              >
                Explore Vision 2030
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/investors"
                className="border border-outline text-primary px-8 py-4 rounded-lg font-label text-sm hover:bg-surface-container transition-colors"
              >
                Annual Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mandate (Stats) */}
      <section className="py-16 md:py-24 bg-surface-bright border-y border-outline-variant">
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-12 gap-6 items-start md:items-end">
            <div className="md:col-span-4">
              <h2 className="font-headline text-headline-md md:text-headline-lg font-semibold text-primary mb-2">
                Our Mandate
              </h2>
              <p className="font-body text-body-md text-secondary">
                We operate as a global fiduciary, managing diverse assets with a long-term horizon
                to ensure generational prosperity.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 md:p-6 border-l border-outline-variant">
                  <div className="font-headline text-lg md:text-xl font-semibold text-primary">$420B+</div>
                  <div className="font-label text-xs text-secondary uppercase tracking-widest mt-2">
                    Assets Under Management
                  </div>
                </div>
                <div className="p-4 md:p-6 border-l border-outline-variant">
                  <div className="font-headline text-lg md:text-xl font-semibold text-primary">64</div>
                  <div className="font-label text-xs text-secondary uppercase tracking-widest mt-2">
                    Active Countries
                  </div>
                </div>
                <div className="p-4 md:p-6 border-l border-outline-variant">
                  <div className="font-headline text-lg md:text-xl font-semibold text-primary">12k+</div>
                  <div className="font-label text-xs text-secondary uppercase tracking-widest mt-2">
                    Portfolio Employees
                  </div>
                </div>
                <div className="p-4 md:p-6 border-l border-outline-variant">
                  <div className="font-headline text-lg md:text-xl font-semibold text-primary">14.2%</div>
                  <div className="font-label text-xs text-secondary uppercase tracking-widest mt-2">
                    5-Year Avg ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strategic Sectors (Bento Grid) */}
      <section className="py-16 md:py-32 px-4 md:px-10 max-w-[1280px] mx-auto">
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <h2 className="font-headline text-headline-md md:text-headline-lg font-semibold text-primary">
            Core Strategic Sectors
          </h2>
          <p className="font-body text-body-md text-secondary mt-2">
            Vertical integration across the world's most critical industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Sustainable Energy - Large card */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-xl border border-outline-variant h-64 md:h-[450px]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDgsU-SzNwbsmp9xfnZ1iI2WgMYweYkdaTkrSRnhQliYp8XbdrYSlIh0aa7LN34-XYujs1qLN316iexyAHfV7tgetxx0KGhcliS75nPf58wj9R5jh3x7xmHpr8lCdvsuaoOFu6w0vJo7c3WUhpzYZcfOZrURzYSpkECI-OpqnZ_B30N7_fTenx8891PsbFsgkZeTS0xh-QTWPpCWCkt339Y8-sglWDyoyt6MIMXBNtP1vzia5jn20GBISZ7NwhDxxHfxxxnatf3b9U')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 p-6 md:p-10 z-10">
              <h3 className="font-headline text-headline-md md:text-headline-lg font-semibold text-white mb-2">
                Sustainable Energy
              </h3>
              <p className="text-white/80 font-body text-body-sm max-w-sm">
                Investing in the decarbonization of the global grid through next-generation renewables and storage.
              </p>
            </div>
          </div>

          {/* Advanced Systems */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-xl border border-outline-variant h-64 md:h-[450px]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvsFKK4FhhmWdPwahoG-_8OliuJXNQ8qPnikAwLnz10OLjQCd4ZZjGJ_8EbAfXh0J1v58VukfY-nJvicbH5VNguPoq3gOlhaPJOojFelFz9TNMNUyHWLza80uW8NfslkSdvahqcChrtJMayf45ijC5496NdQ1qdGjqdxADmH9eG3IPome7Q7ZQxV8U7ONxF5AuSQUXH_moY1sTYpYjSQBHH-wledX2zheapMYnsd4UJYcLvzgdjCT8R9Jp3Rah761_3rlVWFuNR-o6')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <h3 className="font-headline text-headline-md font-semibold text-white mb-1">
                Advanced Systems
              </h3>
              <p className="text-white/80 font-body text-body-sm">
                Aerospace, Defense, and Deep Tech R&D.
              </p>
            </div>
          </div>

          {/* Strategic Finance */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-xl border border-outline-variant h-64 md:h-[400px]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTUQ0GH7XzDeGj8hBwVUp1v-yPUIEwSGlX5JrG4-HMD5opLdtw77W2xQPqv45xnvQ9ygg1CizKZJjBIeKlcIl64I78wmUpnDovDiOsLzMKDkqJLZJJ0689v_zz1pyYbjlvq39ITtWi9rsNwzs7FwVcddxVN8pxwmpuGabqsj-IS3aK7TmboTVQY4upCnmmgsmOnUkxF-pigVC3okvY4fR8-zKz0i2GRIVbuHYOTMWg0Q-uFClqDFNTaVcgVxWJemnm3oSKLrxr3Dsg')" }}
            ></div>
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="font-headline text-headline-md font-semibold text-white">Strategic Finance</h3>
            </div>
          </div>

          {/* Global Logistics */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-xl border border-outline-variant h-64 md:h-[400px]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_zfD7FVTHuT0zU10xRuW41WODrqIYa-DOifa6RrZBGhb_XLShPj7-s859HawgSovvg9kcr680y0p1-q6TgU5DI-tggbHpjPillmjTt98w8WJkh4bPIe4DNiWpoBWXSLgdz4ze50rgoAulcdRyuIji1HRn_9xtZrprxzCR0gzpTdd6U9ZpEACpRUYMgE_uKG1fIGjteEA0bcJYKQGRBjtjSJ5cuEiRZynDg0-uSO-MXiQQgitllLNA0BTC9F-_q3e2NPd-xy2ffoK7')" }}
            ></div>
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <h3 className="font-headline text-headline-md font-semibold text-white">Global Logistics</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Information Portal CTA */}
      <section className="py-16 md:py-24 bg-primary-container text-on-primary">
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-headline-md md:text-headline-lg font-semibold mb-6">
              Institutional Information Portal
            </h2>
            <p className="font-body text-body-md text-on-primary-container mb-8">
              Access secure documentation, real-time portfolio performance data, and comprehensive
              governance reports for institutional partners and stakeholders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-surface text-primary px-8 py-4 rounded font-label text-sm hover:bg-surface-variant transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined">lock</span>
                Partner Login
              </button>
              <button className="bg-transparent border border-outline-variant text-white px-8 py-4 rounded font-label text-sm hover:bg-white/10 transition-colors">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
