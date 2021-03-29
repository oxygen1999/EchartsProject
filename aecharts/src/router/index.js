/*
 * @Author: angula
 * @Date: 2021-03-29 10:15:56
 * @LastEditTime: 2021-03-29 11:38:00
 * @FilePath: \BOSS??vue\echartsProject\aecharts\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/histogram',
    name: 'histogram',
    component: () => import('../views/histogram.vue')
  },
  {
    path: '/Acircle',
    name: 'Acircle',
    component: () => import('../views/Acircle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
