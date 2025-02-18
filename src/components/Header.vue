<template>
  <header class=" text-xs md:text-base w-screen fixed flex flex-row justify-between p-6 z-100 text-white">
    <router-link to="/"><h1>HomeMade</h1></router-link>
    <nav class="flex flex-row gap-10">
      <router-link to="/chefs">Cuisiniers</router-link>
      <router-link v-if="!isLoggedIn" to="/register">Inscription</router-link>
      <router-link v-if="!isLoggedIn" to="/login">Connexion</router-link>
      <router-link v-if="isLoggedIn" to="/cart">Panier</router-link>
      <router-link v-if="isLoggedIn" @click.prevent="logout" to="/">Déconnexion</router-link>
    </nav>
    
  </header>
</template>

<script lang="ts" setup>

import { computed } from 'vue';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.user !== null);

const logout = () => {
  userStore.logout();
};
</script>

<style scoped>
</style>