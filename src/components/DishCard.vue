<template>
  <div class="dish-card flex flex-col gap-4 w-[20vw]">
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <p>{{ dish.price }} €</p>
    <button @click="addToCart" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter au Panier</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useCartStore } from '../store/cart';

const props = defineProps<{ dish: { id: number, name: string, description: string, price: number } }>();
const store = useCartStore();

const addToCart = () => {
  store.addToCart(props.dish);
};
</script>

<style scoped>
.dish-card {
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>