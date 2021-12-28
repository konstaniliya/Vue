import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue';
import About  from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/dashboard/:category',
        name: 'dashboard',
        component: Dashboard
    },
    
    {
        path: '/About*',
        name: 'About',
        component: About
    },
    {
        path: '/NotFound',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '*',
        component: NotFound,
    },
];
const router = new VueRouter({
    mode: 'history',
    routes,
});

const userAuth = false;

router.beforeEach((to,from,next)=>{
    if(to.name !== "NotFound" && !userAuth){
        next({
            name: NotFound
        })
    }
    else {
        next();
    }
})

const getTitleByRoutes = routeName => {
    return {
        Dashboard: "Page of payments exists",
        About: "About application",
        NotFound: "This page doesn't exist",
    }[routeName]
}

router.afterEach((to)=>{
    document.title = getTitleByRoutes(to.name);

})
export default router