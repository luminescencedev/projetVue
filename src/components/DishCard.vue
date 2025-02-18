<template>
  <div class="dish-card p-4 border rounded shadow-md">
    <h3 class="text-xl">{{ dish.name }}</h3>
    <p class="text-base">{{ dish.description }}</p>
    <p class="text-lg font-bold">{{ dish.price }} €</p>
    <button @click="addToCart" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
      Ajouter au panier
    </button>
    <Notification v-if="showNotification" :message="notificationMessage" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { useCartStore } from '../store/cart';
import Notification from './Notifications.vue';

const props = defineProps<{ dish: { id: number, name: string, description: string, price: number } }>();
const store = useCartStore();
const showNotification = ref(false);
const notificationMessage = ref('');

const addToCart = () => {
  store.addToCart(props.dish);
  notificationMessage.value = `${props.dish.name} a été ajouté au panier !`;
  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};
</script>
<style scoped>

</style>