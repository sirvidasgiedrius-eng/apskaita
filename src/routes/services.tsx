import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { BookOpen, Calculator, FileText, LineChart, Receipt, Users } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Paslaugos · UAB Apskaita ir finansų analizė" },
      {
        name: "description",
        content:
          "Buhalterinė apskaita, darbo užmokestis, mokesčių konsultacijos, finansinės ataskaitos ir analizė Kaune.",
      },
      { property: "og:title", content: "Paslaugos · Apskaita ir finansų analizė" },
      {
        property: "og:description",
        content: "Kompleksiniai apskaitos ir finansų analizės sprendimai jūsų verslui.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: BookOpen, key: "bookkeeping" },
  { icon: Users, key: "payroll" },
  { icon: Receipt, key: "tax" },
  { icon: FileText, key: "reports" },
  { icon: LineChart, key: "analysis" },
  { icon: Calculator, key: "consulting" },
];

function ServicesPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-secondary/40 border-b border-border">
        <div className="container-prose py-20 lg:py-28">
          <div className="text-[11px] uppercase tracking-[0.25em] text-accent mb-4">
            {t("services.eyebrow")}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-primary max-w-3xl">
            {t("services.title")}
          </h1>
          <div className="gold-rule my-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">{t("services.intro")}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-prose grid gap-px bg-border md:grid-cols-2">
          {services.map(({ icon: Icon, key }, i) => (
            <article key={key} className="bg-background p-10 lg:p-12">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="text-accent" size={26} strokeWidth={1.25} />
              </div>
              <h2 className="font-serif text-2xl text-primary mb-4">
                {t(`service.${key}.title`)}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(`service.${key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
