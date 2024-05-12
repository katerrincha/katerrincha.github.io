<script setup>
import DoVacancy from '../components/DoVacancy.vue'

const onClickPublic = () => {
  alert('Поздравляем, ваша вакансия размещена в системе!')
}
</script>

<template>
  <div class="px-56 pt-36 flex flex-col flex-wrap gap-3 mb-10">
    <span class="text-4xl font-bold">Регистрация вакансий</span>
    <div class="grid grid-cols-4 grid-rows-1 gap-4 mt-8">
      <div
        class="row-span-1 col-span-2 grid place-content-between gap-5 text-gray-700 bg-white border-2 border-gray-700 rounded-3xl px-8 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <h1 class="text-3xl font-bold space">01.</h1>
        <h2 class="text-xl font-bold">
          заполните все обязательные поля в форме ниже, предоставьте максимально полное и точное
          описание должности и требований к кандидатам
        </h2>
      </div>

      <div
        class="row-span-1 col-span-1 grid place-content-between gap-5 text-indigo-500 bg-white border-2 border-indigo-500 rounded-3xl px-8 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <h1 class="text-3xl font-bold">02.</h1>
        <h2 class="text-xl font-bold">
          укажите контактные данные для связи с потенциальными кандидатами
        </h2>
      </div>
      <div
        class="row-span-1 col-span-1 grid place-content-between gap-5 text-indigo-500 bg-white border-2 border-indigo-500 rounded-3xl px-8 py-8 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white hover:border-0 duration-700"
      >
        <h1 class="text-3xl font-bold">03.</h1>
        <h2 class="text-xl font-bold">
          нажмите "Разместить вакансию", чтобы завершить регистрацию
        </h2>
      </div>
    </div>
    <div class="mt-10 flex items-center gap-8 transition hover:translate-x-1.5 duration-700">
      <img class="w-6" src="/black_arrow.png" alt="arrow" />
      <div>
        <span class="font-medium">
          <span class="text-indigo-600 font-semibold"
            >Убедитесь в том, что вся предоставленная информация верна и актуальна.</span
          >
          После размещения вакансии, она будет доступна для просмотра и отклика со стороны
          кандидатов.</span
        >
      </div>
    </div>
    <span class="mt-14 text-4xl font-bold">Форма для заполнения</span>
  </div>
  <DoVacancy :onClickPublic="onClickPublic" />
</template>
