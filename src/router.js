import Vue from 'vue'
import Router from 'vue-router'
//首页
const HomeRouter = resolve => require(['@/views/home/HomeRouter.vue'], resolve);
const Home = resolve => require(['@/views/home/Home.vue'], resolve);
const Details = resolve => require(['@/views/home/Details.vue'], resolve);



const Index = resolve => require(['@/views/index/Index.vue'], resolve);
const Echarts = resolve => require(['@/views/echarts/Echarts.vue'], resolve);
const Table = resolve => require(['@/views/table/Table.vue'], resolve);


Vue.use(Router);
export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect:"home",
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeRouter,
          meta: {
            title: "xxx隧道"
          },
          children: [
            {
              path: "",
              name: "home",
              component: Home,
              meta: {
                title: "xxx隧道列表"
              },
            },
            {
              path: "details",
              name: "home",
              component: Details,
              meta: {
                title: "xxx隧道详情"
              },
            }
          ]
        },
        {
          path: "/table",
          name: "table",
          component: Table
        },
        {
          path: "/echarts",
          name: "echarts",
          component: Echarts
        }
      ]
    },
  ]
})
