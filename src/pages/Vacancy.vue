<script setup>
import CardList from '../components/CardList.vue'
</script>

<template>
  <div class="p-10">
    <div class="flex flex-wrap justify-between items-center gap-4">
      <h2 class="text-2xl font-bold">Все вакансии</h2>
      <div class="flex flex-wrap gap-5">
        <select class="py-2 px-3 border rounded-md outline-none">
          <option>По названию</option>
          <option>По организации</option>
          <option>По городу</option>
        </select>

        <div class="relative">
          <img class="absolute left-4 top-3 w-5 opacity-40" src="/search.png" alt="search" />
          <input
            class="border rounded-md py-2 pl-11 pr-6 outline-none focus:border-gray-400"
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <CardList />
    </div>
  </div>
</template>
