import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "lt" | "en";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  lt: {
    "nav.home": "Pradžia",
    "nav.services": "Paslaugos",
    "nav.about": "Apie mus",
    "nav.contact": "Kontaktai",
    "nav.cta": "Susisiekti",

    "hero.eyebrow": "Apskaita ir finansų analizė · Nuo 2011",
    "hero.title": "Tiksli apskaita.\nPatikima finansų analizė.",
    "hero.subtitle": "Daugiau nei 15 metų teikiame profesionalias buhalterinės apskaitos paslaugas Lietuvos verslui. Ramybė skaičiuose — laisvė versle.",
    "hero.cta": "Konsultacija",
    "hero.secondary": "Mūsų paslaugos",

    "stats.years": "Metų patirties",
    "stats.clients": "Patenkintų klientų",
    "stats.accuracy": "Tikslumas",
    "stats.support": "Palaikymas",

    "services.eyebrow": "Ką siūlome",
    "services.title": "Paslaugos, pritaikytos jūsų verslui",
    "services.intro": "Kompleksiniai apskaitos sprendimai — nuo pirminių dokumentų iki strateginės finansų analizės.",

    "service.bookkeeping.title": "Buhalterinė apskaita",
    "service.bookkeeping.desc": "Pilna apskaitos tvarkymas, pirminiai dokumentai, didžioji knyga ir mėnesinės ataskaitos.",
    "service.payroll.title": "Darbo užmokestis",
    "service.payroll.desc": "Atlyginimų skaičiavimas, Sodros deklaracijos, personalo dokumentų administravimas.",
    "service.tax.title": "Mokesčių konsultacijos",
    "service.tax.desc": "PVM, GPM, pelno mokesčio deklaracijos ir mokesčių planavimas.",
    "service.reports.title": "Finansinės ataskaitos",
    "service.reports.desc": "Metinė finansinė atskaitomybė, balansas, pelno (nuostolių) ataskaita.",
    "service.analysis.title": "Finansų analizė",
    "service.analysis.desc": "Veiklos rodiklių analizė, biudžeto planavimas ir verslo prognozės.",
    "service.consulting.title": "Steigimo konsultacijos",
    "service.consulting.desc": "Įmonės steigimas, apskaitos politikos formavimas, restruktūrizavimas.",

    "about.eyebrow": "Apie mus",
    "about.title": "15 metų patirties skaičių pasaulyje",
    "about.p1": "UAB „Apskaita ir finansų analizė\" yra įsikūrusi pačiame Kauno senamiestyje. Nuo 2011 metų teikiame profesionalias apskaitos paslaugas mažoms ir vidutinėms įmonėms visoje Lietuvoje.",
    "about.p2": "Mūsų komandai vadovauja Darius Tribandis — patyręs finansų specialistas, kurio kruopštus požiūris ir asmeninis dėmesys kiekvienam klientui yra mūsų darbo pagrindas.",
    "about.director": "Darius Tribandis",
    "about.directorRole": "Direktorius",

    "company.regCode": "Įmonės kodas",
    "company.vat": "PVM kodas",
    "company.capital": "Įstatinis kapitalas",
    "company.age": "Veiklos pradžia",
    "company.ageValue": "2011 m.",

    "contact.eyebrow": "Susisiekite",
    "contact.title": "Pasirengę pradėti?",
    "contact.subtitle": "Užpildykite formą arba skambinkite — atsakysime per vieną darbo dieną.",
    "contact.address": "Adresas",
    "contact.phone": "Telefonas",
    "contact.email": "El. paštas",
    "contact.hours": "Darbo laikas",
    "contact.hoursValue": "I–V  9:00 – 17:00",
    "contact.name": "Vardas",
    "contact.message": "Žinutė",
    "contact.send": "Siųsti žinutę",
    "contact.sent": "Ačiū! Susisieksime artimiausiu metu.",

    "footer.tagline": "Patikima apskaita Kauno verslui nuo 2011 m.",
    "footer.rights": "Visos teisės saugomos.",
    "footer.nav": "Naršymas",
    "footer.contacts": "Kontaktai",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    "hero.eyebrow": "Accounting & Financial Analysis · Since 2011",
    "hero.title": "Precise accounting.\nReliable financial insight.",
    "hero.subtitle": "For over 15 years we have served Lithuanian businesses with professional bookkeeping and financial analysis. Confidence in numbers, freedom in business.",
    "hero.cta": "Free consultation",
    "hero.secondary": "Our services",

    "stats.years": "Years of experience",
    "stats.clients": "Satisfied clients",
    "stats.accuracy": "Accuracy",
    "stats.support": "Support",

    "services.eyebrow": "What we offer",
    "services.title": "Services tailored to your business",
    "services.intro": "Complete accounting solutions — from primary documents to strategic financial analysis.",

    "service.bookkeeping.title": "Bookkeeping",
    "service.bookkeeping.desc": "Full bookkeeping, primary documents, general ledger and monthly reports.",
    "service.payroll.title": "Payroll",
    "service.payroll.desc": "Salary calculation, Sodra declarations and HR document administration.",
    "service.tax.title": "Tax advisory",
    "service.tax.desc": "VAT, personal income tax, corporate tax declarations and tax planning.",
    "service.reports.title": "Financial reporting",
    "service.reports.desc": "Annual financial statements, balance sheet, profit and loss reports.",
    "service.analysis.title": "Financial analysis",
    "service.analysis.desc": "Performance indicator analysis, budget planning and business forecasting.",
    "service.consulting.title": "Setup consulting",
    "service.consulting.desc": "Company formation, accounting policy design and restructuring support.",

    "about.eyebrow": "About",
    "about.title": "15 years of experience in the world of numbers",
    "about.p1": "UAB \"Apskaita ir finansų analizė\" is based in the heart of Kaunas Old Town. Since 2011 we have provided professional accounting services for small and medium businesses across Lithuania.",
    "about.p2": "Our team is led by Darius Tribandis — an experienced finance professional whose meticulous approach and personal attention to every client define how we work.",
    "about.director": "Darius Tribandis",
    "about.directorRole": "Director",

    "company.regCode": "Registration code",
    "company.vat": "VAT number",
    "company.capital": "Share capital",
    "company.age": "Established",
    "company.ageValue": "2011",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Ready to begin?",
    "contact.subtitle": "Fill out the form or call us — we reply within one business day.",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Working hours",
    "contact.hoursValue": "Mon–Fri  9:00 – 17:00",
    "contact.name": "Name",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sent": "Thank you! We will get back to you shortly.",

    "footer.tagline": "Trusted accounting for Kaunas businesses since 2011.",
    "footer.rights": "All rights reserved.",
    "footer.nav": "Navigation",
    "footer.contacts": "Contacts",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("lt");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "lt" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => dictionaries[lang][key] ?? key;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
