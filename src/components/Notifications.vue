<template>
  <div v-if="visible" class="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
    {{ props.message }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{ message: string }>();
const visible = ref(true);

setTimeout(() => {
  visible.value = false;
}, 3000);
</script>