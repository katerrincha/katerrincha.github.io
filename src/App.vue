<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

//import CardList from './components/CardList.vue'
//import { watch } from 'vue'

/*const sortBy = ref('')
const searchQ = ref('')

watch(sortBy, async()=> {

})*/
</script>

<template>
  <div class="bg-white">
    <Header />

    <div><RouterView /></div>
    <Footer />
  </div>
</template>

<style></style>
