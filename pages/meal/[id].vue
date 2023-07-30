<template>
  <Navbar />
  <div
    v-if="meal"
    class="bg-white rounded-lg px-96 py-7 max-[1400px]:px-60 max-[1250px]:px-40 max-[1000px]:px-16 max-[800px]:px-8 max-[800px]:py-5 max-[450px]:px-4 "
  >
    <h1 class="text-4xl font-bold py-4 text-orange-500">
      {{ meal.strMeal }}
    </h1>
    <div class="mt-4 flex items-center justify-center">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-lg shadow-md w-full "
      >
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-2xl py-10">
      <div class="text-2xl">
        <strong class="font-bold text-3xl">
          Category:
        </strong> {{ meal.strCategory }}
      </div>
      <div class="text-2xl">
        <strong class="font-bold text-3xl">
          Area:
        </strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold text-3xl">
          Tags:
        </strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3 text-2xl">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="text-2xl">
        <h2 class="text-3xl font-semibold mb-2">
          Ingredients
        </h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="text-2xl">
        <h2 class="text-3xl font-semibold mb-2">
          Measures
        </h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="my-10  text-2xl">
        <YouTubeButton :href="meal.strYoutube" />
        <nuxt-link
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from '#app';
const route = useRoute()

const meal = ref(null);

// eslint-disable-next-line no-unused-vars
const ingredients = computed(() => {
  if (!meal.value) return {};
  return Object.entries(meal.value)
    .filter(([key, value]) => key.includes('Ingredient') && value)
  // eslint-disable-next-line no-unused-vars
    .map(([key, value]) => value);
});

onMounted(async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + route.params.id);
  const data = await response.json();
  meal.value = data.meals[0];
})

</script>
