import { getBlogPermalink, getPermalink } from './utils/permalinks';
import { getLocalizedPath, type Locale } from './utils/i18n';

// Generate locale-aware navigation data
export function getHeaderData(locale: Locale = 'en') {
  const localizedPath = (path: string) => {
    if (locale === 'en') return getPermalink(path);
    return getPermalink(`/${locale}${path}`);
  };

  return {
    links: [
      {
        text: 'navigation.about',
        href: localizedPath('/about'),
      },
      {
        text: 'navigation.services', 
        href: localizedPath('/services'),
      },
      {
        text: 'navigation.blog',
        links: [
          {
            text: 'navigation.blogList',
            href: getBlogPermalink(),
          },
          {
            text: 'navigation.blogPost',
            href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
          },
        ],
      },
    ],
    actions: [{ 
      text: 'navigation.contactUs', 
      variant: 'primary', 
      href: 'mailto:haberstock.stefanie@gmail.com' 
    }],
  };
}

// Backward compatibility - default English navigation
export const headerData = getHeaderData('en');

// Generate locale-aware footer data
export function getFooterData(locale: Locale = 'en') {
  const localizedPath = (path: string) => {
    if (locale === 'en') return getPermalink(path);
    return getPermalink(`/${locale}${path}`);
  };

  return {
    links: [
      {
        title: 'navigation.services',
        links: [
          { text: 'navigation.about', href: localizedPath('/about') },
          { text: 'navigation.services', href: localizedPath('/services') },
          { text: 'navigation.contactUs', href: 'mailto:haberstock.stefanie@gmail.com' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'navigation.home', href: localizedPath('/') },
      { text: 'navigation.about', href: localizedPath('/about') },
      { text: 'navigation.services', href: localizedPath('/services') },
      { text: 'navigation.blog', href: localizedPath('/blog') },
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

// Backward compatibility - default English footer
export const footerData = getFooterData('en');
