<script setup>
defineProps({
  onClickPublic: Function
})
</script>

<template>
  <form
    class="mx-56 mb-12 mt-12 p-10 space-y-6 border border-gray-200 bg-gray-100 rounded-3xl hover:shadow-xl hover:bg-gray-200 duration-1000"
  >
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
          >Название должности</label
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
          >Организация</label
        >
      </div>
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
        >Местоположение</label
      >
    </div>

    <div class="max-w-full">
      <label for="message" class="block mt-12 mb-2 text-sm font-medium text-gray-500"
        >Описание места работы</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-6 w-full text-sm text-gray-900 bg-white rounded-3xl border border-gray-200 outline-none focus:border-indigo-300"
        placeholder=""
      ></textarea>
    </div>

    <div class="max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-500">Обязанности</label>
      <textarea
        id="message"
        rows="4"
        class="block p-6 w-full text-sm text-gray-900 bg-white rounded-3xl border border-gray-200 outline-none focus:border-indigo-300"
        placeholder=""
      ></textarea>
    </div>

    <div class="max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-500">Требования</label>
      <textarea
        id="message"
        rows="4"
        class="block p-6 w-full text-sm text-gray-900 bg-white rounded-3xl border border-gray-200 outline-none focus:border-indigo-300"
        placeholder=""
      ></textarea>
    </div>

    <div class="max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-500"
        >Условия работы</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-6 w-full text-sm text-gray-900 bg-white rounded-3xl border border-gray-200 outline-none focus:border-indigo-300"
        placeholder="Условия, график работы, заработная плата"
      ></textarea>
    </div>
    <h2 class="font-medium pt-8 pb-3">Контактное лицо</h2>
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
      class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-2xl text-sm px-5 py-2.5 text-center duration-500"
    >
      Разместить вакансию
    </button>
  </form>
</template>
