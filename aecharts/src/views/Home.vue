<!--
 * @Author: angula
 * @Date: 2021-03-29 10:21:49
 * @LastEditTime: 2021-03-29 11:37:01
 * @FilePath: \BOSS测试vue\echartsProject\aecharts\src\views\Home.vue
-->
<template>
  <div>
    test
    <br />
    <router-link to="/histogram">柱形图示例</router-link>
    <br />
    <router-link to="/Acircle">饼图示例</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  props: {},
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>