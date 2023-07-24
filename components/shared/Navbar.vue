<template>
  <header class="bg-white shadow-xl h-16 flex justify-between items-stretch text-2xl pr-10">
    <nuxt-link
      to="/"
      class="inline-flex items-center h-full px-10 text-orange-500 font-bold"
    >
      Home
    </nuxt-link>
    <div class="flex items-center gap-1">
      <nuxt-link
        to="/SearchMeals"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </nuxt-link>
      <nuxt-link
        to="/MealsByLetter"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Letter
      </nuxt-link>
      <nuxt-link
        to="/MealsByIngredients"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Ingredients
      </nuxt-link>
    </div>
  </header>
</template>
