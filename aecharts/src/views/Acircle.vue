<!--
 * @Author: angula
 * @Date: 2021-03-29 11:35:33
 * @LastEditTime: 2021-03-29 16:33:04
 * @FilePath: \BOSS测试vue\echartsProject\aecharts\src\views\Acircle.vue
-->
<template>
  <div class="main">
    <div class="itemOne">
      <div id="container" :style="{height: '300px',width:'500px'}">test</div>
    </div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  name: "Acircle",
  data() {
    return {
      allTotal: { h5Commit: 679, eipsCommit: 345, eipsOnlineCommit: 801 },
      Subname: [
        "h5挂件提交",
        "小程序票据提交",
        "小程序线上报销",
        "票据推送",
        "五要素查询"
      ]
    };
  },
  methods: {
    init() {
      // var dom = document.getElementById("container");
      console.log(this.$echarts);
      let myChart = this.$echarts.init(document.getElementById("container"));
      console.log(myChart);
      // var app = {};
      var option = null;
      var data = [
        {
          value: this.allTotal.h5Commit,
          name: "h5挂件提交",
          itemStyle: { color: "#0099FF" }
        },
        {
          value: this.allTotal.eipsCommit,
          name: "小程序票据提交",
          itemStyle: { color: "#22DD48" }
        },
        {
          value: this.allTotal.eipsOnlineCommit,
          name: "小程序线上报销",
          itemStyle: { color: "#FFFF00" }
        }
        // { value: 33, name: "票据推送", itemStyle: { color: "#000033" } },
        // { value: 54, name: "五要素查询", itemStyle: { color: "#660099" } }
      ];
      option = {
        // title: {
        //     text: '某站点用户访问来源',
        //     subtext: '纯属虚构',
        //     left: 'center'
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          icon: "circle",
          left: "left",
          // // right: 0,
          // align: 'left',
          y: "center",
          orient: "vertical",
          right: 0,
          itemGap: 20,
          itemWidth: 8,
          padding: 10,
          textStyle: {
            fontSize: 12
          },
          align: "left",
          data: this.Subname,
          formatter: function(name) {
            var total = 0;
            var target;
            console.log(data);
            for (var i = 0, l = data.length; i < l; i++) {
              if (data[i].name == name) {
                target = data[i].value;
              }
            }
            var arr = ["{a|" + name + "}{b|" + target + "}"];
            console.log(arr);
            console.log(arr.join("\n"));
            return arr.join("\n");
          },
          textStyle: {
            rich: {
              a: {
                top: 0,
                fontSize: 12,
                // align: 'left',
                width: 80,
                padding: [0, 0, 0, 10]
              },
              b: {
                fontSize: 12,
                align: "right",
                width: 50,
                color: "#0099FF",
                lineHeight: 2
              }
            }
          }
        },
        series: [
          {
            name: "提交来源",
            type: "pie",
            radius: "35%", //图形大小
            center: ["60%", "50%"],
            label: {
              normal: {
                // position: 'inner',
                // show: false
                formatter: "{c}"
              }
            },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            textStyle: {
              padding: [0, 0, 0, 0]
            }
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    }
  },
  props: {},
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.init();
  }
};
</script>
<style scoped>
.itemOne {
  margin-left: 100px;
}
#container {
  /* margin-left: 1000px; */
  position: relative;
}
</style>