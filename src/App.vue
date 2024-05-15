<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Drawer from './components/Drawer.vue'

//import CardList from './components/CardList.vue'
//import { watch } from 'vue'

/*const sortBy = ref('')
const searchQ = ref('')

watch(sortBy, async()=> {

})*/
</script>

<template>
  <Drawer />
  <div class="bg-white">
    <Header />

    <div><RouterView /></div>
    <Footer />
  </div>
</template>

<style></style>
