<template>
  <footer
    class="flex flex-col justify-between rounded-3xl mx-56 mb-12 bg-indigo-500 flex-wrap px-20 py-16"
  >
    <div class="flex flex-row gap-32 mb-6">
      <div class="text-white text-sm space-y-3">
        <h1 class="text-base font-semibold mb-7">Контакты:</h1>
        <div class="flex flex-row items-center gap-4">
          <img class="w-5" src="/phone.png" alt="phone" />
          <div class="flex flex-col">
            <span>Телефон</span>
            <span class="font-bold text-base">8 (3822) 288-87-00</span>
          </div>
        </div>

        <div class="flex flex-row items-center gap-4">
          <img class="w-5" src="/mail.png" alt="mail" />
          <div class="flex flex-col">
            <span>Почта</span>
            <span class="font-bold text-base">it_profi@pochta.ru</span>
          </div>
        </div>

        <div class="flex flex-row items-center gap-4 pb-6">
          <img class="w-5" src="/telegram.png" alt="telegram" />
          <div class="flex flex-col">
            <span>Телеграм</span>
            <span class="font-bold text-base">@it_profi</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-wrap text-base text-white">
        <h1 class="font-semibold mb-6">Работу выполнила:</h1>
        <h2 class="">Бочкарева Екатерина Алексеевна</h2>
        <h2 class="">г. Томск</h2>
      </div>
    </div>

    <div class="flex place-content-center border-t pt-6 text-white">
      <span>© 2024 IT PROFI</span>
    </div>
  </footer>
</template>
