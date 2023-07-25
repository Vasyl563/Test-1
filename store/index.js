import { defineStore } from 'pinia';
import axiosClient from '~/axiosClient';

export const useMealStore = defineStore('Meal', {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: {}
  }),
  actions: {
    async searchMeals(keyword) {
      try {
        const {data} = await axiosClient.get(`search.php?s=${keyword}`);
        this.searchedMeals = data.meals || [];
      } catch (error) {
        console.error('Помилка при пошуку страв:', error);
        this.searchedMeals = [];
      }
    },

    async searchMealsByLetter(letter) {
      try {
        const {data} = await axiosClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        this.mealsByLetter = data.meals || [];
      } catch (error) {
        console.error('Error searching meals by letter:', error);
        this.mealsByLetter = [];
      }
    }
  }
});
