import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../pages/home';
import about from '../pages/about';
import login from '../pages/login';
import topic from '../pages/topic';
import user from '../pages/user';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            component: home
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/topic/:id',
            component: topic
        },
        {
            path: '/topic/:loginname',
            component: user
        }
    ]
})