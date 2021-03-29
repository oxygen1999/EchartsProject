<!--
 * @Author: angula
 * @Date: 2021-03-29 10:21:49
 * @LastEditTime: 2021-03-29 11:10:32
 * @FilePath: \BOSS测试vue\echartsProject\aecharts\src\views\Home.vue
-->
<template>
  <div>
    test
    <br />
    <router-link to="/histogram">圆形图展示</router-link>
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