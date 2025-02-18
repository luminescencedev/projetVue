import { defineStore } from 'pinia';

interface Dish {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Dish {
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[]
  }),
  actions: {
    addToCart(dish: Dish) {
      const existingItem = this.cart.find(item => item.id === dish.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...dish, quantity: 1 });
      }
    },
    removeFromCart(dish: Dish) {
      const index = this.cart.findIndex(item => item.id === dish.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }
});