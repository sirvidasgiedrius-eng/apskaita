import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-primary">404</h1>
        <div className="gold-rule mx-auto my-6" />
        <h2 className="font-serif text-xl text-foreground">Puslapis nerastas / Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Puslapio, kurio ieškote, nėra arba jis perkeltas.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent transition-colors"
          >
            Į pradžią
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "UAB Apskaita ir finansų analizė — Buhalterinės paslaugos Kaune" },
      {
        name: "description",
        content:
          "Profesionalios buhalterinės apskaitos ir finansų analizės paslaugos Kaune nuo 2011 m. UAB „Apskaita ir finansų analizė\".",
      },
      { name: "author", content: "UAB Apskaita ir finansų analizė" },
      { property: "og:title", content: "UAB Apskaita ir finansų analizė — Buhalterinės paslaugos Kaune" },
      {
        property: "og:description",
        content: "Patikima buhalterinė apskaita ir finansų analizė Kaune nuo 2011 m.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAB Apskaita ir finansų analizė — Buhalterinės paslaugos Kaune" },
      { name: "description", content: "Finance Hub is a professional website for UAB \"Apskaita ir finansų analizė,\" an accounting company." },
      { property: "og:description", content: "Finance Hub is a professional website for UAB \"Apskaita ir finansų analizė,\" an accounting company." },
      { name: "twitter:description", content: "Finance Hub is a professional website for UAB \"Apskaita ir finansų analizė,\" an accounting company." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a26cd47e-1cb5-4ce0-b17f-05d6d7565643/id-preview-98f76774--28a50711-f96e-488f-a9e7-311f58e8340c.lovable.app-1777313037765.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a26cd47e-1cb5-4ce0-b17f-05d6d7565643/id-preview-98f76774--28a50711-f96e-488f-a9e7-311f58e8340c.lovable.app-1777313037765.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
