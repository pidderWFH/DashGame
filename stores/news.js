import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
 state: () => ({ count: 0 }),
 getters: {
   double: (state) => state.count * 2,
 },
 actions: {
   addCount() {
     this.count++;
   },
 },
});
