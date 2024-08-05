import * as echarts from 'echarts';

export function ldbdxfqsFn() {
  const chart = echarts.init(document.querySelector('.chart-ldbdxfqs') as HTMLElement);
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
      }, {
        name: '补丁安装数',
        type: 'bar',
        barWidth: '16', // 柱子宽度
        data: [220, 182, 191, 234, 290, 330, 310]
      }]
    }
  );
};

export function dhjkgjFn() {
  const chart = echarts.init(document.querySelector('.chart-dhjkgj') as HTMLElement);
  chart.setOption({
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
        "一级告警",
        "二级告警",
        "三级告警",
        "四级告警"
      ],
    },
    grid: {
      left: 0,
      right: 0,
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月"
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
    series: [
      {
        name: '一级告警',
        type: 'line',
        data: [125, 210, 160, 210, 310, 211, 190],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      },
      {
        name: '二级告警',
        type: 'line',
        data: [121, 170, 140, 310, 100, 200, 300],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      },
      {
        name: '三级告警',
        type: 'line',
        data: [120, 260, 140, 260, 150, 300, 220],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      },
      {
        name: '四级告警',
        type: 'line',
        data: [20, 90, 50, 200, 80, 50, 130],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      }
    ]

  });
};

export function gaojingqushiFn() {
  const chart = echarts.init(document.querySelector('.chart-gaojingqushi') as HTMLElement);
  const military_statistics_data1 = [220, 100, 250, 145, 240, 130, 325, 155, 340, 250, 345, 240,];
  const military_statistics_data2 = [310, 325, 155, 340, 110, 345, 240, 135, 325, 155, 340, 250,];
  // const military_statistics_data3 = [345, 240, 135, 325, 155, 340, 250, 345, 240, 135, 325, 155];
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
          "2023-09",
          "2023-10",
          "2023-11",
          "2023-12",
          "2024-01",
          "2024-02"
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 400,
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
        name: "能耗",
        type: "line",
        symbol: "circle",
        symbolSize: 8,
        smooth: true,

        itemStyle: {
          normal: {
            color: "#0092f6",
            lineStyle: {
              color: "#0092f6",
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
                  color: "rgba(0,146,246,0.9)",
                },
              ]),
            },
          },
        },
        markPoint: {
          itemStyle: {
            normal: {
              color: "red",
            },
          },
        },
        data: military_statistics_data1,
      },
      {
        name: "电耗",
        smooth: true,
        type: "line",

        symbol: "circle",
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
}

