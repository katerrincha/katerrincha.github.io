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
    <h1 class="text-2xl mb-6 text-center font-bold text-gray-700">{{ title }}</h1>
    <div class="space-x-6">
      <span class="text-lg font-medium text-gray-700">Организация:</span>
      <span>{{ company }}</span>
    </div>
    <div class="space-x-6">
      <span class="text-lg font-medium text-gray-700">Город:</span>
      <span>{{ city }}</span>
    </div>
    <div class="space-y-6">
      <span class="text-lg font-medium text-gray-700">Описание места работы: <br /> </span>
      <span>{{ company }}</span>
    </div>
    <div class="">
      <span class="text-lg font-medium text-gray-700">Обязанности: <br /></span>
      <span>{{ company }}</span>
    </div>
    <div class="">
      <span class="text-lg font-medium text-gray-700">Требования: <br /></span>
      <span>{{ company }}</span>
    </div>
    <div class="">
      <span class="text-lg font-medium text-gray-700">Условия работы: <br /></span>
      <span>{{ company }}</span>
    </div>
    <div class="">
      <span class="text-lg font-medium text-gray-700">Контакты: <br /></span>
      <span>{{ company }}</span>
    </div>

    <div>
      <button
        class="mt-10 py-2.5 px-5 text-center text-gray-800 font-medium bg-white border border-gray-400 hover:bg-indigo-500 hover:text-white hover:border-none rounded-xl text-sm duration-500"
      >
        Откликнуться
      </button>
    </div>
  </div>
</template>
