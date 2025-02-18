<template>
  <div class="chefs-page h-screen w-screen">
    <Header />
    <div class="chefs-hero px-10 py-20 flex flex-col gap-4">
      <h1>Nos Cuisiniers :</h1>
      <div v-for="chef in chefs" :key="chef.id">
        <ChefCard :chef="chef" />
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
</style>