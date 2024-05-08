<script setup>
defineProps({
  title: String,
  company: String,
  city: String,
  isAdded: Boolean,
  onClickAdd: Function
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-200 rounded-2xl px-11 py-8 cursor-pointer transition hover:-translate-y-1 hover:shadow-lg"
  >
    <img
      @click="onClickAdd"
      :src="!isAdded ? '/mark.png' : '/mark-2.png'"
      alt="mark-1"
      class="w-4 absolute top-4 left-4"
    />

    <div class="flex flex-wrap justify-between items-top gap-5">
      <div class="flex flex-col">
        <b class="text-lg">{{ title }}</b>
        <div class="mt-3">
          <span class="text-indigo-700">{{ company }}</span>
          <div class="flex flex-row gap-1 items-center mt-1">
            <img src="/mesto.png" alt="mesto" class="w-4 h-4" />
            <span>{{ city }}</span>
          </div>
        </div>
      </div>
      <div>
        <button
          class="py-2 px-3 text-gray-900 bg-white border border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-none rounded-xl text-sm"
        >
          Откликнуться
        </button>
      </div>
    </div>
  </div>
</template>
