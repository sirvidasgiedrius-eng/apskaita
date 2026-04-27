import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroImage from "@/assets/hero-ledger.jpg";
import { ArrowRight, BookOpen, Calculator, FileText, LineChart, Receipt, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useI18n();
  const titleLines = t("hero.title").split("\n");

  const services = [
    { icon: BookOpen, key: "bookkeeping" },
    { icon: Users, key: "payroll" },
    { icon: Receipt, key: "tax" },
    { icon: FileText, key: "reports" },
    { icon: LineChart, key: "analysis" },
    { icon: Calculator, key: "consulting" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose grid lg:grid-cols-12 gap-12 pt-16 pb-24 lg:pt-24 lg:pb-32 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
              {t("hero.eyebrow")}
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-primary">
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {i === titleLines.length - 1 ? (
                    <span className="italic text-accent">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
            <div className="gold-rule my-8" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                {t("hero.cta")}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-primary/20 text-primary px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-secondary transition-colors"
              >
                {t("hero.secondary")}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroImage}
                alt="Accounting ledger on a wooden desk with brass lamp"
                className="w-full h-full object-cover"
                width={1600}
                height={1200}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block bg-background border border-border p-6 max-w-[220px] shadow-elegant">
              <div className="font-serif text-3xl text-primary">15+</div>
              <div className="gold-rule my-2" />
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {t("stats.years")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { value: "15+", label: t("stats.years") },
            { value: "120+", label: t("stats.clients") },
            { value: "100%", label: t("stats.accuracy") },
            { value: "24/7", label: t("stats.support") },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl md:text-5xl text-gold">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 lg:py-32">
        <div className="container-prose">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent mb-4">
              {t("services.eyebrow")}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">{t("services.title")}</h2>
            <div className="gold-rule my-6" />
            <p className="text-muted-foreground">{t("services.intro")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="bg-background p-8 hover:bg-secondary/40 transition-colors group"
              >
                <Icon className="text-accent mb-6" size={28} strokeWidth={1.25} />
                <h3 className="font-serif text-xl text-primary mb-3">
                  {t(`service.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`service.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary"
            >
              {t("nav.services")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose">
        <div className="bg-secondary border-l-2 border-gold px-8 md:px-16 py-16 md:py-20 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl md:text-3xl text-primary">{t("contact.title")}</h3>
            <p className="mt-3 text-muted-foreground">{t("contact.subtitle")}</p>
          </div>
          <div className="md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              {t("nav.cta")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
