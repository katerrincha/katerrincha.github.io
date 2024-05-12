<script setup>
import CardList from '../components/CardList.vue'
</script>

<template>
  <div class="px-56 py-24">
    <div class="mb-6 bg-indigo-50 rounded-3xl hover:shadow-xl transition hover:-translate-y-1">
      <div class="grid grid-rows-1 grid-cols-3 gap-10">
        <span class="col-span-1 font-bold text-3xl my-10 ml-10"
          >Найдите идеальную работу с помощью нашего поиска</span
        >
        <span class="col-span-2 my-10 mr-10"
          ><span class="font-bold text-indigo-500 font"
            >Используйте удобный инструмент поиска для фильтрации
          </span>
          вакансий по названию, организации и местоположению. Это поможет вам быстро найти вакансии,
          соответствующие вашим интересам и навыкам. Каждая вакансия содержит подробное описание
          обязанностей, требований к кандидатам и условий работы. Вы сможете ознакомиться с
          ключевыми задачами, которые вам предстоит решать, и узнать больше о том, что делает эту
          компанию особенной.</span
        >
      </div>
    </div>

    <div class="grid grid-rows-2 grid-flow-col gap-5 mb-20">
      <div
        class="row-span-1 col-span-2 text-indigo-400 bg-white border-2 border-indigo-400 rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-400 hover:text-white"
      >
        <span class="font-bold text-3xl leading-10"
          >Поиск разнообразных и интересных возможностей для вашего профессионального роста и
          развития карьеры</span
        >
      </div>

      <div
        class="row-span-1 col-span-1 grid place-content-between text-white bg-indigo-400 rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-white border-2 hover:border-indigo-500 hover:text-indigo-500"
      >
        <h1 class="text-4xl font-bold">2</h1>
        <h2 class="text-2xl font-bold">найдите интересующую вас вакансию</h2>
      </div>
      <div
        class="row-span-1 col-span-1 grid place-content-between text-white gap-4 bg-indigo-400 rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-white border-2 hover:border-indigo-500 hover:text-indigo-500"
      >
        <h1 class="text-4xl font-bold">3</h1>
        <h2 class="text-2xl font-bold">откликнитесь на предложение</h2>
      </div>
      <div
        class="row-span-1 col-span-1 grid place-content-between text-indigo-400 bg-white border-2 border-indigo-400 rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-400 hover:text-white"
      >
        <h1 class="text-4xl font-bold space">1</h1>
        <h2 class="text-2xl font-bold">разместите резюме на сайте</h2>
      </div>
      <div
        class="row-span-1 col-span-1 grid place-content-between text-white gap-4 bg-indigo-400 rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-white border-2 hover:border-indigo-500 hover:text-indigo-500"
      >
        <h1 class="text-4xl font-bold">4</h1>
        <h2 class="text-2xl font-bold">ожидайте ответа от работодателя</h2>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center gap-6 pb-10 mb-16">
      <span class="w-2/3">
        Вы можете легко и быстро откликнуться на интересующие вас вакансии,
        <span class="font-bold text-indigo-500 font">отправив свое резюме</span> и сопроводительное
        письмо прямо через нашу платформу. Это упростит процесс поиска работы и повысит ваши шансы
        на успешное трудоустройство.
      </span>
      <RouterLink to="/employer">
        <div
          class="flex justify-between items-center gap-6 py-4 px-6 text-lg cursor-pointer text-indigo-600 font-semibold transition hover:translate-x-1.5"
        >
          <span> Разместить резюме </span>
          <img class="w-6" src="/blue_arrow.png" alt="white_arrow" />
        </div>
      </RouterLink>
    </div>

    <div class="flex flex-wrap justify-between items-center gap-4">
      <h2 class="text-4xl font-bold">Все вакансии</h2>
      <div class="flex flex-wrap gap-5">
        <select class="py-2 px-3 border rounded-md outline-none">
          <option>По названию</option>
          <option>По организации</option>
          <option>По местоположению</option>
        </select>

        <div class="relative">
          <img class="absolute left-4 top-3 w-5 opacity-40" src="/search.png" alt="search" />
          <input
            class="border rounded-md py-2 pl-11 pr-6 outline-none focus:border-gray-400"
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <CardList />
    </div>
  </div>
</template>
