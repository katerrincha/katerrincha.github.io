<template>
  <div class="relative flex justify-center mx-56">
    <header
      class="w-9/12 flex justify-between gap-6 top-0 z-10 fixed bg-white rounded-3xl flex-wrap px-10 py-4 shadow-5"
    >
      <RouterLink to="/">
        <div
          class="flex items-center gap-5 flex-wrap hover:text-gray-900 transition hover:translate-x-1.5 duration-500"
        >
          <img src="/logo.png" alt="logo" class="w-10" />
          <div>
            <h2 class="text-xl font-bold uppercase">it Profi</h2>
            <p class="text-gray-500">Рекрутер IT</p>
          </div>
        </div>
      </RouterLink>

      <ul class="ml-auto flex items-center gap-6 flex-wrap">
        <RouterLink to="/">
          <li
            class="flex flex-row items-center text-gray-500 cursor-pointer gap-3 hover:text-gray-900 transition hover:translate-x-1 duration-700"
          >
            <img src="/main.png" alt="main" class="w-4 opacity-40" />
            <span>Главная</span>
          </li>
        </RouterLink>

        <RouterLink to="/employer">
          <li
            class="flex flex-row items-center text-gray-500 cursor-pointer gap-3 hover:text-gray-900 transition hover:translate-x-1 duration-700"
          >
            <img src="/about.png" alt="about" class="w-4 opacity-40" />
            <span>Работодателям</span>
          </li>
        </RouterLink>

        <RouterLink to="/vacancy">
          <li
            class="flex flex-row items-center text-gray-500 cursor-pointer gap-3 hover:text-gray-900 transition hover:translate-x-1 duration-700"
          >
            <img src="/search.png" alt="vacansii" class="w-4 opacity-40" />
            <span>Вакансии</span>
          </li>
        </RouterLink>

        <RouterLink to="/resume">
          <li
            class="flex flex-row items-center text-gray-500 cursor-pointer gap-2 hover:text-gray-900 transition hover:translate-x-1 duration-700"
          >
            <img src="/resume.png" alt="mark" class="w-4 opacity-50" />
            <span>Создать резюме</span>
          </li>
        </RouterLink>
      </ul>
    </header>
  </div>
</template>
