import * as echarts from "echarts";

export function energyProportion(
  selector: string,
  value: number,
  barColor: string
) {
  const chart = echarts.init(document.querySelector(selector) as HTMLElement);
  const option = {
    // title: [{
    //     text: '118',
    //     // x: '50%',
    //     // y: '46%',
    //     textAlign: 'center',
    //     textStyle: {
    //         fontSize: '40',
    //         fontWeight: '100',
    //         color: '#D7E9F9',
    //         textAlign: 'center',
    //     },
    // }],
    polar: {
      radius: ["85%", "73%"],
      center: ["50%", "50%"],
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "",
        type: "bar",
        startAngle: 90,
        roundCap: false,
        barWidth: 60,
        showBackground: true,
        backgroundStyle: {
          color: "#43607a75",
        },
        data: [value],
        coordinateSystem: "polar",
        itemStyle: {
          normal: {
            color: barColor,
          },
        },
      },
    ],
  };

  chart.setOption(option);
}

export function pmsFn() {
  const chart = echarts.init(document.getElementById("pms") as HTMLElement);
  let newData = {
    xAxis: ["8月", "9月", "10月", "11月", "12月", "1月", "2月"],
    yAxis: [
      {
        name: "输电",
        value: [120, 75, 90, 120, 75, 90, 120, 75, 90],
      },
      {
        name: "变电",
        value: [102, 130, 75, 102, 130, 75, 102, 130, 75],
      },
      {
        name: "配电",
        value: [200, 130, 75, 200, 130, 75, 200, 130, 75],
      },
    ],
  };
  let legendData = [];
  let seriesData = [];
  let colorArr = [
    "rgba(240, 236, 103, 0.8)",
    "rgba(5, 128, 253, 0.8)",
    "rgba(60, 255, 223, 0.8)",
    "rgba(240, 236, 103, 0.3)",
    "rgba(5, 128, 253, 0.3)",
    "rgba(60, 255, 223, 0.3)",
  ];
  legendData = newData.yAxis.map((item) => item.name);
  seriesData = newData.yAxis.map((item1, index1) => {
    return {
      name: item1.name,
      type: "bar",
      barWidth: 15,
      silent: true,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colorArr[index1] },
            { offset: 1, color: colorArr[index1 + 3] },
          ]),
          barBorderRadius: [30, 30, 0, 0],
        },
      },
      data: item1.value,
    };
  });

  const option = {
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "20%",
      left: "0",
      right: "0",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      orient: "horizontal",
      top: "0%",
      right: "center",
      data: legendData,
      itemWidth: 19,
      itemHeight: 4,
      itemGap: 40,
      icon: "rect",
      textStyle: {
        fontSize: 22,
        color: "#fff",
      },
    },
    xAxis: {
      triggerEvent: true,
      data: newData.xAxis.map((item) => item),
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

export function wuziFn() {
  const chart = echarts.init(document.getElementById("wuzi") as HTMLElement);
  let newData = {
    xAxis: ["8月", "9月", "10月", "11月", "12月", "1月", "2月"],
    yAxis: [
      {
        name: "节资将本率",
        value: [120, 75, 90, 120, 75, 90, 120, 75, 90],
      },
      {
        name: "供应全业务在线办理率",
        value: [102, 130, 75, 102, 130, 75, 102, 130, 75],
      },
      {
        name: "移动作业应用率",
        value: [200, 130, 75, 200, 130, 75, 200, 130, 75],
      },
    ],
  };
  let legendData = [];
  let seriesData = [];
  let colorArr = [
    "rgba(152, 136, 222, 0.8)",
    "rgba(5, 128, 253, 0.8)",
    "rgba(60, 255, 223, 0.8)",
    "rgba(152, 136, 222, 0.3)",
    "rgba(5, 128, 253, 0.3)",
    "rgba(60, 255, 223, 0.3)",
  ];
  legendData = newData.yAxis.map((item) => item.name);
  seriesData = newData.yAxis.map((item1, index1) => {
    return {
      name: item1.name,
      type: "bar",
      barWidth: 15,
      silent: true,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colorArr[index1] },
            { offset: 1, color: colorArr[index1 + 3] },
          ]),
          barBorderRadius: [30, 30, 0, 0],
        },
      },
      data: item1.value,
    };
  });

  const option = {
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "20%",
      left: "0",
      right: "0",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      orient: "horizontal",
      top: "0%",
      // right: "center",
      data: legendData,
      itemWidth: 19,
      itemHeight: 4,
      itemGap: 40,
      icon: "rect",
      textStyle: {
        fontSize: 22,
        color: "#fff",
      },
    },
    xAxis: {
      triggerEvent: true,
      data: newData.xAxis.map((item) => item),
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

export function jingtaiFn() {
  const chart = echarts.init(document.getElementById("jingtai") as HTMLElement);
  let legendData = ["输电线路", "变电厂站", "配网线路", "低压台区"];
  let xAxisData = [
    "03-15",
    "03-16",
    "03-17",
    "03-18",
    "03-19",
    "03-20",
    "03-21",
  ];
  let seriesData = [1, 2, 3, 5, 5, 1, 1];
  let seriesData1 = [1, 2, 4, 3, 6, 6, 5];
  let seriesData2 = [2, 1, 3, 4, 5, 2, 1];
  let seriesData3 = [4, 3, 7, 5, 4, 2, 3];

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "20%",
      left: "0",
      right: "0",
    },
    legend: {
      orient: "horizontal",
      top: "0%",
      // right: "center",
      data: legendData,
      itemWidth: 19,
      itemHeight: 4,
      itemGap: 40,
      icon: "rect",
      textStyle: {
        fontSize: 22,
        color: "#fff",
      },
    },
    xAxis: {
      triggerEvent: true,
      data: xAxisData,
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
    series: [
      {
        name: legendData[0],
        type: "line",
        symbol: "circle", //设定为实心点
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        itemStyle: {
          normal: {
            color: `rgba(5, 128, 253, 1)`,
            lineStyle: {
              //线的颜色
              color: `rgba(5, 128, 253, 1)`,
              width: 2,
            },
            areaStyle: {
              //新版渐变色实现
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(5, 128, 253, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(5, 128, 253, 0.1)",
                  },
                ],
              },
            },
          },
        },
        data: seriesData,
      },
      {
        name: legendData[1],
        type: "line",
        symbol: "circle", //设定为实心点
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        itemStyle: {
          normal: {
            color: `rgba(60, 255, 223, 1)`,
            lineStyle: {
              //线的颜色
              color: `rgba(60, 255, 223, 1)`,
              width: 2,
            },
            areaStyle: {
              //新版渐变色实现
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(60, 255, 223, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(60, 255, 223, 0.1)",
                  },
                ],
              },
            },
          },
        },
        data: seriesData1,
      },
      {
        name: legendData[2],
        type: "line",
        symbol: "circle", //设定为实心点
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        itemStyle: {
          normal: {
            color: `rgba(255, 249, 105, 1)`,
            lineStyle: {
              //线的颜色
              color: `rgba(255, 249, 105, 1)`,
              width: 2,
            },
            areaStyle: {
              //新版渐变色实现
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255, 249, 105, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 249, 105, 0.1)",
                  },
                ],
              },
            },
          },
        },
        data: seriesData2,
      },
      {
        name: legendData[3],
        type: "line",
        symbol: "circle", //设定为实心点
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        itemStyle: {
          normal: {
            color: `rgba(182, 165, 255, 1)`,
            lineStyle: {
              //线的颜色
              color: `rgba(182, 165, 255, 1)`,
              width: 2,
            },
            areaStyle: {
              //新版渐变色实现
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(182, 165, 255, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(182, 165, 255, 0.1)",
                  },
                ],
              },
            },
          },
        },
        data: seriesData3,
      },
    ],
  };

  chart.setOption(option);
}

