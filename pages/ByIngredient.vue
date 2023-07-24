<template>
  <nuxt-link
    :to="`/meals/ingredient/${ingredientName}`"
    class="rounded-lg border-2 shadow-xl px-4 py-5 font-bold text-3xl mb-2"
  >
    {{ ingredientName }}
  </nuxt-link>
  <h1>dkm</h1>
</template>

<script setup>
const { ingredientName } = props;
</script>

