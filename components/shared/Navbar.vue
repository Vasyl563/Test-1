<template>
  <header class="bg-white shadow-xl h-16 flex justify-between items-stretch text-2xl pr-10 max-[530px]:text-xl max-[450px]:pr-1">
    <nuxt-link
      to="/"
      class="inline-flex items-center h-full px-10 text-orange-500 font-bold max-[530px]:px-2"
    >
      {{ $t('navbar.home') }}
    </nuxt-link>
    <div class="flex items-center gap-1">
      <nuxt-link
        to="/search-meals"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white max-[450px]:px-1"
      >
        {{ $t('navbar.search') }}
      </nuxt-link>
      <nuxt-link
        to="/meals-by-letter"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white max-[450px]:px-1"
      >
        {{ $t('navbar.mealsByLetter') }}
      </nuxt-link>
      <div class="flex">
        <button
          class="inline-flex items-center mr-2 px-2 h-full transition-colors hover:bg-orange-500 hover:text-white max-[450px]:px-1"
          @click="changeLocale('en')"
        >
          en
        </button>
        <button
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white max-[450px]:px-1"
          @click="changeLocale('ua')"
        >
          ua
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const changeLocale = (code) => {
  locale.value = code;
};
</script>





