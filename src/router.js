// Imports
import Vue from 'vue'
import Router from 'vue-router'

// Import views
import Home from "./views/Home";
import Projects from "./views/Projects";
import BlogHome from "./views/BlogHome";
import DogApp from "./views/DogApp";

// Import progress bar
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
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
    path: "/projects/dogapp",
    name: "DogApp",
    component: DogApp,
  }
];

// Create router
const router = new Router({
  mode: "history",
  bbasew: process.env.BASE_URL,
  routes
});

// Adding progress bar on each route redirection
router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});


// Export router
export default router