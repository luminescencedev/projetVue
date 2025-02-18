<template>
  <div class="register-page h-screen w-screen">
    <Header class="text-white" />
    <div class="h-full flex justify-center items-center pt-20 px-4 pb-4">
      <div class="register-card h-full w-full flex flex-col gap-10 p-16">
        <h1 class="text-2xl sm:text-4xl md:text-6xl">Inscription</h1>
        <form @submit.prevent="register" class="flex flex-col gap-4">
          <input v-model="username" type="text" placeholder="Nom d'utilisateur" class="p-4 rounded border" required />
          <input v-model="password" type="password" placeholder="Mot de passe" class="p-4 rounded border" required />
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            S'inscrire
          </button>
        </form>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import { useUserStore } from '../store/user';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const userStore = useUserStore();
const router = useRouter();

const register = () => {
  if (userStore.register(username.value, password.value)) {
    router.push('/');
  } else {
    errorMessage.value = "Vous ne pouvez pas vous enregistee si vous n'êtes pas admin !";
  }
};
</script>

<style scoped>
.register-page {
  background: url('../assets/cuisiniers.jpg');
  background-size: cover;
}

.register-card {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>