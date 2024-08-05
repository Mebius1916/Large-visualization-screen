import * as echarts from 'echarts';

export function jjxyFn() {
  const chart = echarts.init(document.querySelector('.chart-jjxy') as HTMLElement);
  const military_statistics_data2 = [35, 40, 60, 50, 40, 50, 49, 60, 63, 70, 60, 40, 35, 33];
  var fontColor = "#D8DBDF";
  var option = {
    grid: {
      left: "0",
      right: "20",
      top: 40,
      bottom: "5%",
      containLabel: true,
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    legend: {
      show: true,
      x: "center",
      y: 0,
      icon: "stack",
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 50,
      textStyle: {
        color: "#D8DBDF",
        fontSize: 22
      },
      data: ["安全", "威胁"],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          color: fontColor,
          fontSize: 18
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#397cbc",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "red",
          },
        },
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "01",
          "02"
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        // max: 400,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: fontColor,
            fontSize: 18
          },
        },
        axisLine: {
          lineStyle: {
            color: "#27b4c2",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#384267',
            width: 1,
            type: 'dashed',
          },
          show: true,
        },
      },
    ],
    series: [
      {
        name: "电耗",
        smooth: true,
        type: "line",

        symbol: "none",
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: "#00d4c7",
            lineStyle: {
              color: "#00d4c7",
              width: 4,
            },
            areaStyle: {
              //color: '#94C9EC'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "rgba(7,44,90,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,212,199,0.9)",
                },
              ]),
            },
          },
        },
        data: military_statistics_data2,
      }
    ],
  };

  chart.setOption(option);
  
};

export function yjxxtjFn() {
  const chart = echarts.init(document.querySelector('.chart-yjxxtj') as HTMLElement);
  const colorList = [  
    "#afa3f5",  
    "#3bafff",  
    "#3feed4",  
    "#00d488",
    "#f1bb4c",  
    "#1985ff",  
    "#ff8e8e",  
    "#efe270"  
  ];
  const option = {
    legend: {
      show: false
    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    graphic: [
      {
        type: 'text',
        left: '15%',
        top: '36%',
        style: {
          text: '1157',
          textAlign: 'center',
          fill: '#fff',
          fontSize: 32
        },
      },
      {
        type: 'text',
        left: '10%',
        bottom: 40,
        style: {
          text: '处理率  100%',
          textAlign: 'center',
          fill: '#FFFFFF',
          fontSize: 28
        }
      }
    ],
    series: [
      {
        name: '饼图',
        type: 'pie',
        radius: ['30%', '70%'],
        center: ['20%', '38%'],
        itemStyle: {
          normal: {
            color: function(params: any) {
              return colorList[params.dataIndex]
            }
          }
        },
        labelLine: {
          show: false
        },
        label:{
          show: false
        },
        color: colorList,
        data: [
          { "name": "火灾", "value": 133 },
          { "name": "电费", "value": 156 },
          { "name": "12345", "value": 259 },
          { "name": "停电", "value": 125 },
          { "name": "报修", "value": 268 },
          { "name": "投诉", "value": 24 },
          { "name": "充电桩", "value": 53 },
          { "name": "其他", "value": 139 }
        ]
      },
      {
        radius: ['62%', '70%'],
        center: ['20%', '38%'],
        type: 'pie',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        animation: false,
        tooltip: {
            show: false
        },
        itemStyle: {
            normal: {
                color:'rgba(250,250,250,0.4)'
            }
        },
        data: [{
            value: 1,
        }],
    }
    ]
  };
  chart.setOption(option);
  return chart
};

export function rpaFn() {
  const chart = echarts.init(document.querySelector('.chart-rpa') as HTMLElement);
  var data1 = [7, 4, 2, 8, 4, 3, 3];
  const option = {
    grid: {
      left: "0",
      right: "20",
      top: 40,
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      data: [
        "营销",
        "指挥中心",
        "调度",
        "数字化",
        "安监",
        "后勤",
        "人资"
      ],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 18,
        },
        margin: 20, //刻度标签与轴线之间的距离。
      }
    },
    yAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      max: 15,
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 18,
        },
      },
      splitLine: {
        lineStyle: {
          color: '#384267',
          width: 1,
          type: 'dashed',
        },
        show: true,
      },
    },
    series: [
      {//三个最低下的圆片
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [24, 10],
        "symbolOffset": [-10, 5],
        "z": 12,
        itemStyle: {
          opacity: 1,
          color: function (params) {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#398BF1' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#6F8EF2'// 100% 处的颜色
            }], false)
          }
        },
        "data": [1, 1, 1, 1, 1, 1]
      },
      //下半截柱状图
      {
        name: '2020',
        type: 'bar',
        barWidth: 24,
        barGap: '-100%',
        itemStyle: {//lenged文本
          opacity: .7,
          color: function (params) {
            return new echarts.graphic.LinearGradient(0, 0, 0.6, 0, [{
              offset: 0,
              color: '#0186ff' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#18abfd'// 100% 处的颜色
            }], false)
          }
        },

        data: data1
      },
      { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
        type: 'bar',
        barWidth: 45,
        barGap: '-100%',
        stack: '广告',
        itemStyle: {
          color: 'transparent'
        },
        data: data1
      },
      {
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [24, 10],
        "symbolOffset": [-10, -5],
        "z": 12,
        itemStyle: {
          opacity: 1,
          color: function (params) {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#12B9DB' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#6F8EF2'// 100% 处的颜色
            }], false)
          }
        },
        "symbolPosition": "end",
        "data": data1
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

