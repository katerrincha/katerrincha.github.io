<script setup>
import { inject } from 'vue'
import VacancyItem from './VacancyItem.vue'
defineProps({
  items: Array
})

const { cart, closeDrawer, removeFromDrawer } = inject('cardActions')
//const emit = defineEmits(['closeDrawer'])

//const emit = defineEmits(['onClickRemove'])

const onClickRespond = () => {
  alert('Вы откликнулись на вакансию, ожидайте ответ!')
}
</script>

<template>
  <div class="relative flex justify-center">
    <div class="fixed top-0 left-0 h-full w-full bg-black opacity-70 z-20"></div>
    <div class="bg-white w-1/2 h-5/6 fixed z-30 top-16 rounded-3xl p-14 overflow-y-auto">
      <div
        @click="
          () => {
            removeFromDrawer()
            closeDrawer()
          }
        "
        class="flex items-center gap-4 font-semibold transition hover:-translate-x-1.5 cursor-pointer hover:text-gray-900 duration-700"
      >
        <img class="w-5 rotate-180" src="/black_arrow.png" alt="black_arrow" />
        <h1>Вернуться</h1>
      </div>
      <VacancyItem
        v-for="item in cart"
        :key="item.id"
        :title="item.title"
        :company="item.company"
        :city="item.city"
      />
    </div>
  </div>
</template>
