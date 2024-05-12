<script setup>
defineProps({
  title: String,
  company: String,
  city: String,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickRespond: Function
})
</script>

<template>
  <div
    class="relative bg-white border-2 border-gray-400 rounded-2xl px-11 py-8 cursor-pointer transition hover:-translate-y-1 hover:shadow-xl hover:bg-gray-200 hover:border-0 duration-700"
  >
    <img @click="onClickAdd" src="/mark.png" alt="mark-1" class="w-4 absolute top-4 left-4" />
    <!--@click="onClickAdd"-->
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
          @click="onClickRespond"
          class="mt-14 py-2.5 px-5 text-center text-gray-800 font-medium bg-white border border-gray-400 hover:bg-indigo-500 hover:text-white hover:border-none rounded-xl text-sm duration-500"
        >
          Откликнуться
        </button>
      </div>
    </div>
  </div>
</template>
