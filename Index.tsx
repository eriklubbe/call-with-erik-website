import { ArrowRight, TrendingUp, Briefcase, DollarSign, BarChart3, Handshake } from "lucide-react";

const services = [
  { icon: TrendingUp, text: "Growth strategy & business planning" },
  { icon: DollarSign, text: "Fundraising & investor readiness" },
  { icon: BarChart3, text: "Financial modeling & analysis" },
  { icon: Briefcase, text: "M&A advisory & deal structuring" },
  { icon: Handshake, text: "Board advisory & stakeholder management" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-primary text-sm font-body tracking-wide">Advisory & Fundraising</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Call with{" "}
            <span className="text-primary animate-mint-shimmer inline-block">Erik</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto mb-10">
            Strategic business & financial advisory for founders and executives ready to scale, raise capital, and create lasting value.
          </p>

          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>

          <div className="mt-10 w-full max-w-3xl rounded-xl overflow-hidden border border-border/50 bg-white" style={{ boxShadow: "var(--mint-glow)" }}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2BThNwejjoOuNf05fe6sqLfhE5lKv5NHEF8TzrEg_HYOp9yOxb5tG-uVOjYhLnrMGT5-sl6mQ9?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Book a meeting with Erik"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-primary/40" />
      </div>

      {/* Services */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-center mb-12">
          How I Help
        </h2>

        <ul className="space-y-5">
          {services.map((service, i) => (
            <li
              key={i}
              className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-body text-base">{service.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-border/30">
        <p className="text-muted-foreground text-sm font-light">
          © {new Date().getFullYear()} callwitherik.com — All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
