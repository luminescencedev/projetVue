<template>
  <div class="chefs-page h-screen w-screen">
    <Header class="text-white"/>
    <div class="h-full flex justify-center items-center pt-20 px-4 pb-4">
      <div class="chefs-hero h-full w-full flex flex-col gap-10 p-16">
        <h1>Nos Cuisiniers :</h1>
        <div v-for="chef in chefs" :key="chef.id">
          <ChefCard :chef="chef" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import ChefCard from '../components/ChefCard.vue';
import { useChefsStore } from '../store/chefs';

const chefsStore = useChefsStore();
const chefs = ref(chefsStore.chefs);
</script>

<style scoped>
.chefs-page {
  background: url('../assets/cuisiniers.jpg');
  background-size: cover;
}

.chefs-hero {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>