export function bdyyFn() {
  const chart = echarts.init(document.querySelector('.chart-beidouyingyong') as HTMLElement);
  var data1 = [200, 100, 200, 200, 100, 150];
  const option = {
    grid: {
      left: "0",
      right: "20",
      top: 40,
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      data: [
        "2023-09",
        "2023-10",
        "2023-11",
        "2023-12",
        "2024-01",
        "2024-02"
      ],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 18,
        },
        margin: 20, //刻度标签与轴线之间的距离。
      }
    },
    yAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 18,
        },
      },
      splitLine: {
        lineStyle: {
          color: '#384267',
          width: 1,
          type: 'dashed',
        },
        show: true,
      },
    },
    series: [
      {//三个最低下的圆片
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [24, 10],
        "symbolOffset": [-10, 5],
        "z": 12,
        itemStyle: {
          opacity: 1,
          color: function (params) {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#12B9DB' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#6F8EF2'// 100% 处的颜色
            }], false)
            // var a = params.name;
            // if (a === '2023-09') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#FF9A22' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#FFD56E'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-10' || a === '2023-12') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#00EC28' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#5DF076'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-11') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-12') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2024-01') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2024-02') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // }
          }
        },
        "data": [1, 1, 1, 1, 1, 1]
      },


      //下半截柱状图
      {
        name: '2020',
        type: 'bar',
        barWidth: 24,
        barGap: '-100%',
        itemStyle: {//lenged文本
          opacity: .7,
          color: function (params) {
            return new echarts.graphic.LinearGradient(0, 0, 0.5, 0, [{
              offset: 0,
              color: '#0e9abe' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#1acaf0'// 100% 处的颜色
            }], false)
            // var a = params.name;
            // if (a === '2023-09') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#FF9A22' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#FFD56E'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-10' || a === '2023-12') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#00EC28' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#5DF076'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-11') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-12') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2024-01') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2024-02') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // }
          }
        },

        data: data1
      },

      { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
        type: 'bar',
        barWidth: 45,
        barGap: '-100%',
        stack: '广告',
        itemStyle: {
          color: 'transparent'
        },
        data: data1
      },
      {
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [24, 10],
        "symbolOffset": [-10, -5],
        "z": 12,
        itemStyle: {
          opacity: 1,
          color: function (params) {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#0e9abe' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#1acaf0'// 100% 处的颜色
            }], false)
            // var a = params.name;
            // if (a === '2023-09') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#FF9A22' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#FFD56E'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-10' || a === '2023-12') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#00EC28' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#5DF076'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-11') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2023-12') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2024-01') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // } else if (a === '2024-02') {
            //   return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#12B9DB' // 0% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#6F8EF2'// 100% 处的颜色
            //   }], false)
            // }
          }
        },
        "symbolPosition": "end",
        "data": data1
      }
    ]
  };
  chart.setOption(option);
}
export function rgznybgjFn() {
  const chart = echarts.init(document.querySelector('.chart-rgznybgj') as HTMLElement);
  chart.setOption(
    {
      legend: {
        show: true,
        x: "center",
        y: 0,
        icon: "stack",
        itemWidth: 12,
        itemHeight: 6,
        itemGap: 50,
        textStyle: {
          color: "#D8DBDF",
          fontSize: 22
        },
        data: [
          "文本类",
          "图文类",
        ],
      },
      grid: {
        left: 0,
        right: 0,
        bottom: '3%',
        containLabel: true
      },
      // 设置颜色
      color: [
        new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            {
              offset: 0,
              color: '#62FDCF' // 渐变起始颜色
            },
            {
              offset: 1,
              color: '#43C8F6' // 渐变结束颜色
            }
          ]
        ),
        new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            {
              offset: 0,
              color: '#355FF2' // 渐变起始颜色
            },
            {
              offset: 1,
              color: '#43C8F6' // 渐变结束颜色
            }
          ]
        )
      ],
      // x轴数据
      xAxis: {
        type: 'category',
        data: ['设备', '安监', '营销', '基建', '发展', '物资', '财务', '人资', '调度'],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#384267",
          },
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // y轴数据
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#384267',
            width: 1,
            type: 'dashed',
          },
          show: true,
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // 折线图
      series: [{
        name: '文本类',
        type: 'bar',
        barWidth: '16',
        data: [1000, 80, 440, 400, 2000, 160, 40, 40, 180],
        lineStyle: {
          width: 4
        }
      }, {
        name: '图文类',
        type: 'bar',
        barWidth: '16', // 柱子宽度
        data: [3810, 2600, 400]
      }]
    }
  );
}

