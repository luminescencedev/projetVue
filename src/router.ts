import { createWebHistory, createRouter } from "vue-router";
import HomePage from './pages/HomePage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ChefsPage from './pages/ChefsPage.vue';
import ChefDetailPage from './pages/ChefDetailPage.vue';
import CartPage from "./pages/CartPage.vue";

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/chefs', name: 'Chefs', component: ChefsPage },
  { path: '/chefs/:id', name: 'ChefDetail', component: ChefDetailPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;