export function dongtaiFn() {
  const chart = echarts.init(document.getElementById("dongtai") as HTMLElement);
  let legendData = ["主网叠加率", "配网叠加率", "用采叠加率"];
  let xAxisData = [
    "03-14",
    "03-15",
    "03-16",
    "03-17",
    "03-18",
    "03-19",
    "03-20",
  ];
  let seriesData = [1, 2, 3, 5, 5, 1, 1];
  let seriesData1 = [1, 2, 4, 3, 6, 6, 5];
  let seriesData2 = [2, 1, 3, 4, 5, 2, 1];

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "20%",
      left: "0",
      right: "0",
    },
    legend: {
      orient: "horizontal",
      top: "0%",
      // right: "center",
      data: legendData,
      itemWidth: 19,
      itemHeight: 4,
      itemGap: 40,
      icon: "rect",
      textStyle: {
        fontSize: 22,
        color: "#fff",
      },
    },
    xAxis: {
      triggerEvent: true,
      data: xAxisData,
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
    series: [
      {
        name: legendData[0],
        type: "line",
        symbol: "circle", //设定为实心点
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        itemStyle: {
          normal: {
            color: `rgba(5, 128, 253, 1)`,
            lineStyle: {
              //线的颜色
              color: `rgba(5, 128, 253, 1)`,
              width: 2,
            },
            areaStyle: {
              //新版渐变色实现
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(5, 128, 253, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(5, 128, 253, 0.1)",
                  },
                ],
              },
            },
          },
        },
        data: seriesData,
      },
      {
        name: legendData[1],
        type: "line",
        symbol: "circle", //设定为实心点
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        itemStyle: {
          normal: {
            color: `rgba(60, 255, 223, 1)`,
            lineStyle: {
              //线的颜色
              color: `rgba(60, 255, 223, 1)`,
              width: 2,
            },
            areaStyle: {
              //新版渐变色实现
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(60, 255, 223, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(60, 255, 223, 0.1)",
                  },
                ],
              },
            },
          },
        },
        data: seriesData1,
      },
      {
        name: legendData[2],
        type: "line",
        symbol: "circle", //设定为实心点
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        itemStyle: {
          normal: {
            color: `rgba(182, 165, 255, 1)`,
            lineStyle: {
              //线的颜色
              color: `rgba(182, 165, 255, 1)`,
              width: 2,
            },
            areaStyle: {
              //新版渐变色实现
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(182, 165, 255, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(182, 165, 255, 0.1)",
                  },
                ],
              },
            },
          },
        },
        data: seriesData2,
      },
    ],
  };

  chart.setOption(option);
}

