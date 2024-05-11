<script setup>
defineProps({
  onClickPublic: Function
})
</script>

<template>
  <form
    class="min-w-60 mx-64 my-12 p-14 space-y-6 border border-gray-200 rounded-3xl hover:shadow-xl"
  >
    <h2 class="font-medium pb-6 text-lg">Заполните форму для размещения вакансии</h2>

    <div class="relative z-0 w-full group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_first_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Должность</label
      >
    </div>
    <div class="relative z-0 w-full group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_first_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-indigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Компания</label
      >
    </div>
    <div class="relative z-0 w-full group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_first_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Город</label
      >
    </div>

    <div class="max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-indigo-500 dark:text-white"
        >Описание места работы</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-indigo-50 rounded-lg border border-indigo-200 outline-none focus:ring-blue-500 focus:border-indigo-400 placeholder:text-xs"
        placeholder="Описание места работы"
      ></textarea>
    </div>

    <div class="max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-indigo-500 dark:text-white"
        >Обязанности</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-indigo-50 rounded-lg border border-indigo-200 outline-none focus:ring-blue-500 focus:border-indigo-400 placeholder:text-xs"
        placeholder="Основные обязанности"
      ></textarea>
    </div>

    <div class="max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-indigo-500 dark:text-white"
        >Требования</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-indigo-50 rounded-lg border border-indigo-200 outline-none focus:ring-blue-500 focus:border-indigo-400 placeholder:text-xs"
        placeholder="Основные требования"
      ></textarea>
    </div>

    <div class="max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-indigo-500 dark:text-white"
        >Условия работы</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-indigo-50 rounded-lg border border-indigo-200 outline-none focus:ring-blue-500 focus:border-indigo-400 placeholder:text-xs"
        placeholder="Условия работы, график, заработная плата"
      ></textarea>
    </div>
    <h2 class="font-medium pt-6">Контактное лицо</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Имя</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="floating_last_name"
          id="floating_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_last_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Фамилия</label
        >
      </div>
    </div>
    <div class="relative z-0 w-full group pb-8">
      <input
        type="email"
        name="floating_email"
        id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Почта для обратной связи</label
      >
    </div>

    <!--<button
      type="submit"
      class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Опубликовать вакансию
    </button>-->

    <button
      @click="onClickPublic"
      type="submit"
      class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-2xl text-sm px-5 py-2.5 text-center"
    >
      Опубликовать вакансию
    </button>
  </form>
</template>
