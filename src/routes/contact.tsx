import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontaktai · UAB Apskaita ir finansų analizė" },
      {
        name: "description",
        content:
          "Vokiečių g. 27-5, Kaunas · +370 37 300 821 · Apskaita@aifa.lt. Susisiekite su mūsų buhalterijos komanda.",
      },
      { property: "og:title", content: "Kontaktai · Apskaita ir finansų analizė" },
      {
        property: "og:description",
        content: "Vokiečių g. 27-5, Kaunas. Susisiekite — atsakysime per vieną darbo dieną.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const items = [
    { icon: MapPin, label: t("contact.address"), value: "Vokiečių g. 27-5, Kaunas" },
    { icon: Phone, label: t("contact.phone"), value: "+370 37 300 821", href: "tel:+37037300821" },
    { icon: Mail, label: t("contact.email"), value: "Apskaita@aifa.lt", href: "mailto:Apskaita@aifa.lt" },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  return (
    <section className="container-prose py-20 lg:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <div className="text-[11px] uppercase tracking-[0.25em] text-accent mb-4">
          {t("contact.eyebrow")}
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1]">
          {t("contact.title")}
        </h1>
        <div className="gold-rule my-6" />
        <p className="text-muted-foreground mb-10">{t("contact.subtitle")}</p>

        <ul className="space-y-6">
          {items.map((it) => (
            <li key={it.label} className="flex gap-4">
              <it.icon className="text-accent mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {it.label}
                </div>
                {it.href ? (
                  <a href={it.href} className="font-serif text-lg text-primary hover:text-accent">
                    {it.value}
                  </a>
                ) : (
                  <div className="font-serif text-lg text-primary">{it.value}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-7">
        <div className="bg-secondary/40 border border-border p-8 md:p-12">
          {sent ? (
            <div className="py-12 text-center">
              <div className="gold-rule mx-auto mb-6" />
              <p className="font-serif text-2xl text-primary">{t("contact.sent")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field name="name" label={t("contact.name")} />
                <Field name="email" type="email" label={t("contact.email")} />
              </div>
              <Field name="phone" label={t("contact.phone")} />
              <Field name="message" label={t("contact.message")} multiline />
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                {t("contact.send")}
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 aspect-[16/9] overflow-hidden border border-border">
          <iframe
            title="Vokiečių g. 27, Kaunas"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.8855%2C54.8955%2C23.8895%2C54.8985&layer=mapnik&marker=54.8970%2C23.8875"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  multiline = false,
}: {
  name: string;
  label: string;
  type?: string;
  multiline?: boolean;
}) {
  const base =
    "w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors";
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </span>
      {multiline ? (
        <textarea name={name} rows={5} required className={base} />
      ) : (
        <input name={name} type={type} required className={base} />
      )}
    </label>
  );
}
