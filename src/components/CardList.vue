<script setup>
import Card from './Card.vue'

const onClickAdd = () => {
  alert('Вакансия добавлена в избранное!')
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
    />
    <Card
      title="PHP разработчик"
      company="Совкомбанк технологии"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="Vue разработчик"
      company="Яндекс"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="1C разработчик"
      company="Совкомбанк технологии"
      city="Москва"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="React разработчик"
      company="Сбербанк"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="React разработчик"
      company="Яндекс"
      city="Москва"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="Golang разработчик"
      company="Совкомбанк технологии"
      city="Москва"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="IOS разработчик"
      company="Совкомбанк технологии"
      city="Казань"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="Android разработчик"
      company="Совкомбанк технологии"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="JAVA разработчик"
      company="Яндекс"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="1C аналитик"
      company="Авито"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="Системный аналитик"
      company="Авито"
      city="Казань"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="PHP разработчик"
      company="Авито"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="IOS разработчик"
      company="Сбербанк"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
    <Card
      title="Android разработчик"
      company="Сбербанк"
      city="Томск"
      :is-added="false"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>
