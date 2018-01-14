import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Frontpage from '@/components/Frontpage';
import ReadingList from '@/components/ReadingList';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'is-active',
  linkActiveClass: '',
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage,
    },
    {
      path: '/readinglist',
      name: 'ReadingList',
      component: ReadingList,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
