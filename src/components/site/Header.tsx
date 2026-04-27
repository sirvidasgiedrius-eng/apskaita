import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground font-serif text-lg">
            A
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-serif text-base text-primary">Apskaita ir finansų analizė</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">UAB · Est. 2011</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "text-sm tracking-wide transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center text-xs font-medium text-muted-foreground">
            <button
              onClick={() => setLang("lt")}
              className={cn("px-1.5 py-1 transition-colors", lang === "lt" && "text-primary")}
              aria-label="Lietuvių"
            >
              LT
            </button>
            <span className="text-border">/</span>
            <button
              onClick={() => setLang("en")}
              className={cn("px-1.5 py-1 transition-colors", lang === "en" && "text-primary")}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.18em] hover:bg-accent transition-colors"
          >
            {t("nav.cta")}
          </Link>
          <button
            className="lg:hidden text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prose flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground border-b border-border/40 last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
