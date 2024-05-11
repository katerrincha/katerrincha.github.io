<script setup>
import DoVacancy from '../components/DoVacancy.vue'

const onClickPublic = () => {
  alert('Поздравляем, ваша вакансия размещена в системе!')
}
</script>

<template>
  <DoVacancy :onClickPublic="onClickPublic" />
</template>