export function zhwlFn() {
  const chart = echarts.init(document.querySelector('.chart-zhwl') as HTMLElement);
  chart.setOption(
    {
      legend: {
        show: true,
        x: "center",
        y: 0,
        icon: "stack",
        itemWidth: 12,
        itemHeight: 6,
        itemGap: 50,
        textStyle: {
          color: "#D8DBDF",
          fontSize: 22
        },
        data: [
          "设备在线率",
          "设备在线数",
        ],
      },
      grid: {
        left: 0,
        right: 0,
        bottom: '3%',
        containLabel: true
      },
      // 设置颜色
      color: ['#EBFF7F', new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#62FDCF' // 渐变起始颜色
      },
      {
        offset: 1,
        color: '#43C8F6' // 渐变结束颜色
      }
      ])],
      // x轴数据
      xAxis: {
        type: 'category',
        data: [
          "2023-09",
          "2023-10",
          "2023-11",
          "2023-12",
          "2024-01",
          "2024-02"
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#384267",
          },
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // y轴数据
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#384267',
            width: 1,
            type: 'dashed',
          },
          show: true,
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // 折线图
      series: [{
        name: '设备在线率',
        type: 'line',
        smooth: true, // 平滑曲线
        data: [120, 155, 101, 134, 90, 230, 210],
        lineStyle: {
          width: 4
        }
      }, {
        name: '设备在线数',
        type: 'bar',
        barWidth: '16', // 柱子宽度
        data: [220, 182, 191, 234, 290, 330, 310]
      }]
    }
  );
}

export function gwyhdlFn() {
  const chart = echarts.init(document.querySelector('.chart-gwyhdl') as HTMLElement);
  chart.setOption(
    {
      legend: {
        show: true,
        x: "center",
        y: 0,
        icon: "stack",
        itemWidth: 12,
        itemHeight: 6,
        itemGap: 50,
        textStyle: {
          color: "#D8DBDF",
          fontSize: 22
        },
        data: [
          "用户登录1",
          "用户登录2",
        ],
      },
      grid: {
        left: 0,
        right: 0,
        bottom: '3%',
        containLabel: true
      },
      // 设置颜色
      color: ['#3CFFDF', new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#355FF2' // 渐变起始颜色
      },
      {
        offset: 1,
        color: '#43C8F6' // 渐变结束颜色
      }
      ])],
      // x轴数据
      xAxis: {
        type: 'category',
        data: [
          "2023-09",
          "2023-10",
          "2023-11",
          "2023-12",
          "2024-01",
          "2024-02"
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#384267",
          },
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // y轴数据
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#384267',
            width: 1,
            type: 'dashed',
          },
          show: true,
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // 折线图
      series: [{
        name: '用户登录1',
        type: 'line',
        smooth: true, // 平滑曲线
        data: [120, 155, 101, 134, 90, 230, 210],
        lineStyle: {
          width: 4
        }
      }, {
        name: '用户登录2',
        type: 'bar',
        barWidth: '16', // 柱子宽度
        data: [220, 182, 191, 234, 290, 330, 310]
      }]
    }
  );
}

export function tyspjrFn() {
  const chart = echarts.init(document.querySelector('.chart-tyspjr') as HTMLElement);
  chart.setOption(
    {
      legend: {
        show: false,
        x: "center",
        y: 0,
        icon: "stack",
        itemWidth: 12,
        itemHeight: 6,
        itemGap: 50,
        textStyle: {
          color: "#D8DBDF",
          fontSize: 22
        },
        data: [
          "发现补丁",
          "补丁安装数",
        ],
      },
      grid: {
        left: 0,
        right: 0,
        bottom: '3%',
        containLabel: true
      },
      // 设置颜色
      color: ['#3CFFDF', new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#355FF2' // 渐变起始颜色
      },
      {
        offset: 1,
        color: '#43C8F6' // 渐变结束颜色
      }
      ])],
      // x轴数据
      xAxis: {
        type: 'category',
        data: [
          "2023-09",
          "2023-10",
          "2023-11",
          "2023-12",
          "2024-01",
          "2024-02"
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#384267",
          },
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // y轴数据
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#384267',
            width: 1,
            type: 'dashed',
          },
          show: true,
        },
        axisLabel: {
          fontSize: 18,
          color: '#D8DBDF'
        }
      },
      // 折线图
      series: [{
        name: '发现补丁',
        type: 'line',
        smooth: true, // 平滑曲线
        data: [120, 155, 101, 134, 90, 230, 210],
        lineStyle: {
          width: 4
        }
      }]
    }
  );
}

