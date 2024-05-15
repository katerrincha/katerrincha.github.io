<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'

const items = ref([]) //state хранит все вакансии (массив)

const filters = reactive({
  //храним фильтры
  sortBy: '',
  searchQ: ''
})

const onChangeSelect = (event) => {
  // две функции следят за изменением селекта и поиска
  filters.sortBy = event.target.value
}
const onChangeSearch = (event) => {
  filters.searchQ = event.target.value
}

const fetchItems = async () => {
  // при любом изменении фильтра или поиска выполняет запрос на бэк
  try {
    const params = {
      sortBy: filters.sortBy
    }
    if (filters.searchQ) {
      params.title = `*${filters.searchQ}*`
    }
    const { data } = await axios.get(`https://d6f93ca968f408cd.mokky.dev/items`, {
      params
    })
    items.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchItems)
watch(filters, fetchItems)
</script>

<template>
  <div class="px-56 pt-36">
    <h1 class="font-bold text-4xl">Идеальная вакансия ждет Вас - просто найдите ее здесь</h1>
    <div class="grid grid-rows-2 grid-cols-4 gap-4 mt-12 mb-16">
      <div
        class="row-span-1 col-span-2 grid place-content-between text-gray-700 bg-white border-2 border-gray-700 rounded-3xl px-8 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <h1 class="text-3xl font-bold space">01.</h1>
        <h2 class="text-xl font-bold">разместите свое резюме на платформе</h2>
      </div>

      <div
        class="row-span-1 col-span-1 grid place-content-between text-indigo-500 bg-white border-2 border-indigo-500 rounded-3xl px-8 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <h1 class="text-3xl font-bold">02.</h1>
        <h2 class="text-xl font-bold">найдите подходящую вакансию</h2>
      </div>

      <div
        class="row-span-1 col-span-1 grid place-content-between text-indigo-500 bg-white border-2 border-indigo-500 rounded-3xl px-8 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <h1 class="text-3xl font-bold">03.</h1>
        <h2 class="text-xl font-bold">откликнитесь на предложение</h2>
      </div>

      <div
        class="row-span-1 col-span-1 grid place-content-between text-indigo-500 bg-white border-2 border-indigo-500 rounded-3xl px-8 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <h1 class="text-3xl font-bold">04.</h1>
        <h2 class="text-xl font-bold">ожидайте ответ от работодателя</h2>
      </div>

      <div
        class="row-span-1 col-span-3 text-gray-600 bg-white border-2 border-gray-600 rounded-3xl px-10 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <span class="font-bold"
          >Используя инструмент фильтрации, Вы быстрее найдете вакансии, соответствующие Вашим
          интересам и навыкам. <br /><br />Каждая вакансия содержит подробное описание условий, где
          Вы сможете ознакомиться с ключевыми задачами, которые предстоит решать, и узнать больше о
          том, что делает эту компанию особенной.</span
        >
      </div>
    </div>

    <div class="flex flex-row justify-between items-center gap-6 mb-16">
      <span class="w-2/3">
        Вы можете легко и быстро откликнуться на интересующие вас вакансии,
        <span class="font-bold text-indigo-500 font">отправив свое резюме</span> и сопроводительное
        письмо прямо через нашу платформу. Это упростит процесс поиска работы и повысит ваши шансы
        на успешное трудоустройство.
      </span>
      <RouterLink to="/resume">
        <div
          class="flex justify-between items-center gap-6 py-4 px-6 text-indigo-500 text-lg font-bold transition hover:translate-x-1.5 hover:text-indigo-800 duration-700"
        >
          <span> Разместить резюме </span>
          <img class="w-6" src="/blue_arrow.png" alt="white_arrow" />
        </div>
      </RouterLink>
    </div>

    <div class="flex flex-wrap justify-between items-center gap-4">
      <h2 class="text-4xl font-bold mb-4">Все вакансии</h2>
      <div class="flex flex-wrap gap-5">
        <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
          <option value="title">По названию</option>
          <option value="company">По организации</option>
          <option value="city">По городу</option>
        </select>

        <div class="relative">
          <img class="absolute left-4 top-3 w-5 opacity-40" src="/search.png" alt="search" />
          <input
            @input="onChangeSearch"
            class="border rounded-md py-2 pl-11 pr-6 outline-none focus:border-gray-400"
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>
    <div class="mt-10 mb-16">
      <CardList :items="items" />
    </div>
  </div>
</template>