export function wentiFn() {
  const chart = echarts.init(document.getElementById("wenti") as HTMLElement);
  let newData = {
    xAxis: ["客户基础档案", "电网基础数据", "测量数据"],
    yAxis: [
      {
        name: "累计问题",
        value: [120, 75, 90],
      },
      {
        name: "累计整改",
        value: [102, 130, 75],
      },
    ],
  };
  let legendData = [];
  let seriesData = [];
  let colorArr = [
    "rgba(5, 128, 253, 0.8)",
    "rgba(60, 255, 223, 0.8)",
    "rgba(5, 128, 253, 0.3)",
    "rgba(60, 255, 223, 0.3)",
  ];
  legendData = newData.yAxis.map((item) => item.name);
  seriesData = newData.yAxis.map((item1, index1) => {
    return {
      name: item1.name,
      type: "bar",
      barWidth: 30,
      silent: true,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colorArr[index1] },
            { offset: 1, color: colorArr[index1 + 2] },
          ]),
        },
      },
      data: item1.value,
    };
  });

  const option = {
    grid: {
      containLabel: true,
      bottom: "5%",
      top: "20%",
      left: "0",
      right: "0",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      orient: "horizontal",
      top: "0%",
      // right: "center",
      data: legendData,
      itemWidth: 19,
      itemHeight: 4,
      itemGap: 40,
      icon: "rect",
      textStyle: {
        fontSize: 22,
        color: "#fff",
      },
    },
    xAxis: {
      triggerEvent: true,
      data: newData.xAxis.map((item) => item),
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

export function wlaqzelsFn() {
  const chart = echarts.init(
    document.getElementById("chart-wlaqzels") as HTMLElement
  );
  const option = {
    legend: {
      show: false,
      data: ["市", "县", "所"],
    },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "0",
        top: 10, // 调整 top 属性的值
        bottom: 60, // 调整 bottom 属性的值
        width: "55%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "ascending", // 调整 sort 属性为 'ascending'
        gap: 0,
        itemStyle: {
          borderColor: "#ffffff00",
          borderWidth: 1,
        },
        label: {
          show: false,
        },
        data: [
          {
            value: 20,
            valueText: 1,
            name: "市",
            itemStyle: { color: "#FFCA7A" },
          },
          {
            value: 40,
            valueText: 27,
            name: "县",
            itemStyle: { color: "#36DC88" },
          },
          {
            value: 60,
            valueText: 976,
            name: "所",
            itemStyle: { color: "#4C9DFF" },
          },
        ],
      },
    ],
  };
  chart.setOption(option);
}
