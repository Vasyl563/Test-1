<template>
  <div class="default-layout position-relative">
    <AppHeader />

    <main>
      <nuxt-page />
    </main>

    <AppFooter />
  </div>
</template>
<script setup>
import AppHeader from "~/components/general/AppHeader.vue";
import AppFooter from "~/components/general/AppFooter.vue";
</script>
