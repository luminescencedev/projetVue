import { defineStore } from 'pinia';

interface User {
  username: string;
  password: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    admin: { username: 'admin', password: 'admin' }
  }),
  actions: {
    login(username: string, password: string) {
      if (username === this.admin.username && password === this.admin.password) {
        this.user = { username, password };
        return true;
      }
      return false;
    },
    logout() {
      this.user = null;
    },
    register(username: string, password: string) {
      if (username === 'admin' && password === 'admin') {
        this.user = { username, password };
        return true;
      }
      return false;
    }
  }
});