export function wlgjlxFn() {
  const chart = echarts.init(document.querySelector('.chart-wlgjlx') as HTMLElement);
  const option = {
    grid: {
      left: '0',
      right: "0",
      top: "0",
      bottom: "0",
      containLabel: true,
    },
    // tooltip: {
    //   trigger: 'item',
    // },
    legend: {
      show: false,
      selectedMode: false,
      orient: 'vertical',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 40,
      type: 'scroll',
      right: '0%',
      top: 'center',
      // padding: [10, 0],
      formatter: function (name: string) {
        var value = option.series[2].data.find(item => item.name === name).value;
        var percent = ((value / 100) * 100).toFixed(2) + '%';
        return `{a|${name}}      {b|${percent}}`;
      },
      textStyle: {
        rich: {
          a: {
            color: '#fff',
            fontSize: 28
          },
          b: {
            color: function(params) {
              return 'red';
            },
            fontSize: 28,
          }
        }
      },
      data: ['信息泄露漏洞', '跨站脚本攻击', '发现目录攻击', '代码执行漏洞', '空口令登录行为'],
    },
    series: [
      {
        name: '',
        type: 'pie',
        hoverAnimation: false,
        legendHoverLink: false,
        cursor: 'default',
        radius: ['52%', '70%'],
        center: ['30%', '50%'],
        color: [
          'rgba(255, 231, 119, 0.2)',
          'rgba(90, 175, 255, 0.2)',
          'rgba(55, 255, 201, 0.2)',
          'rgba(0, 132, 255, 0.2)',
          'rgba(25, 214, 255, 0.2)',
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },

        tooltip: {
          show: false,
        },

        zlevel: 1,
        itemStyle: {
          normal: {
            show: false,
          },
          ellipsis: {
            show: false,
          },
        },

        data: [
          {
            value: 20,
            name: '',
          },
          {
            value: 20,
            name: '',
          },
          {
            value: 20,
            name: '',
          },
          {
            value: 20,
            name: '',
          },
          {
            value: 20,
            name: '',
          },
        ],
      },
      {
        name: '',
        type: 'pie',
        zlevel: 2,
        cursor: 'default',
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['57%', '70%'],
        center: ['30%', '50%'],
        color: [
          'rgba(255, 231, 119, 0.5)',
          'rgba(90, 175, 255, 0.5)',
          'rgba(55, 255, 201, 0.5)',
          'rgba(0, 132, 255, 0.5)',
          'rgba(25, 214, 255, 0.5)',
        ],
        labelLine: {
          show: false,
        },
        itemStyle: {
          normal: {
            borderColor: '#0a1a2a',
          },
          ellipsis: {
            borderColor: '#0a1a2a',
          },
        },
        tooltip: {
          show: false,
        },
        data: [
          {
            value: 20,
            name: '',
          },
          {
            value: 20,
            name: '',
          },
          {
            value: 20,
            name: '',
          },
          {
            value: 20,
            name: '',
          }
        ],
      },
      {
        name: '农作物类型',
        type: 'pie',
        zlevel: 3,
        radius: ['70%', '80%'],
        center: ['30%', '50%'],
        color: ['rgba(255, 231, 119, 1)',
          'rgba(90, 175, 255, 1)',
          'rgba(55, 255, 201, 1)',
          'rgba(0, 132, 255, 1)',
          'rgba(25, 214, 255, 1)'],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          shadowBlur: 17,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          borderColor: '#0a1a2a',
        },
        data: [
          {
            value: 10,
            name: '信息泄露漏洞',
            color: 'rgba(255, 231, 119, 1)'
          },
          {
            value: 10,
            name: '跨站脚本攻击',
            color: 'rgba(90, 175, 255, 1)'
          },
          {
            value: 15,
            name: '发现目录攻击',
            color: 'rgba(55, 255, 201, 1)'
          },
          {
            value: 25,
            name: '代码执行漏洞',
            color: 'rgba(0, 132, 255, 1)'
          },
          {
            value: 40,
            name: '空口令登录行为',
            color: 'rgba(25, 214, 255, 1)'
          }
        ],
      },
    ],
  };
  chart.setOption(option);
  return option
}

export function energyProportion(selector: string, value: number, barColor: string) {
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
      radius: ['85%', '73%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,

      },
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '',
      type: 'bar',
      startAngle: 90,
      roundCap: false,
      barWidth: 60,
      showBackground: true,
      backgroundStyle: {
        color: '#43607a75',
      },
      data: [value],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: barColor
        }
      }
    }

    ]
  };

  chart.setOption(option);
}
export const wlaqzels_data = [
  { value: 20, valueText: 1, name: '公司网络安全责任书', itemStyle: { color: '#FFCA7A' } },
  { value: 40, valueText: 27, name: '部门网络安全责任书', itemStyle: { color: '#36DC88' } },
  { value: 60, valueText: 976, name: '保密安全承诺书', itemStyle: { color: '#4C9DFF' } },
  { value: 80, valueText: 31008, name: '网络安全承诺书', itemStyle: { color: '#346FF5' } }
]
export function wlaqzelsFn() {
  const chart = echarts.init(document.querySelector('.chart-wlaqzels') as HTMLElement);
  const option = {
    legend: {
      show: false,
      data: ['公司网络安全责任书', '部门网络安全责任书', '保密安全承诺书', '网络安全承诺书'],
      textStyle: {
        color: "#D8DBDF",
        fontSize: 22
      },
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '0',
        top: 10, // 调整 top 属性的值
        bottom: 60, // 调整 bottom 属性的值
        width: '55%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'ascending', // 调整 sort 属性为 'ascending'
        gap: 0,
        itemStyle: {
          borderColor: '#ffffff00',
          borderWidth: 1
        },
        label: {
          show: false
        },
        data: wlaqzels_data
      }
    ]
  };
  chart.setOption(option);
}
