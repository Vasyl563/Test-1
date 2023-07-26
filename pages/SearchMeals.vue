<template>
  <div>
    <Navbar />
    <div class="px-40 max-[1400px]:px-32 max-[1200px]:px-8">
      <h1 class="text-5xl font-bold mb-7 text-orange-500 pt-10 max-[800px]:text-4xl">
        Search Meals by Name
      </h1>
      <input
        v-model="mealsStore.searchQuery"
        type="text"
        placeholder="Search for meals"
        class="rounded border-2 bg-white border-gray-300 focus:ring-orange-500 focus:border-orange-500 w-full py-5 mb-5 input-focus"
        @input="searchMeals"
      >
      <div
        v-if="mealsStore.searchedMeals.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div
          v-for="meal in mealsStore.searchedMeals"
          :key="meal.idMeal"
          class="meal-card rounded hover:scale-105 transition-all"
        >
          <MealItem :meal="meal" />
        </div>
      </div>

      <div v-else>
        <p>No meals found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMealStore } from '~/store';
import MealItem from "~/components/views/MealItem.vue";

const mealsStore = useMealStore();

const searchMeals = () => {
  mealsStore.searchMeals(mealsStore.searchQuery)
    .catch(error => {
      console.error("Помилка при пошуку страв:", error);
    });
}


</script>

<style>
.input-focus:focus {
  outline: none;
  border: 3px solid rgba(239, 68, 68, 0.5);
  background-color: transparent;
}
</style>
