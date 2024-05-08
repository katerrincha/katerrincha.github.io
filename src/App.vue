<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

//import CardList from './components/CardList.vue'
//import { watch } from 'vue'

/*import { Carousel, initTWE } from 'tw-elements'

initTWE({ Carousel })*/

/*const sortBy = ref('')
const searchQ = ref('')

watch(sortBy, async()=> {

})*/
</script>

<template>
  <div class="bg-white w-11/12 m-auto my-8 rounded-lg shadow-2xl">
    <Header />

    <div><RouterView /></div>
    <Footer />
  </div>
</template>

<style></style>
