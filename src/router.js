import Vue from 'vue'
import VueRouter from 'vue-router'
// использование маршрутизатора
Vue.use(VueRouter)

import BrowMaster         from './pages/BrowMaster.vue';
import Laminirovanie      from './pages/Laminirovanie.vue';
import LashExpert         from './pages/LashExpert.vue';
import LashProfessional   from './pages/LashProfessional.vue';
import LashStart          from './pages/LashStart.vue';
import Prepodavateli      from './pages/Prepodavateli.vue';
import Result             from './pages/Result.vue';
import Vakansii           from './pages/Vakansii.vue';
import Raspisanie         from './pages/Raspisanie.vue';


export default new VueRouter ({
    routes: [
        {
            path: '/brow-master',
            name: 'BrowMaster',
            component: BrowMaster
        },
        {
            path: '/laminirovanie',
            name: 'Laminirovanie',
            component: Laminirovanie
        },
        {
            path: '/lash-expert',
            name: 'LashExpert',
            component: LashExpert
        },
        {
            path: '/lash-professional',
            name: 'LashProfessional',
            component: LashProfessional
        },
        {
            path: '/lash-start',
            name: 'LashStart',
            component: LashStart
        },
        {
            path: '/prepodavateli',
            name: 'Prepodavateli',
            component: Prepodavateli
        },
        {
            path: '/result',
            name: 'Result',
            component: Result
        },
        {
            path: '/vakansii',
            name: 'Vakansii',
            component: Vakansii
        },
        {
          path: '/raspisanie',
          name: 'Raspisanie',
          component: Raspisanie
        },
    ],
    mode: 'history',
    base: process.env.BASE_URL + 'pages/',
});

