<template>
  <nuxt-link
    :href="href"
    target="_blank"
    class="px-3 py-3 mb-5 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
  >
    <slot>YouTube</slot>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>
