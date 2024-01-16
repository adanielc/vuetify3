// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("users", {
  state: () => ({
    count: 13,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
