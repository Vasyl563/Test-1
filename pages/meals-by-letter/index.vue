<template>
  <Navbar />
  <div class="px-40 max-[1400px]:px-32 max-[1200px]:px-8">
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6 mt-5 cursor-pointer">
      <nuxt-link
        v-for="letter in letters"
        :key="letter"
        class="text-2xl w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all mr-2 mb-2"
        @click="searchMealsByLetter(letter)"
      >
        {{ letter }}
      </nuxt-link>
    </div>

    <div
      v-if="meals.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
        class=" hover:scale-105 transition-all"
      >
        <MealItem :meal="meal" />
      </div>
    </div>

    <div v-else>
      <p>No meals found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMealStore } from '~/store';
import MealItem from "~/components/views/MealItem.vue";


const mealsStore = useMealStore();


const meals = ref([]);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const searchMealsByLetter = async(letter) =>{
  try {
    await mealsStore.searchMealsByLetter(letter);
    meals.value = mealsStore.mealsByLetter;
  } catch (error) {
    console.error('Помилка при пошуку страв за літерою:', error);
    meals.value = [];
  }
}

searchMealsByLetter('A');
</script>

