<script setup>
defineProps({
  onClickPublic: Function
})
</script>

<template>
  <form
    class="mx-56 mb-20 mt-12 p-10 space-y-6 border border-gray-300 bg-gray-100 rounded-3xl hover:border-0 hover:shadow-xl hover:bg-gray-200 transition hover:-translate-y-0.5 duration-700"
  >
    <h2 class="font-medium pb-2">Основная информация</h2>
    <div class="grid md:grid-cols-2 gap-6">
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
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="floating_patronymic"
          id="floating_patronymic"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_patronymic"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Отчество</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="post"
          id="post"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="post"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Должность</label
        >
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          pattern="+7 (913) *** ** **"
          name="floating_phone"
          id="floating_phone"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_phone"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Телефон</label
        >
      </div>
      <div class="relative z-0 w-full mb-5 group">
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
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Почта</label
        >
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="mx-auto relative z-0 w-full group">
        <label for="graph" class="block mb-2 text-sm font-medium text-gray-500"
          >График работы</label
        >
        <select
          id="graph"
          class="outline-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
        >
          <option>Гибкий график</option>
          <option>Полный рабочий день</option>
          <option>Сменный график</option>
          <option>Удаленная работа</option>
        </select>
      </div>
      <div class="mx-auto relative z-0 w-full group">
        <label for="busy" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
          >Занятость</label
        >
        <select
          id="busy"
          class="outline-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
        >
          <option>Полная</option>
          <option>Частичная</option>
          <option>Стажировка</option>
        </select>
      </div>
    </div>
    <div class="relative z-0 w-full group">
      <input
        type="text"
        name="salary"
        id="salary"
        class="block py-2.5 px-0 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="salary"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Желаемая зарплата</label
      >
    </div>

    <h2 class="font-medium pt-12 pb-2">Образование</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="education"
          id="education"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="education"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Учебное заведение</label
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
          >Факультет</label
        >
      </div>
    </div>
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
          >Специальность</label
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
          >Год окончания обучения</label
        >
      </div>
    </div>

    <h2 class="font-medium pt-12 pb-2">Опыт работы</h2>
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
          >Организация</label
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
          >Должность</label
        >
      </div>
    </div>
    <div class="max-w-full">
      <label for="message" class="block mt-12 mb-2 text-sm font-medium text-gray-500"
        >Должностные обязанности и достижения</label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-6 w-full text-sm text-gray-900 bg-white rounded-3xl border border-gray-200 outline-none focus:border-indigo-300"
        placeholder=""
      ></textarea>
    </div>

    <h2 class="font-medium pt-12 pb-2">Дополнительная информация</h2>
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
        >Владение языками</label
      >
    </div>

    <div class="pb-10 max-w-full">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-500">О себе</label>
      <textarea
        id="message"
        rows="4"
        class="block p-6 w-full text-sm text-gray-900 bg-white rounded-3xl border border-gray-200 outline-none focus:border-indigo-300"
        placeholder="Расскажите о своих личных качествах и особенностях"
      ></textarea>
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
      class="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-2xl text-sm px-5 py-2.5 text-center duration-500"
    >
      Разместить резюме
    </button>
  </form>
</template>
