import { getBlogPermalink, getPermalink } from './utils/permalinks';

// Navigation translations
const navigationLabels = {
  en: {
    about: 'About',
    services: 'Services',
    blog: 'Blog',
    blogList: 'Blog List',
    article: 'Article',
    contactUs: 'Contact Us',
    home: 'Home',
  },
  de: {
    about: 'Über uns',
    services: 'Leistungen',
    blog: 'Blog',
    blogList: 'Blog Liste',
    article: 'Artikel',
    contactUs: 'Kontakt',
    home: 'Startseite',
  },
  es: {
    about: 'Sobre mí',
    services: 'Servicios',
    blog: 'Blog',
    blogList: 'Lista del Blog',
    article: 'Artículo',
    contactUs: 'Contáctanos',
    home: 'Inicio',
  },
};

// Generate navigation data for a specific locale
export function getHeaderData(locale: string = 'en') {
  const labels = navigationLabels[locale] || navigationLabels.en;

  // Helper function to create locale-aware URLs
  const getLocalePermalink = (path: string) => {
    if (locale === 'en') {
      return getPermalink(path);
    }
    return getPermalink(`/${locale}${path}`);
  };

  return {
    links: [
      {
        text: labels.about,
        href: getLocalePermalink('/about'),
      },
      {
        text: labels.services,
        href: getLocalePermalink('/services'),
      },
      {
        text: labels.blog,
        links: [
          {
            text: labels.blogList,
            href: getBlogPermalink(),
          },
          {
            text: labels.article,
            href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
          },
        ],
      },
    ],
    actions: [
      {
        text: labels.contactUs,
        variant: 'primary',
        href: 'mailto:haberstock.stefanie@gmail.com',
      },
    ],
  };
}

export function getFooterData(locale: string = 'en') {
  const labels = navigationLabels[locale] || navigationLabels.en;

  // Helper function to create locale-aware URLs
  const getLocalePermalink = (path: string) => {
    if (locale === 'en') {
      return getPermalink(path);
    }
    return getPermalink(`/${locale}${path}`);
  };

  return {
    links: [
      {
        title: labels.services,
        links: [
          { text: labels.about, href: getLocalePermalink('/about') },
          { text: labels.services, href: getLocalePermalink('/services') },
          { text: labels.contactUs, href: 'mailto:haberstock.stefanie@gmail.com' },
        ],
      },
    ],
    secondaryLinks: [
      { text: labels.home, href: getLocalePermalink('/') },
      { text: labels.about, href: getLocalePermalink('/about') },
      { text: labels.services, href: getLocalePermalink('/services') },
      { text: labels.blog, href: getPermalink('/blog') },
    ],
    socialLinks: [
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/steffi.hx/' },
      {
        ariaLabel: 'LinkedIn',
        icon: 'tabler:brand-linkedin',
        href: 'https://www.linkedin.com/in/stefanie-haberstock-1780431a8/',
      },
    ],
    footNote: `
      Made using<a class="text-blue-600 underline dark:text-muted" href="https://astro.build/themes/details/astrowind/"> AstroWind</a> · All rights reserved.
    `,
  };
}

// Default exports (English)
export const headerData = getHeaderData('en');
export const footerData = getFooterData('en');
