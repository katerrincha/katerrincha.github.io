<script setup>
import Card from './Card.vue'
defineProps({
  items: Array
})

const onClickAdd = () => {
  alert('Вакансия добавлена в избранное!')
}
const onClickRespond = () => {
  alert('Вы откликнулись на вакансию, ожидайте ответ!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :company="item.company"
      :city="item.city"
      :isAdded="item.isAdded"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
  </div>
</template>
