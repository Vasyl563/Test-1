<template>
  <div class="px-44 py-10 max-[1400px]:px-32 max-[1200px]:px-8 max-[1000px]:py-5">
    <h2 class="text-5xl font-bold mb-7 text-orange-500">
      {{ $t('home.randomMeals') }}
    </h2>
    <div class="grid grid-cols-3 max-[850px]:grid-cols-1">
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
        class="grid gap-4"
      >
        <MealItem :meal="meal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import MealItem from "~/components/views/MealItem.vue";

const meals = ref([]);

onMounted(async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    for (const item of [...Array(10)]) {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      meals.value.push(res.data?.meals[0]);
    }

  } catch (error) {
    console.error("Error fetching meals:", error);
  }
});
</script>
