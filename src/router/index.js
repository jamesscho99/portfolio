import {createWebHistory, createRouter} from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";
import Resume from "../components/Resume.vue";

const routes = [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/about',
        component:About,
    },
    {
        path:'/contact',
        component:Contact,
    },
    {
        path:'/projects',
        component:Projects,
    },
    {
        path:'/resume',
        component:Resume,
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;