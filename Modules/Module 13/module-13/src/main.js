import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from '/components/teams/TeamsFooter.vue';
import UsersFooter from '/components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, 
        { 
            name: 'teams',
            path: '/teams', 
            components: { default: TeamsList, footer: TeamsFooter }, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
            ]
        }, // alias: '/'
        { path: '/users', components: {
            // 1 default - 1 named component -> App.vue (default and footer)
            default: UsersList, footer: UsersFooter
        } },
        { path: '/:notFount(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        // console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

const app = createApp(App)

app.use(router);

app.mount('#app');
