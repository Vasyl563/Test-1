import { createI18n } from "vue-i18n";
import { defineNuxtPlugin } from "#app";

import en from "~/locales/en";
import ua from "~/locales/ua";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: "en",
    locale: "en",
    messages: {
      en,
      ua,
    },
  });

  vueApp.use(i18n);
});
