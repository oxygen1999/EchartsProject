<!--
 * @Author: angula
 * @Date: 2021-03-29 10:24:01
 * @LastEditTime: 2021-03-29 14:55:19
 * @FilePath: \BOSS测试vue\echartsProject\aecharts\src\views\histogram.vue
-->
<template>
  <div>
    <div id="myChart" :style="{height: '300px',width:'300px'}"></div>
  </div>
</template>

<script>
export default {
  name: "histogram",
  data() {
    return {
      num: [15, 10, 36, 20, 1, 5]
    };
  },
  mounted() {
    console.log("histogram");
    this.drawLine();
  },
  methods: {
    // -----------
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      console.log(this.$echarts);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表;
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.num
          }
        ]
      });
    }
  },
  props: {},
  components: {},
  watch: {},
  computed: {},
  created() {}
};
</script>
<style scoped>
</style>