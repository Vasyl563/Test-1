<template>
  <Navbar />
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Ingredients
    </h1>
  </div>
  <div class="px-8">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        href="#"
        class="block bg-white rounded p-3 mb-3 shadow"
        @click.prevent="openIngredient(ingredient)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { onMounted, ref } from "vue";
import { useRouter } from "@pinia/nuxt";
import axiosClient from "~/axiosClient";
import { useMainStore } from "~/store"; // Підставте свій шлях до вашого Pinia Store

const mainStore = useMainStore(); // Accessing the store instance

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients.value) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

async function openIngredient(ingredient) {
  mainStore.setIngredient(ingredient); // Використовуємо мутацію із стору
  await router.push({
    name: "MealsByIngredient",
    params: { ingredient: ingredient.stIngredient },
  });
}

onMounted(async () => {
  const { data } = await axiosClient.get("list.php?i=list");
  ingredients.value = data.meals;
});
</script>
