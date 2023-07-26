<template>
  <nuxt-link
    :to="`/meal/${meal.idMeal}`"
    class="flex flex-col items-center bg-white shadow-xl rounded-xl hover:scale-105 transition-all m-5 max-[1270px]:mr-1"
  >
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl w-full h-[20rem] object-cover mb-2"
    >
    <div class="flex flex-col">
      <h1 class="font-bold text-2xl">
        {{ meal.strMeal }}
      </h1>
    </div>
    <p class="text-xl px-5 py-3">
      {{ truncatedInstructions }}
    </p>
    <YouTubeButton
      class=""
      :to="meal.strYoutube"
    >
      Watch on YouTube
    </YouTubeButton>
  </nuxt-link>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['meal']);

const truncateWords = (text, limit) => {
  const words = text?.split(' ');
  if (words.length <= limit) {
    return text;
  }
  return words.slice(0, limit).join(' ') + '...';
}

const truncatedInstructions = computed(() => truncateWords(props.meal.strInstructions, 20));
</script>

