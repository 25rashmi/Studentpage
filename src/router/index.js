import Vue from 'vue';
import Router from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
// import Index from '../components/Index.vue';
import Students from '../Students/Students.vue';
import Archive from '../Students/Archive.vue';
import Download from '../Students/Download.vue';
import Delete from '../Students/Delete.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/side',
      name: 'Sidebar',
      component: Sidebar,
    },
    {
      path: '/students',
      name: 'Students',
      component: Students,
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive,
    },
    {
      path: '/download',
      name: 'Download',
      component: Download,
    },
    {
      path: '/delete',
      name: 'Delete',
      component: Delete,
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
  ],
});
