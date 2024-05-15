<script setup>
import VacancyItem from './VacancyItem.vue'
</script>

<template>
  <div class="relative flex justify-center">
    <div class="fixed top-0 left-0 h-full w-full bg-black opacity-70 z-20"></div>
    <div class="bg-white w-2/3 h-3/4 fixed z-30 top-32 rounded-3xl p-10">
      <div
        class="flex items-center gap-4 font-semibold text-sm transition hover:-translate-x-1.5 duration-700"
      >
        <img class="w-5 rotate-180" src="/black_arrow.png" alt="black_arrow" />
        <h1>Вернуться</h1>
      </div>
      <VacancyItem />
    </div>
  </div>
</template>
