<script setup>
import Carousel from '../components/Carousel.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <!--<Carousel />-->
    <div class="bg-cover bg-center h-auto bg-[url('/job.jpg')]">
      <div class="flex flex-col mx-28 my-32 px-16 py-16 w-1/2 gap-12 bg-white/10 rounded-2xl">
        <h1 class="text-3xl font-bold text-indigo-800 uppercase transition hover:-translate-y-1">
          Обратитесь к <span class="text-gray-600">IT PROFI</span> сегодня и начните поиск
          идеального кандидата для вашей команды
        </h1>
        <div class="flex flex-row gap-12 flex-wrap">
          <RouterLink to="/employer">
            <div
              class="flex justify-between items-center gap-4 text-base font-medium transition hover:-translate-y-1"
            >
              <span class="text-white"> Ищу сотрудника </span>
              <img class="w-6" src="/white_arrow.png" alt="white_arrow" />
            </div>
          </RouterLink>

          <RouterLink to="/vacancy">
            <div
              class="flex justify-between items-center gap-4 text-base font-medium transition hover:-translate-y-1"
            >
              <span class="text-white"> Ищу работу </span>
              <img class="w-6" src="/white_arrow.png" alt="white_arrow" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="flex flex-row px-14 py-8 justify-center flex-wrap gap-4">
      <div
        class="flex flex-col justify-center text-gray-800 gap-4 w-80 bg-indigo-500 rounded-3xl px-12 py-12 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-white border-2 border-indigo-400"
      >
        <h1 class="text-5xl font-bold">9 лет</h1>
        <h2 class="text-xl font-bold">эффективно помогаем работодателям и сотрудникам</h2>
      </div>
      <div
        class="flex flex-col justify-center text-gray-800 gap-4 w-80 bg-slate-300 border-indigo-400 rounded-3xl px-12 py-12 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500"
      >
        <h1 class="text-5xl font-bold">> 15 000</h1>
        <h2 class="text-xl font-bold">клиентов нашли любимую работу</h2>
      </div>
      <div
        class="flex flex-col justify-center gap-4 w-80 text-indigo-500 bg-white border-2 border-indigo-500 rounded-3xl px-12 py-12 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-indigo-500 hover:text-white"
      >
        <h1 class="text-5xl font-bold">8 714</h1>
        <h2 class="text-xl font-bold">актуальных вакансий на сайте</h2>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center px-36 gap-6">
      <div class="flex flex-col w-2/3">
        <h1 class="text-4xl font-bold transition">О нас</h1>
        <p class="transition font-normal pt-10">
          Основанная в 2015 году, IT PROFI быстро стала ведущей рекрутинговой компанией в сфере
          информационных технологий. Наша команда высококвалифицированных экспертов, обладающих
          глубоким пониманием отрасли, поставила перед собой амбициозную цель - помогать компаниям
          находить и привлекать лучшие ИТ-таланты, которые станут движущей силой для роста и
          процветания их бизнеса. <br /><br />
          Начав с небольшого офиса в Томске, мы быстро расширили свое присутствие по всей России,
          открыв филиалы в ключевых технологических центрах. Наша репутация надежного и эффективного
          партнера привлекла внимание ведущих компаний в сфере ИТ, которые доверяют нам решение
          своих кадровых задач. <br /><br />
          Сегодня IT PROFI предлагает полный спектр рекрутинговых услуг, от поиска и подбора
          квалифицированных специалистов до управления всем процессом найма. Мы гордимся тем, что
          помогаем нашим клиентам находить именно тех профессионалов, которые вдохновляют,
          инновируют и приводят их бизнес к новым высотам.
        </p>
      </div>

      <div
        class="flex justify-between items-center gap-6 py-4 px-6 text-base cursor-pointer text-indigo-600 font-medium transition hover:-translate-y-1.5"
      >
        <span> Опубликовать вакансию </span>
        <img class="w-6" src="/blue_arrow.png" alt="white_arrow" />
      </div>
    </div>

    <div class="flex flex-col flex-wrap gap-4 px-36 py-10 mb-10">
      <span class="text-4xl font-bold mb-5 transition hover:-translate-y-0.5"
        >Почему IT PROFI?</span
      >
      <div class="flex flex-row gap-10 pt-8">
        <div class="flex items-center gap-8 transition hover:-translate-y-0.5">
          <img class="w-6" src="/black_arrow.png" alt="arrow" />
          <div>
            <span class="font-medium">Широкая база кандидатов<br /><br /></span>
            <span class="text-indigo-600">
              Мы имеем доступ к обширной сети специалистов по всему миру. Это позволяет нам найти и
              привлечь лучших кандидатов, соответствующих вашим требованиям.</span
            >
          </div>
        </div>

        <div class="flex items-center gap-8 transition hover:-translate-y-0.5">
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

        <div class="flex items-center gap-8 transition hover:-translate-y-0.5">
          <img class="w-6" src="/black_arrow.png" alt="arrow" />
          <div>
            <span class="font-medium">Быстрый и эффективный подбор персонала<br /><br /></span>
            <span class="text-indigo-600">
              Мы понимаем, что время - самый ценный ресурс для вашего бизнеса. С нами вы можете быть
              уверены, что ваша вакансия будет заполнена квалифицированным специалистом в кратчайшие
              сроки.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
