import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blog from "./views/Blog";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const routes = [
    {   path:"/",
        name:"Home",
        component: Home
    },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog
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