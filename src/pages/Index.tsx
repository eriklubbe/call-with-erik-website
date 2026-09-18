const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-primary text-sm font-body tracking-wide">Advisory & Fundraising</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Call with{" "}
            <span className="text-primary animate-mint-shimmer inline-block">Erik</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto mb-6">
            Finance and business advisory
          </p>

          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto mb-4">
            Reach out or book a call below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="mailto:erik@el-advisory.com"
              className="px-4 py-1.5 rounded-full border border-white bg-white/5 text-white text-base font-body tracking-wide hover:bg-white/15 transition-colors"
            >
              erik@el-advisory.com
            </a>
            <a
              href="https://wa.me/447751617432"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-white bg-white/5 text-white text-base font-body tracking-wide hover:bg-white/15 transition-colors"
            >
              WhatsApp +44 7751 617432
            </a>
          </div>

          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-border/50 bg-white" style={{ boxShadow: "0 0 80px rgba(120, 170, 140, 0.15)" }}>
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

          <a
            href="https://el-advisory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-primary text-xl font-light tracking-wide hover:bg-primary/10 hover:border-primary/50 transition-colors"
          >
            More on what I do at{" "}
            <span className="whitespace-nowrap">el-advisory.com</span>
          </a>
        </div>
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
