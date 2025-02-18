import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store/index';

import { gsap } from 'gsap';

router.beforeEach((to, from, next) => {
    gsap.set('.transition', { top: '-100vh' });
    const app = document.querySelector('#app');
    const isInialized = app?.classList.contains('initialized');

    if (!isInialized) {
        app?.classList.add('initialized');
        next();
    } else {
    gsap.to('.transition', { 
        top: '0',
        duration: 1,
        ease : 'power2.inOut',
        onComplete: () => {
            next();
        }
    });

}
});
router.afterEach(() => {
    gsap.to('.transition', { 
        top: '100vh',
        duration: 1,
        ease : 'power2.inOut'
    });
});


createApp(App).use(router).use(store).mount('#app')
