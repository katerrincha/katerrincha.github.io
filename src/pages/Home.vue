<script setup>
//import Carousel from '../components/Carousel.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div id="main_img" class="bg-cover bg-center bg-[url('/job.jpg')]">
      <div class="flex flex-col mx-56 mb-32 mt-48 px-24 py-16 w-1/2 gap-6 bg-white/10 rounded-3xl">
        <h1
          class="text-3xl font-bold text-indigo-800 uppercase transition hover:-translate-y-1 duration-700"
        >
          Обратитесь к <span class="text-gray-600">IT PROFI</span> сегодня и начните поиск
          идеального кандидата для вашей команды
        </h1>
        <span class="text-gray-500">
          Платформа поиска работы и подбора квалифицированных сотрудников, ваш путь к реализации
          профессиональных навыков и амбиций</span
        >
        <div class="flex flex-row gap-12 flex-wrap mt-12">
          <RouterLink to="/employer">
            <div
              class="flex justify-between items-center gap-4 text-lg font-bold transition hover:translate-x-2 duration-700"
            >
              <span class="text-white"> Ищу сотрудника </span>
              <img class="w-6" src="/white_arrow.png" alt="white_arrow" />
            </div>
          </RouterLink>

          <RouterLink to="/vacancy">
            <div
              class="flex justify-between items-center gap-4 text-lg font-bold transition hover:translate-x-2 duration-700"
            >
              <span class="text-white"> Ищу работу </span>
              <img class="w-6" src="/white_arrow.png" alt="white_arrow" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-4 grid-rows-1 px-56 pt-8 gap-4">
      <div
        class="col-span-2 grid place-content-between text-gray-700 border-2 border-gray-700 space-y-14 bg-white rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indig0-50 hover:text-white hover:bg-indigo-500 hover:border-0 duration-700"
      >
        <h1 class="text-4xl font-bold">9 лет</h1>
        <h2 class="text-xl font-bold">эффективно помогаем работодателям и сотрудникам</h2>
      </div>
      <div
        class="col-span-1 grid place-content-between text-indigo-500 border-2 border-indigo-500 space-y-14 bg-white rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indig0-50 hover:text-white hover:bg-indigo-500 hover:border-0 duration-700"
      >
        <h1 class="text-4xl font-bold">> 11 000</h1>
        <h2 class="text-xl font-bold">клиентов нашли любимую работу</h2>
      </div>
      <div
        class="col-span-1 grid place-content-between text-indigo-500 border-2 border-indigo-500 space-y-14 bg-white rounded-3xl px-10 py-10 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indig0-50 hover:text-white hover:bg-indigo-500 hover:border-0 duration-700"
      >
        <h1 class="text-4xl font-bold">8 714</h1>
        <h2 class="text-xl font-bold">актуальных вакансий на сайте</h2>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center px-56 gap-6 pt-10">
      <div class="flex flex-col w-2/3">
        <h1 class="text-4xl font-bold transition">О нас</h1>
        <p class="transition font-normal pt-10">
          Основанная в 2015 году, IT PROFI быстро стала
          <span class="font-bold text-indigo-600"
            >ведущей рекрутинговой компанией в сфере информационных технологий</span
          >. Наша команда высококвалифицированных экспертов, обладающих глубоким пониманием отрасли,
          поставила перед собой амбициозную цель - помогать компаниям находить и привлекать лучшие
          IT-таланты, которые станут движущей силой для роста и процветания их бизнеса. <br /><br />
          Начав с небольшого офиса в Томске, мы быстро расширили свое присутствие по всей России,
          открыв филиалы в ключевых технологических центрах. Наша репутация надежного и эффективного
          партнера привлекла внимание ведущих компаний в сфере IT, которые доверяют нам решение
          своих кадровых задач. <br /><br />
          Сегодня IT PROFI предлагает
          <span class="font-bold text-indigo-600">полный спектр рекрутинговых услуг</span>, от
          поиска и подбора квалифицированных специалистов до управления всем процессом найма. Мы
          гордимся тем, что помогаем нашим клиентам находить именно тех профессионалов, которые
          вдохновляют, инновируют и приводят их бизнес к новым высотам.
        </p>
      </div>
      <RouterLink to="/employer">
        <div
          class="flex justify-between items-center text-lg gap-6 py-4 px-6 cursor-pointer text-indigo-500 font-bold transition hover:translate-x-2 hover:text-indigo-800 duration-700"
        >
          <span> Опубликовать вакансию </span>
          <img class="w-6" src="/blue_arrow.png" alt="white_arrow" />
        </div>
      </RouterLink>
    </div>

    <div class="flex flex-col flex-wrap gap-4 px-56 mb-20 pt-10">
      <span class="text-4xl font-bold">Почему IT PROFI?</span>
      <div class="flex flex-row gap-10 pt-8">
        <div class="flex items-center gap-8 transition hover:translate-x-1.5 duration-700">
          <img class="w-6" src="/black_arrow.png" alt="arrow" />
          <div>
            <span class="font-medium">Широкая база кандидатов<br /><br /></span>
            <span class="text-indigo-600">
              Мы имеем доступ к обширной сети специалистов по всему миру. Это позволяет нам найти и
              привлечь лучших кандидатов, соответствующих вашим требованиям.</span
            >
          </div>
        </div>

        <div class="flex items-center gap-8 transition hover:translate-x-1.5 duration-700">
          <img class="w-6" src="/black_arrow.png" alt="arrow" />
          <div>
            <span class="font-medium">Сокращение времени на найм<br /><br /></span>
            <span class="text-indigo-600">
              Благодаря эффективному отбору наша платформа помогает сократить время на заполнение
              вакансий, что позволяет компаниям быстрее реагировать на изменения на рынке
              труда.</span
            >
          </div>
        </div>

        <div class="flex items-center gap-8 transition hover:translate-x-1.5 duration-700">
          <img class="w-6" src="/black_arrow.png" alt="arrow" />
          <div>
            <span class="font-medium">Быстрый и эффективный подбор персонала<br /><br /></span>
            <span class="text-indigo-600">
              Мы понимаем, что время - самый ценный ресурс для вашего бизнеса. С нами Вы можете быть
              уверены, что Ваша вакансия будет заполнена квалифицированным специалистом в кратчайшие
              сроки.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed w-11 opacity-70 bottom-16 right-16 transition hover:-translate-y-4 hover:opacity-100 duration-700"
    >
      <a href="#main_img">
        <img class="rotate-90" src="/new_arrow.png" alt="" />
      </a>
    </div>
  </div>
</template>
