<template>
  <div class="chefdetail-page h-screen w-screen">
    <Header />
    <div class="chefdetail-hero px-10 py-20 flex flex-col gap-4">
      <div class="chef-info">
        <h1>{{ chef.name }}</h1>
         <p>{{ chef.description }}</p>
      </div>
      <div class="chef-dishes flex flex-col gap-4">
        <h2>Ses Plats :</h2>
        <div v-for="dish in chef.dishes" :key="dish.id">
          <DishCard :dish="dish" />
        </div>
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
</style>