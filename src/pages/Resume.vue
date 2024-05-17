<script setup>
import DoResume from '../components/DoResume.vue'

const onClickPublic = () => {
  alert('Ваше резюме отправлено на проверку, позже оно будет размещено в системе!')
}
</script>

<template>
  <div id="top" class="px-60 pt-36 flex flex-col flex-wrap gap-3 mb-10">
    <span class="text-4xl font-bold">Публикация резюме</span>

    <div class="mt-10 flex items-center gap-8 transition hover:translate-x-1.5 duration-700">
      <img class="w-6" src="/black_arrow.png" alt="arrow" />
      <div>
        <span class="font-medium">
          <span class="text-indigo-600 font-semibold"
            >Здесь Вы можете создать профессиональное резюме, которое поможет Вам выделиться среди
            других кандидатов и привлечь внимание потенциальных работодателей.</span
          >
          Мы предлагаем удобный инструмент для заполнения информации о вашем образовании, опыте
          работы, навыках и достижениях. Заполните все обязательные поля и укажите контакты для
          обратной связи.</span
        >
      </div>
    </div>
    <div class="mt-10 flex items-center gap-8 transition hover:translate-x-1.5 duration-700">
      <img class="w-6" src="/black_arrow.png" alt="arrow" />
      <div>
        <span class="font-medium">
          <span class="text-indigo-600 font-semibold"
            >Убедитесь в том, что вся предоставленная информация верна и актуальна.</span
          >
          После публикации резюме, у Вас появится возможность откликаться на вакансии, доступные в
          системе. При отклике Ваше резюме будет направлено соответствующему работодателю, после
          чего с Вами свяжутся.</span
        >
      </div>
    </div>
    <span class="mt-14 text-4xl font-bold">Форма для заполнения</span>
  </div>
  <div
    class="fixed w-11 opacity-70 bottom-16 right-16 transition hover:-translate-y-4 hover:opacity-100 duration-700"
  >
    <a href="#top">
      <img class="rotate-90" src="/new_arrow.png" alt="" />
    </a>
  </div>
  <DoResume :onClickPublic="onClickPublic" />
</template>
