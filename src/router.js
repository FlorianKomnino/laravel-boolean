import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import BooksList from './pages/BooksList.vue';
import SingleBookPage from './pages/SingleBookPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/contact_us',
            name: 'contact-us',
            component: ContactUs
        },
        {
            path: '/books',
            name: 'books',
            component: BooksList
        },
        {
            path: '/books/:id',
            name: 'book',
            component: SingleBookPage
        },
    ]
});

export { router };