import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Apie mus · UAB Apskaita ir finansų analizė" },
      {
        name: "description",
        content:
          "15 metų patirties teikiant buhalterines paslaugas. Direktorius Darius Tribandis, Kaunas.",
      },
      { property: "og:title", content: "Apie mus · Apskaita ir finansų analizė" },
      {
        property: "og:description",
        content: "15 metų patirties skaičių pasaulyje. Kruopštus, asmeninis požiūris į kiekvieną klientą.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="container-prose py-20 lg:py-28 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.25em] text-accent mb-4">
            {t("about.eyebrow")}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1]">
            {t("about.title")}
          </h1>
          <div className="gold-rule my-8" />
          <div className="border border-border p-8 bg-secondary/30">
            <div className="font-serif text-2xl text-primary">{t("about.director")}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mt-1">
              {t("about.directorRole")}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-20">
          <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-10">
            UAB · Įmonės informacija
          </div>
          <dl className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12">
            {[
              { label: t("company.regCode"), value: "302615162" },
              { label: t("company.vat"), value: "LT100009717415" },
              { label: t("company.capital"), value: "5 792 €" },
              { label: t("company.age"), value: t("company.ageValue") },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">
                  {item.label}
                </dt>
                <dd className="mt-3 font-serif text-2xl text-gold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
