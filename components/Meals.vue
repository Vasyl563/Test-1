<template>
  <div class="meal-card">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="meal-image"
    >
    <p class="meal-description">
      {{ meal.strMeal }}
    </p>
    <a
      :href="meal.strYoutube"
      target="_blank"
      class="meal-button"
    >
      Watch on YouTube
    </a>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { meal } = defineProps(["meal"]);
</script>

<style>
/* Стилізуйте компонент на ваш розсуд */
</style>
