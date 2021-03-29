/*
 * @Author: angula
 * @Date: 2021-03-29 10:15:56
 * @LastEditTime: 2021-03-29 11:08:03
 * @FilePath: \BOSS测试vue\echartsProject\aecharts\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入echarts
import * as echarts from 'echarts';
// import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
