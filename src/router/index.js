import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Main = () => import('views/Main')
const MyWeekReport = () => import('views/main/MyWeeklyReport')
const shareMe = () => import('views/main/ShareMe')
const setSharer = () => import('views/main/setSharer');

const routes = [{
    path: '/',
    redirect: 'main'
  },
  {
    name: 'main',
    path: '/main',
    component: Main,
    children: [{
        path: '/',
        redirect: 'myWeeklyReport'
      },
      {
        name: 'myWeeklyReport',
        path: 'myWeeklyReport',
        component: MyWeekReport,
        meta: {
          title: '我的周报'
        }
      },
      {
        name: 'shareMe',
        path: 'shareMe',
        component: shareMe,
        meta: {
          title: '分享给我的'
        }
      },
      {
        name: 'setSharer',
        path: 'setSharer',
        component: setSharer,
        meta: {
          title: '设置分享人'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router