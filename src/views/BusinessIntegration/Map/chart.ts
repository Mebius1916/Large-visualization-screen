import * as echarts from "echarts";

export function shebeishuFn() {
  const chart = echarts.init(
    document.getElementById("shebeishu") as HTMLElement
  );
  let newData = {
    xAxis: ["西峰", "庆城", "环县", "华池", "合水", "正宁", "宁县", "镇原"],
    yAxis: [200, 100, 300, 200, 400, 300, 200, 100],
  };
  const seriesData = {
    name: "设备数",
    type: "bar",
    barWidth: 30,
    silent: true,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(63, 242, 221, 0.97)" },
          { offset: 1, color: "rgba(49, 201, 187, 0.02)" },
        ]),
      },
    },
    data: newData.yAxis,
  };

  const option = {
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "5%",
      left: "10%",
      right: "0%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      show: false,
    },
    xAxis: {
      triggerEvent: true,
      data: newData.xAxis,
      axisLabel: {
        show: true,
        fontSize: 18,
        color: "#D8DBDF",
        align: "center",
        verticalAlign: "top",
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        axisLabel: {
          interval: 0,
          show: true,
          fontSize: 18,
          color: "#D8DBDF",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.15)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.15)",
          },
        },
      },
    ],
    series: seriesData,
  };

  chart.setOption(option);
}

export function gongdanshuFn() {
  const chart = echarts.init(
    document.getElementById("gongdanshu") as HTMLElement
  );
  let newData = {
    xAxis: ["西峰", "庆城", "环县", "华池", "合水", "正宁", "宁县", "镇原"],
    yAxis: [200, 100, 300, 200, 400, 300, 200, 100],
  };
  const seriesData = {
    name: "设备数",
    type: "bar",
    barWidth: 30,
    silent: true,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(34, 211, 255, 1)" },
          { offset: 1, color: "rgba(34, 211, 255, 0.02)" },
        ]),
      },
    },
    data: newData.yAxis,
  };

  const option = {
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "5%",
      left: "10%",
      right: "0%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      show: false,
    },
    xAxis: {
      triggerEvent: true,
      data: newData.xAxis,
      axisLabel: {
        show: true,
        fontSize: 18,
        color: "#D8DBDF",
        align: "center",
        verticalAlign: "top",
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        axisLabel: {
          interval: 0,
          show: true,
          fontSize: 18,
          color: "#D8DBDF",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.15)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.15)",
          },
        },
      },
    ],
    series: seriesData,
  };

  chart.setOption(option);
}
