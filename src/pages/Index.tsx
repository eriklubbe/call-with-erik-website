const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-3xl text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Call With <span className="text-primary">Erik</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Business &amp; financial advisory and fundraising services.
            Book a call to discuss your growth strategy.
          </p>
          <a
            href="https://callwitherik.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Call With Erik. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
