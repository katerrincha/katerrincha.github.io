<template>
  <header
    class="flex justify-between sticky top-0 z-50 bg-white rounded-t-lg gap-8 border-b flex-wrap border-slate-200 px-20 py-3"
  >
    <RouterLink to="/">
      <div class="flex items-center gap-4 flex-wrap">
        <img src="/logo.png" alt="logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">it Profi</h2>
          <p class="text-slate-600">Сайт-рекрут IT</p>
        </div>
      </div>
    </RouterLink>

    <ul class="flex items-center gap-10 flex-wrap">
      <RouterLink to="/">
        <li class="flex items-center text-gray-500 cursor-pointer gap-3 hover:text-black">
          <img src="/main.png" alt="main" class="w-5 opacity-40" />
          <span>Главная</span>
        </li>
      </RouterLink>

      <RouterLink to="/employer">
        <li class="flex items-center text-gray-500 cursor-pointer gap-3 hover:text-black">
          <img src="/about.png" alt="about" class="w-5 opacity-40" />
          <span>Работодателям</span>
        </li>
      </RouterLink>

      <RouterLink to="/vacancy">
        <li class="flex items-center text-gray-500 cursor-pointer gap-3 hover:text-black">
          <img src="/search.png" alt="vacansii" class="w-5 opacity-40" />
          <span>Вакансии</span>
        </li>
      </RouterLink>

      <RouterLink to="/marks">
        <li class="flex items-center text-gray-500 cursor-pointer gap-2 hover:text-black">
          <img src="/mark.png" alt="mark" class="w-5 opacity-40" />
          <span>Избранное</span>
        </li>
      </RouterLink>
    </ul>
  </header>
</template>
