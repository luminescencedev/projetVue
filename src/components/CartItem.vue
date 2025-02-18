<template>
  <div class="cart-item flex flex-row justify-between items-center p-4 border-b">
    <div>
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }} €</p>
      <p>Quantité : {{ item.quantity }}</p>
    </div>
    <button @click="removeFromCart" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Retirer
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useCartStore } from '../store/cart';

const props = defineProps<{ item: { id: number, name: string, price: number, quantity: number } }>();
const store = useCartStore();

const removeFromCart = () => {
  store.removeFromCart(props.item);
};
</script>

<style scoped>
.cart-item {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>