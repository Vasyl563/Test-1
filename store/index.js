import { defineStore } from "pinia";

const useMainStore = defineStore({
  id: "main-store",
  state: () => ({message: 'hello'}),
  getters: {},
  actions: {},
});

export default useMainStore;

