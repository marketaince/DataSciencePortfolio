import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About";

import Projects from "./views/Projects";
import Contact from "./views/Contact";

import BlogHome from "./views/BlogHome";
import BlogPost from "./views/BlogPost";
import DogApp from "./views/DogApp";


import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const routes = [
    {   path:"/",
        name:"Home",
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/blog',
        name: 'BlogHome',
        component: BlogHome
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: "/blog/:slug",
        name: "BlogPost",
        component: BlogPost,
    },
    {
        path: "/projects/dogapp",
        name: "DogApp",
        component: DogApp,
    }

];

const router = new Router({
    mode:"history",
    bbasew:process.env.BASE_URL,
    routes
});

router.beforeEach((routeTo, routeFrom, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router