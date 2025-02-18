<template>
  <div class="chef-card flex flex-col gap-4 w-full">
    <h3>{{ chef.name }}</h3>
    <p>{{ chef.description }}</p>
    <button @click="viewDetails" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Voir Détails
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps<{ chef: { id: number, name: string, description: string } }>();
const router = useRouter();

const viewDetails = () => {
  router.push(`/chefs/${props.chef.id}`);
};
</script>

<style scoped>
.chef-card {
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>