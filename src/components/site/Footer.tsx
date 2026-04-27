import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl mb-3">Apskaita ir finansų analizė</div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            {t("footer.tagline")}
          </p>
          <div className="gold-rule mt-6" />
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">{t("footer.nav")}</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">{t("nav.home")}</Link></li>
            <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground">{t("nav.services")}</Link></li>
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">{t("nav.about")}</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">{t("footer.contacts")}</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Vokiečių g. 27-5, Kaunas</li>
            <li><a href="tel:+37037300821" className="hover:text-primary-foreground">+370 37 300 821</a></li>
            <li><a href="mailto:Apskaita@aifa.lt" className="hover:text-primary-foreground">Apskaita@aifa.lt</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} UAB „Apskaita ir finansų analizė". {t("footer.rights")}</div>
          <div>Reg. 302615162 · PVM LT100009717415</div>
        </div>
      </div>
    </footer>
  );
}
