<template>
  <Navbar />
  <div class="px-40">
    <h1 class="text-5xl font-bold mb-7 text-orange-500 pt-10">
      Search Meals by Ingredient
    </h1>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for ingredient"
      class="rounded border-2 bg-white border-gray-300 focus:ring-orange-500 focus:border-orange-500 w-full py-5 mb-5 input-focus"
      @input="searchIngredients"
    >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <nuxt-link
        v-for="ingredient in filteredIngredients"
        :key="ingredient.idIngredient"
        :to="`/meal/${encodeURIComponent(ingredient.strIngredient)}`"
        class="rounded-lg border-2 shadow-xl px-4 py-5 font-bold text-3xl mb-2"
        @click="openIngredient(ingredient)"
      >
        {{ ingredient.strIngredient }}
      </nuxt-link>
    </div>
    <div v-if="meals.length > 0">
      <h2 class="text-2xl font-bold mt-4">
        Meals with {{ selectedIngredient }}
      </h2>
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
      >
        {{ meal.strMeal }}
      </div>
    </div>
    <div v-else>
      <p>No meals found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const meals = ref([]);
const ingredients = ref([]);
const searchQuery = ref('');

async function fetchIngredients() {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );
    ingredients.value = response.data.meals || [];
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    ingredients.value = [];
  }
}

async function searchMealsByIngredient(ingredient) {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    meals.value = response.data.meals || [];
  } catch (error) {
    console.error('Error fetching meals:', error);
    meals.value = [];
  }
}

function searchIngredients() {
  if (!searchQuery.value) {
    meals.value = [];
    return;
  }
  const searchTerm = searchQuery.value.toLowerCase();
  meals.value = ingredients.value.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(searchTerm)
  );
}
fetchIngredients();

const filteredIngredients = computed(() =>
  ingredients.value.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
const selectedIngredient = ref(null);

function openIngredient(ingredient) {
  selectedIngredient.value = ingredient.strIngredient;
  searchMealsByIngredient(ingredient.strIngredient);
}
</script>

<style>
.input-focus:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5);
  border-color:rgb(249 115 22);
}
</style>
