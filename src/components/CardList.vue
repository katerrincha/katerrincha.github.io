<script setup>
import { inject } from 'vue'
import Card from './Card.vue'
defineProps({
  items: Array
})
const emit = defineEmits(['addToDrawer'])
//const { addToDrawer } = inject('cardActions')

const { openDrawer } = inject('cardActions')

const onClickRespond = () => {
  alert('Вы откликнулись на вакансию, ожидайте ответ!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :company="item.company"
      :city="item.city"
      :onClickRespond="onClickRespond"
      :onClickShow="
        () => {
          emit('addToDrawer', item)
          openDrawer()
        }
      "
    />
  </div>
</template>
