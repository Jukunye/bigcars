import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-10 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity text-amber-500"
          >
            Bigcars<span className="text-primary">.</span>
          </Link>

          {/* Text-Based Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Services', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social Links (Text Only) & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              {['Instagram', 'Twitter'].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="text-[10px] uppercase tracking-tighter text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-muted-foreground/30"
                >
                  {platform}
                </Link>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              © {currentYear} — ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
