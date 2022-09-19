<script setup lang="ts">
import { ref, computed } from 'vue';
import { useReceiptService } from '../services/receiptService';

const search = ref('');
const receiptService = useReceiptService();
const receiptsFilterBySearch = computed(() => receiptService.receipts.filter(receipt =>
  receipt.fields.name.toLowerCase().includes(search.value.toLowerCase())
));

receiptService.getAll();
</script>

<template>
  <main class="py-6 space-y-6">
    <h1 class="px-6 text-[28px] font-extrabold">Que mange-t'on aujourd'hui ?</h1>
    <label class="block relative mx-6">
      <span class="absolute inset-y-0 left-4 flex">
        <svg
          class="w-6 h-6 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        >
        <path
          stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
        </svg>
      </span>
      <input
        v-model="search"
        type="text"
        placeholder="Trouver une recette"
        class="w-full h-14 pl-14 pr-6 bg-[#F6F7FB] rounded-[16px]"
      />
    </label>
    <section>
      <h2 class="px-6 text-[20px] font-bold">Dernières recettes</h2>
      <ul class="px-3 pt-4 space-y-4">
        <li v-for="receipt in receiptsFilterBySearch">
          <a href="#" class="block p-3 rounded-[20px] shadow-xl">
            <figure class="flex items-center space-x-5">
              <img
                :src="receipt.fields.thumbnail[0].url"
                class="w-[100px] flex-none aspect-[5/6] object-cover bg-neutral-900 rounded-[12px]"
              />
              <figcaption class="flex-1">
                <h3 class="text-[20px] font-bold">{{ receipt.fields.name }}</h3>
                <p class="mt-1.5 mb-2.5 text-[14px] text-neutral-500">
                  {{ receipt.fields.ingredients.length }} Ingrédients
                </p>
                <div class="flex space-x-4 text-[12px] font-semibold">
                  <p>⏱ {{ receipt.fields.duration / 60 }} Min</p>
                  <p>{{ receipt.fields.difficulty }}</p>
                </div>
              </figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>