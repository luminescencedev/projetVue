<template>
  <div class="cart-page h-screen w-screen ">
    <Header  class="text-white" />
    <div class="h-full flex justify-center items-center pt-20 px-4 pb-4">
      <div class="cart-hero h-full w-full flex flex-col gap-10 p-16 overflow-y-scroll">
        <h1 class="text-6xl">Mon Panier :</h1>
        <div v-if="cartItems.length === 0">
          <p>Votre panier est vide.</p>
        </div>
        <div v-else class="flex flex-col gap-6">
          <div v-for="item in cartItems" :key="item.id">
            <CartItem :item="item" />
          </div>
            <div class="total mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold">Total : {{ total }} €</h2>
            </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Header from '../components/Header.vue';
import CartItem from '../components/CartItem.vue';
import { useCartStore } from '../store/cart';

const store = useCartStore();
const cartItems = computed(() => store.cart);
const total = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
</script>

<style scoped>
.cart-page {
  background: url('../assets/cuisiniers.jpg');
  background-size: cover;
}

.cart-hero {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>