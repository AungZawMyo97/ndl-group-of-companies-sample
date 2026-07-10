import { Search, MapPin, ArrowRight } from "lucide-react";

const values = [
  {
    title: "Operational Precision",
    description: "We deliver at scale with zero compromise on quality or safety standards.",
    icon: "engineering",
    span: "md:col-span-8",
    bg: "bg-surface-container-lowest",
    textColor: "text-on-surface",
  },
  {
    title: "Impact",
    description: "Building legacies that respect our planet and future generations.",
    icon: "eco",
    span: "md:col-span-4",
    bg: "bg-inverse-surface",
    textColor: "text-inverse-on-surface",
  },
  {
    title: "Innovation",
    description: "Empowering every employee to challenge the status quo and iterate rapidly.",
    icon: "bolt",
    span: "md:col-span-4",
    bg: "bg-secondary-container text-on-secondary-container",
    textColor: "text-on-secondary-container",
  },
  {
    title: "Global Unity",
    description: "Diversity of thought and geography is our competitive advantage.",
    icon: "groups",
    span: "md:col-span-8",
    bg: "bg-surface-container-lowest",
    textColor: "text-on-surface-variant",
  },
];

const testimonials = [
  {
    quote: "Working at Global Group has given me the opportunity to lead projects that impact millions of lives across multiple continents.",
    name: "Sarah Chen",
    role: "Regional Director, Asia-Pacific",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
  },
  {
    quote: "The innovation culture here is unmatched. We're encouraged to think boldly and execute with precision.",
    name: "Marcus Rodriguez",
    role: "Lead Engineer, Sustainable Energy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
  },
];

export function Careers() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[618px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center hero-mask"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop')" }}
          ></div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 w-full relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label text-xs mb-6">
              Join our Global Team
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">
              Forge the Future of Industry.
            </h1>
            <p className="font-body text-lg text-inverse-on-surface mb-8">
              Global Group is a multi-sector conglomerate dedicated to sustainable innovation and
              operational excellence across five continents.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#search"
                className="bg-white text-primary px-8 py-3 rounded-lg font-label text-sm hover:bg-surface-container-low transition-colors inline-flex items-center gap-2"
              >
                Explore Opportunities
                <ArrowRight size={16} />
              </a>
              <a
                href="#values"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-label text-sm hover:bg-white/10 transition-colors"
              >
                Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search Portal */}
      <section className="relative -mt-12 z-20 px-4 md:px-10 mb-20" id="search">
        <div className="max-w-[1280px] mx-auto bg-surface-container-lowest rounded-xl border border-outline-variant p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
              <input
                className="w-full pl-12 pr-4 py-4 rounded border border-outline-variant focus:border-primary focus:outline-none transition-all font-body placeholder:text-outline"
                placeholder="Job title or keywords"
                type="text"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
              <input
                className="w-full pl-12 pr-4 py-4 rounded border border-outline-variant focus:border-primary focus:outline-none transition-all font-body placeholder:text-outline"
                placeholder="Location or Remote"
                type="text"
              />
            </div>
            <button className="bg-primary-container text-white px-10 py-4 rounded-lg font-label text-sm hover:opacity-90 transition-opacity">
              Find My Role
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span className="text-sm text-on-surface-variant">Popular Sectors:</span>
            {["Infrastructure", "Renewables", "Logistics", "AI Research"].map((sector) => (
              <span
                key={sector}
                className="bg-surface-container-low px-3 py-1 rounded-full text-xs border border-outline-variant cursor-pointer hover:bg-secondary-fixed transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Group Values Bento Grid */}
      <section className="px-4 md:px-10 max-w-[1280px] mx-auto mb-32" id="values">
        <div className="text-center mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4">
            Foundation of Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-body">
            Our values aren't just posters on the wall. They are the operational DNA that governs
            every decision across our global portfolio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          {values.map((value) => (
            <div
              key={value.title}
              className={`${value.span} ${value.bg} border border-outline-variant rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group bento-item`}
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-4xl text-secondary-container">
                  {value.icon}
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="font-headline text-xl font-semibold mb-2">{value.title}</h3>
                <p className={value.textColor}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-container-low py-32 mb-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-6">
                Voices from the Front Line
              </h2>
              <p className="text-on-surface-variant font-body mb-8">
                Hear from the leaders and innovators who are shaping the future of our global
                operations.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <span className="block font-headline text-3xl font-bold text-primary">
                    4.8/5
                  </span>
                  <span className="font-label text-xs text-on-surface-variant uppercase">
                    Employee Satisfaction
                  </span>
                </div>
                <div>
                  <span className="block font-headline text-3xl font-bold text-primary">
                    92%
                  </span>
                  <span className="font-label text-xs text-on-surface-variant uppercase">
                    Would Recommend
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant"
                >
                  <p className="font-body text-on-surface-variant mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <p className="font-label text-sm font-semibold text-on-surface">
                        {testimonial.name}
                      </p>
                      <p className="font-label text-xs text-on-surface-variant">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-10 max-w-[1280px] mx-auto mb-32">
        <div className="bg-primary-container rounded-xl p-12 text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Shape the Future?
          </h2>
          <p className="font-body text-on-primary-container mb-8 max-w-2xl mx-auto">
            Join a global team of innovators, operators, and leaders dedicated to building
            sustainable infrastructure for tomorrow's world.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-label text-sm rounded-lg hover:bg-surface-container-low transition-all">
            View All Open Positions
          </button>
        </div>
      </section>
    </main>
  );
}
