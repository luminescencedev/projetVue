<template>
  <div class="home-page h-screen w-screen ">
    <Header class="text-white"/>
    <div class="h-full flex justify-center items-center pt-20 px-4 pb-4">
      <div class="home-card h-full w-full flex flex-col gap-10 p-16">
        <h1 class="text-6xl">Bienvenue sur HomeMade</h1>
        <router-link to="/chefs" class="text-2xl">Voir les Cuisiniers</router-link>
      </div>
    </div>
    
    
  </div>
</template>

<script lang="ts" setup>
import Header from '../components/Header.vue';
</script>

<style scoped>
.home-page {
  background: url('../assets/cuisiniers.jpg');
  background-size: cover;
}

.home-card {
  background: rgba(255, 255, 255, 0.5);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>