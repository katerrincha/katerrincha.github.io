<script setup>
defineProps({
  id: Number,
  title: String,
  company: String,
  city: String
})
</script>

<template>
  <div class="flex flex-col gap-4 pt-10">
    <h1 class="text-2xl font-bold text-gray-700">{{ title }}</h1>
    <h1>Организация:</h1>
    <span>{{ company }}</span>
    <span>описание места работы</span>
    <span>обязанности </span>
    <span>требования</span>
    <span>условия работы</span>

    <span>контакты:</span>
    <span>фио</span>
    <div>
      <button
        class="mt-14 py-2.5 px-5 text-center text-gray-800 font-medium bg-white border border-gray-400 hover:bg-indigo-500 hover:text-white hover:border-none rounded-xl text-sm duration-500"
      >
        Откликнуться
      </button>
    </div>
  </div>
</template>
