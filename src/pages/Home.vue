<script setup></script>

<template>
  <div class="flex flex-col gap-6">
    <div class="bg-cover bg-center h-auto" style="background-image: url('public/job.jpg')">
      <div class="flex flex-col px-16 py-36 mb-12 w-1/2 gap-12">
        <h1 class="text-3xl font-bold text-indigo-600 uppercase transition hover:-translate-y-1">
          Обратитесь к <span class="text-gray-600">IT PROFI</span> сегодня и начните поиск
          идеального кандидата для вашей команды
        </h1>
        <div class="flex flex-row gap-4 flex-wrap">
          <div
            class="flex justify-between items-center gap-6 py-4 px-6 bg-indigo-500 rounded-2xl text-base font-medium transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <span class="text-white"> Ищу сотрудника </span>
            <img class="w-6" src="/white_arrow.png" alt="white_arrow" />
          </div>
          <RouterLink to="/vacancy">
            <div
              class="flex justify-between items-center gap-6 py-4 px-6 bg-indigo-500 rounded-2xl text-base font-medium transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <span class="text-white"> Ищу работу </span>
              <img class="w-6" src="/white_arrow.png" alt="white_arrow" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="flex flex-row px-14 py-5 justify-center flex-wrap gap-4">
      <div
        class="flex flex-col justify-center gap-4 w-80 bg-indigo-500 rounded-3xl px-12 py-12 transition hover:-translate-y-0.5 hover:shadow-2xl hover:bg-white border-2 border-indigo-400"
      >
        <h1 class="text-5xl font-bold">12 лет</h1>
        <h2 class="text-xl font-bold">эффективно помогаем работодателям и сотрудникам</h2>
      </div>
      <div
        class="flex flex-col justify-center gap-4 w-80 bg-slate-300 border-indigo-400 rounded-3xl px-12 py-12 transition hover:-translate-y-0.5 hover:shadow-2xl hover:bg-indigo-500"
      >
        <h1 class="text-5xl font-bold">> 15 000</h1>
        <h2 class="text-xl font-bold">клиентов нашли любимую работу</h2>
      </div>
      <div
        class="flex flex-col justify-center gap-4 w-80 text-indigo-500 bg-white border-2 border-indigo-500 rounded-3xl px-12 py-12 transition hover:-translate-y-0.5 hover:shadow-2xl hover:bg-indigo-500 hover:text-white"
      >
        <h1 class="text-5xl font-bold">8 714</h1>
        <h2 class="text-xl font-bold">актуальных вакансий на сайте</h2>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center px-16 py-5 gap-10">
      <div class="flex flex-col gap-6 w-2/3">
        <h1 class="text-4xl font-bold transition">О нас</h1>
        <p class="transition font-normal">
          Мы предлагаем полный спектр услуг для рекрутинга в сфере IT, помогая компаниям найти и
          привлечь лучших специалистов, чтобы обеспечить успех и рост вашего бизнеса. Наша цель -
          сделать процесс найма максимально эффективным, простым и прозрачным для наших клиентов.
        </p>
      </div>

      <div
        class="flex justify-between items-center gap-6 py-4 px-6 bg-indigo-500 rounded-2xl text-base font-medium transition hover:-translate-y-1 hover:shadow-2xl"
      >
        <span class="text-white"> Опубликовать вакансию </span>
        <img class="w-6" src="/white_arrow.png" alt="white_arrow" />
      </div>
    </div>
    <div class="flex flex-col flex-wrap gap-4 px-16 py-5 mb-10">
      <span class="text-4xl font-bold mb-5 transition hover:-translate-y-0.5"
        >Почему IT PROFI?</span
      >

      <div
        class="flex items-center gap-8 bg-indigo-400 rounded-3xl px-10 py-8 transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <img class="w-4" src="/arrow.png" alt="arrow" />
        <div>
          <span class="font-medium">Широкая база данных кандидатов.</span>
          <span class="text-indigo-800">
            Мы имеем доступ к обширной сети специалистов по всему миру. Это позволяет нам найти и
            привлечь лучших кандидатов, которые соответствуют вашим требованиям и ожиданиям.</span
          >
        </div>
      </div>

      <div
        class="flex items-center gap-8 bg-indigo-300 rounded-3xl px-10 py-8 transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <img class="w-4" src="/arrow.png" alt="arrow" />
        <div>
          <span class="font-medium">Быстрый и эффективный подбор персонала.</span>
          <span class="text-indigo-800">
            Мы понимаем, что время - это самый ценный ресурс для вашего бизнеса. Поэтому мы
            стараемся минимизировать время, затраченное на поиск и найм кандидатов. С нами вы можете
            быть уверены, что ваша вакансия будет заполнена квалифицированным специалистом в
            кратчайшие сроки.
          </span>
        </div>
      </div>

      <div
        class="flex items-center gap-8 bg-indigo-400 rounded-3xl px-10 py-8 transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <img class="w-4" src="/arrow.png" alt="arrow" />
        <div>
          <span class="font-medium">Сокращение времени на найм.</span>
          <span class="text-indigo-800">
            Благодаря эффективному поиску и отбору кандидатов, сайты рекрутинга помогают сократить
            время, затрачиваемое на заполнение вакансий, что позволяет компаниям быстрее реагировать
            на изменения на рынке труда.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
