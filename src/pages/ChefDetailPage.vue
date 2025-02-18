<template>
  <div class="chefdetail-page h-screen w-screen">
    <Header class="text-white" />
    <div class="h-full flex justify-center items-center pt-20 px-4 pb-4">
      <div class="chefdetail-hero h-full w-full flex flex-col gap-10 p-16 overflow-y-scroll">
        <div class="chef-info text-xl md:text-2xl lg:text-4xl">
          <h1>{{ chef.name }}</h1>
          <p>{{ chef.description }}</p>
        </div>
        <div class="chef-dishes flex flex-col gap-4">
          <h2 class="text-lg md:text-xl lg:text-2xl">Ses Plats :</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="dish in chef.dishes" :key="dish.id">
              <DishCard :dish="dish" />
            </div>
          </div>
          
        </div>
        <router-link to="/chefs" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour à la liste des cuisiniers <span class="font-[FiraCode]">--></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import DishCard from '../components/DishCard.vue';
import { useChefsStore } from '../store/chefs';

const route = useRoute();
const chefsStore = useChefsStore();
interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Chef {
  name: string;
  description: string;
  dishes: Dish[];
}
const chef = ref<Chef>({ name: '', description: '', dishes: [{ id: 0, name: '', description: '', price: 0 }] });

onMounted(() => {
  const chefId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
  chef.value = chefsStore.chefs.find(c => c.id === parseInt(chefId)) || { name: '', description: '', dishes: [] };
});
</script>

<style scoped>
.chefdetail-page {
  background: url('../assets/cuisiniers.jpg');
  background-size: cover;
}

.chefdetail-hero {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>