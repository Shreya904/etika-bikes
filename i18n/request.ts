import { getRequestConfig } from "next-intl/server";
import { locales } from "../i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate locale
  if (!locale || !locales.includes(locale as any)) {
    locale = "es";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
