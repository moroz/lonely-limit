import type { Locale } from "./interfaces";

export interface NavbarItemConfig {
  label: string;
  href: string;
}

export const NavbarConfig: Record<Locale, NavbarItemConfig[]> = {
  pl: [
    {
      label: "Buddyzm",
      href: "/",
    },
    {
      label: "Ośrodek",
      href: "/osrodek",
    },
    {
      label: "Aktualności",
      href: "/aktualnosci",
    },
    {
      label: "Kursy",
      href: "/kursy",
    },
    {
      label: "Odosobnienia",
      href: "/odosobnienia",
    },
    {
      label: "Cytat dnia",
      href: "/cytat-dnia",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
  ],
  en: [
    {
      label: "Center",
      href: "/",
    },
    {
      label: "Buddhism",
      href: "/buddhism",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Retreats",
      href: "/retreats",
    },
    {
      label: "Quote of the Day",
      href: "/quote-of-the-day",
    },
  ],
};
