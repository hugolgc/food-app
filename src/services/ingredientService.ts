import { ref } from 'vue';
import { useServer } from '../servers';
import { defineStore as useService } from 'pinia';
import type { Ingredient } from '../interfaces/ingredient';

export const useIngredientService = useService('ingredient', () => {
  const ingredientServer = useServer('ingredients');
  const ingredients = ref<Ingredient[]>([]);

  function getAll(): void {
    ingredientServer.get<{ records: Ingredient[] }>('')
    .then(({ records }) => ingredients.value = records)
    .catch(e => console.error(e));
  }

  return { ingredients, getAll }
});