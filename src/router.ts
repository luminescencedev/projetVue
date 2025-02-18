import { createWebHistory, createRouter } from "vue-router";
import HomePage from './pages/HomePage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ChefsPage from './pages/ChefsPage.vue';
import ChefDetailPage from './pages/ChefDetailPage.vue';
import CartPage from "./pages/CartPage.vue";

const routes = [
  { path: '/', component: HomePage },
  { path: '/cart', component: CartPage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/chefs', component: ChefsPage },
  { path: '/chefs/:id', component: ChefDetailPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;