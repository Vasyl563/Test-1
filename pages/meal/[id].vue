<template>
  <div class="bg-white rounded-lg p-4">
    <h1 class="text-xl font-semibold">
      {{ food.strMeal }}
    </h1>
    <div class="mt-4">
      <img
        :src="food.strMealThumb"
        :alt="food.strMeal"
        class="rounded-lg shadow-md w-full"
      >
    </div>
    <div class="mt-4">
      <h2 class="text-lg font-semibold">
        Ingredients:
      </h2>
      <ul class="mt-2">
        <li
          v-for="(ingredient, index) in ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const route = useRoute()

console.log(route.params)
const food = ref(null);
const mealId = 52772; // The meal ID you want to fetch
const ingredients = computed(() => {
  if (!food.value) return [];
  return Object.entries(food.value)
    .filter(([key, value]) => key.includes('Ingredient') && value)
  // eslint-disable-next-line no-unused-vars
    .map(([key, value]) => value);
});

(async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId);
  const data = await response.json();
  food.value = data.meals[0];
})();
</script>
