<script setup>
import Card from './Card.vue'

const onClickAdd = () => {
  alert('Вакансия добавлена в избранное!')
}
const onClickRespond = () => {
  alert('Поздравляем, Вы откликнулись на вакансию!')
}
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      title="Аналитик данных"
      company="Совкомбанк технологии"
      city="Томск"
      :is-added="true"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="PHP разработчик"
      company="Совкомбанк технологии"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="Vue разработчик"
      company="Яндекс"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="1C разработчик"
      company="Совкомбанк технологии"
      city="Москва"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="React разработчик"
      company="Сбербанк"
      city="Санкт-Петербург"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="React разработчик"
      company="Яндекс"
      city="Москва"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="Golang разработчик"
      company="Совкомбанк технологии"
      city="Москва"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="IOS разработчик"
      company="Совкомбанк технологии"
      city="Казань"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="Android разработчик"
      company="Совкомбанк технологии"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="JAVA разработчик"
      company="Яндекс"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="1C аналитик"
      company="Авито"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="Системный аналитик"
      company="Авито"
      city="Казань"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="PHP разработчик"
      company="Авито"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="IOS разработчик"
      company="Сбербанк"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="Android разработчик"
      company="Сбербанк"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="Vue разработчик"
      company="Яндекс"
      city="Санкт-Петербург"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="1C разработчик"
      company="Газпромбанк"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
    <Card
      title="IOS разработчик"
      company="Сбербанк"
      city="Санкт-Петербург"
      :is-added="false"
      :onClickAdd="onClickAdd"
      :onClickRespond="onClickRespond"
    />
  </div>
</template>
