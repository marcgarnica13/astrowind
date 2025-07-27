import { localizePath, interpolate } from "astro-i18next";

export type Locale = 'en' | 'de' | 'es';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'de', 'es'];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
};

/**
 * Get localized path for current locale
 */
export function getLocalizedPath(path: string, locale?: string): string {
  return localizePath(path, locale);
}

/**
 * Get current locale from URL
 */
export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  
  return defaultLocale;
}

/**
 * Remove locale from URL path
 */
export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

/**
 * Get alternate language URLs for current page
 */
export function getAlternateUrls(currentPath: string, currentLocale: Locale): Record<Locale, string> {
  const cleanPath = removeLocaleFromPath(currentPath);
  const alternates: Record<string, string> = {};
  
  locales.forEach(locale => {
    if (locale === defaultLocale) {
      alternates[locale] = cleanPath || '/';
    } else {
      alternates[locale] = `/${locale}${cleanPath}` || `/${locale}`;
    }
  });
  
  return alternates as Record<Locale, string>;
}

/**
 * Check if given locale is supported
 */
export function isSupportedLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Get locale-specific route based on route mapping
 */
export function getLocalizedRoute(route: string, locale: Locale): string {
  const routeMap: Record<Locale, Record<string, string>> = {
    en: {},
    de: {
      'about': 'ueber-uns',
      'services': 'dienstleistungen',
      'policies': 'richtlinien',
    },
    es: {
      'about': 'acerca-de',
      'services': 'servicios',
      'policies': 'politicas',
    }
  };
  
  return routeMap[locale][route] || route;
}

/**
 * Format date according to locale
 */
export function formatDate(date: Date, locale: Locale): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    de: 'de-DE',
    es: 'es-ES',
  };
  
  return new Intl.DateTimeFormat(localeMap[locale], options).format(date);
}

/**
 * Get reading time text for locale
 */
export function getReadingTimeText(minutes: number, locale: Locale): string {
  const texts: Record<Locale, string> = {
    en: `${minutes} min read`,
    de: `${minutes} Min. Lesezeit`,
    es: `${minutes} min de lectura`,
  };
  
  return texts[locale];
}

/**
 * Interpolate translation with variables
 */
export function t(key: string, options?: Record<string, any>): string {
  return interpolate(key, options);
}