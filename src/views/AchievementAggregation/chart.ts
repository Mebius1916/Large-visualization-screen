import * as echarts from 'echarts';

export function lineSzhcgslFn() {
  const chart = echarts.init(document.querySelector('.chart-line-szhcgsl') as HTMLElement);
  const military_statistics_data2 = [
    25, 23, 34, 31, 35, 44, 64, 75, 88, 101, 112, 130, 115, 129, 161
  ];
  var fontColor = "#D8DBDF";
  var option = {
    grid: {
      left: 0,
      right: 20,
      top: 40,
      bottom: 0,
      containLabel: true,
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    legend: {
      show: false,
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
        // boundaryGap: false,
        axisLabel: {
          color: fontColor,
          fontSize: 18,
          interval: 0,
          rotate: 35
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
          '202301', '202302', '202303', '202304', '202305', '202306',
          '202307', '202308', '202309', '202310', '202311', '202312',
          '202401', '202402', '202403'
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
        data: military_statistics_data2
      }
    ]
  };

  chart.setOption(option);
  
};

export function barSzhcgslFn() {
  const chart = echarts.init(document.querySelector('.chart-bar-szhcgsl') as HTMLElement);
  var data1 = [186, 169, 85, 60, 98, 572, 216, 42, 35, 32];
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
        '设备',
        '营销',
        '安监',
        '人资',
        '调度',
        '数字化',
        '通信',
        '财务',
        '发策',
        '物资'
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
          }
        },
        "data": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
          }
        },
        "symbolPosition": "end",
        "data": data1
      }
    ]
  };
  chart.setOption(option);
}

export function fhsjcpslFn() {
  const chart = echarts.init(document.querySelector('.chart-fhsjcpsl') as HTMLElement);
  chart.setOption({
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    // visualMap: {
    //   show: false,
    //   min: 80,
    //   max: 600,
    //   inRange: {
    //     colorLightness: [0, 1]
    //   }
    // },
    series: [
      {
        animation: false,
        name: '背景层',
        type: 'pie',
        radius: ['0%', '70%'],
        center: ['35%', '45%'],
        label: {
          show: false
        },
        data: [
          {
            value: 5,
            itemStyle: {
              color: '#007eff0f',
              borderColor: "#007eff4b",
              borderWidth: 1
            }
          }
        ],
        silent: true // 背景层不响应事件
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: '60%',
        center: ['35%', '45%'],
        data: [
          { value: 310 },
          { value: 60 },
          { value: 30 },
          { value: 30 },
        ],
        roseType: 'radius',
        label: {
          show: false,
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: function(params: any) {
            var colorList = ['#0084FF', '#37FFC9', '#FFD768', '#7CE4FE']; // 红绿蓝
            return colorList[params.dataIndex];
          },
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx: any) {
          return Math.random() * 200;
        }
      },
      // {
      //   animation: false,
      //   name: '背景层',
      //   type: 'pie',
      //   radius: ['0%', '7%'],
      //   center: ['35%', '45%'],
      //   data: [
      //     {
      //       value: 5,
      //       itemStyle: {
      //         color: '#EBF1FF'
      //       }
      //     }
      //   ],
      //   silent: true
      // },
      {
        animation: false,
        name: '背景层',
        type: 'pie',
        radius: ['0%', '18%'],
        center: ['35%', '45%'],
        data: [
          {
            value: 5,
            itemStyle: {
              color: '#FFFFFF0f',
              borderColor: "#FFFFFF4b",
              borderWidth: 2
            }
          }
        ],
        silent: true
      }
    ]
  });
  return chart
};

export function cflrsgzFn() {
  const chart = echarts.init(document.querySelector('.chart-cflrsgz') as HTMLElement);
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
        top: 10,
        bottom: '3%',
        containLabel: true
      },
      // 设置颜色
      color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
          "合水县",
          "华池县",
          "环县",
          "庆城县",
          "西峰区",
          "镇原县",
          "正宁县",
          "宁县"
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
      series: [ {
        name: '补丁安装数',
        type: 'bar',
        barWidth: '24', // 柱子宽度
        data: [6752, 10914, 11393, 13424, 7137, 7668, 8542, 7107]
      }]
    }
  );
};


export function bbzxFn() {
  const chart = echarts.init(document.querySelector('.chart-bbzx') as HTMLElement);
  const option = {
    "legend": {
      "show": false
    },
    "color": [
      "#00EAFF",
      "#00F6FF",
    ],
    "grid": {
      "containLabel": true,
      "left": 20,
      "right": 20,
      "bottom": 30,
      "top": 40
    },
    "xAxis": {
      "axisLabel": {
        "color": "#c0c3cd",
        "fontSize": 18,
        "interval": 0
      },
      "axisLine": {
        "lineStyle": {
          "color": "#384267",
          "width": 1,
          "type": "dashed"
        },
        "show": false
      },
      "data": [
        "设备",
        "营销",
        "数字化",
        "综合",
        "配网"
      ],
      "type": "category"
    },
    "yAxis": {
      "axisLabel": {
        "color": "#D8DBDF",
        "fontSize": 18
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "#384267",
          "type": "dashed"
        }
      },
      "axisLine": {
        "show": false
      },
      "name": ""
    },
    "series": [
      {
        "data": [
          4,
          26,
          2,
          1,
          8
        ],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "itemStyle": {
          "color": {
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false,
            "colorStops": [
              {
                "offset": 0,
                "color": "#00EAFF"
              },
              {
                "offset": 1,
                "color": "#00F6FF"
              }
            ]
          }
        },
        "label": {
          "show": false,
          "position": "top",
          "distance": 10,
          "color": "#fff"
        }
      },
      {
        "data": [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [
          0,
          "50%"
        ],
        "symbolSize": [
          30,
          15
        ]
      },
      {
        "data": [
          4,
          26,
          2,
          1,
          8
        ],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [
          0,
          "-50%"
        ],
        "symbolSize": [
          30,
          12
        ],
        "zlevel": 2
      }
    ]
  }
  chart.setOption(option);
  return chart
};

export function bgdzsmFn() {
  const chart = echarts.init(document.querySelector('.chart-bgdzsm') as HTMLElement);
  const option = {
    "legend": {
      "show": false
    },
    "color": [
      "#63caff",
      "#49beff",
    ],
    "grid": {
      "containLabel": true,
      "left": 20,
      "right": 20,
      "bottom": 30,
      "top": 40
    },
    "xAxis": {
      "axisLabel": {
        "color": "#c0c3cd",
        "fontSize": 18,
        "interval": 0,
        "rotate": 35
      },
      "axisLine": {
        "lineStyle": {
          "color": "#384267",
          "width": 1,
          "type": "dashed"
        },
        "show": false
      },
      "data": [
        "2022年1季度",
        "2022年2季度",
        "2022年3季度",
        "2022年4季度",
        "2023年1季度",
        "2023年2季度",
        "2023年3季度",
        "2023年4季度",
        "2024年1季度",
      ],
      "type": "category"
    },
    "yAxis": {
      max: 10,
      "axisLabel": {
        "color": "#D8DBDF",
        "fontSize": 18
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "#384267",
          "type": "dashed"
        }
      },
      "axisLine": {
        "show": false
      },
      "name": ""
    },
    "series": [
      {
        "data": [
          3,
          3,
          4,
          5,
          6,
          7,
          6,
          5,
          6,
        ],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "itemStyle": {
          "color": {
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false,
            "colorStops": [
              {
                "offset": 0,
                "color": "#0b9eff"
              },
              {
                "offset": 1,
                "color": "#63caff"
              }
            ]
          }
        },
        "label": {
          "show": false,
          "position": "top",
          "distance": 10,
          "color": "#fff"
        }
      },
      {
        "data": [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [
          0,
          "50%"
        ],
        "symbolSize": [
          30,
          15
        ]
      },
      {
        "data": [
          3,
          3,
          4,
          5,
          6,
          7,
          6,
          5,
          6,
        ],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [
          0,
          "-50%"
        ],
        "symbolSize": [
          30,
          12
        ],
        "zlevel": 2
      }
    ]
  }
  chart.setOption(option);
}

export function energyTop10() {
  const chart = echarts.init(document.querySelector('.energy-top10') as HTMLElement);
  var data = [
    { "code": "aaa", "stock": "aaa", "fundPost": "21.987691" },
    { "code": "bbb", "stock": "bbb", "fundPost": "20.377176" },
    { "code": "ccc", "stock": "ccc", "fundPost": "19.127404" },
    { "code": "ddd", "stock": "ddd", "fundPost": "18.40882" },
    { "code": "eee", "stock": "eee", "fundPost": "17.980597" }
  ]
  function contains(arr: any, dst: any) {
    var i = arr.length;
    while ((i -= 1)) {
      if (arr[i] == dst) {
        return i;
      }
    }
    return false;
  }


  var attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#EB3B5A" },
      { offset: 1, color: "#FE9C5A" }
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#FA8231" },
      { offset: 1, color: "#FFD14C" }
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#F7B731" },
      { offset: 1, color: "#FFEE96" }
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#395CFE" },
      { offset: 1, color: "#2EC7CF" }
    ])
  ];
  var attackSourcesColor1 = [
    "#EB3B5A",
    "#FA8231",
    "#F7B731",
    "#3860FC",
    "#1089E7",
    "#F57474",
    "#56D0E3",
    "#1089E7",
    "#F57474",
    "#1089E7",
    "#F57474",
    "#F57474"
  ];
  var attaData: any = [];
  var attaName: any = [];
  var topName: any = []
  data.forEach((it, index) => {
    attaData[index] = parseFloat(it.fundPost).toFixed(2);
    attaName[index] = it.stock;
    topName[index] = `${it.code} ${it.stock}`
  });
  var salvProMax = []; //背景按最大值
  for (let i = 0; i < attaData.length; i++) {
    salvProMax.push(attaData[0]);
  }
  function attackSourcesDataFmt(sData: any) {
    var sss: any = [];
    sData.forEach(function (item: any, i: any) {
      let itemStyle = {
        color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
      };
      sss.push({
        value: item,
        itemStyle: itemStyle
      });
    });
    return sss;
  }

  var option = {
    tooltip: {
      show: false,
      textStyle: {
        fontSize: 18
      }
    },
    color: ["#F7B731"],
    legend: {
      pageIconSize: [12, 12],
      itemWidth: 20,
      itemHeight: 10,
      textStyle: {
        fontSize: 22,
        color: "#fff"
      },
      show: false,
      selectedMode: false,
      data: ["个人所得(亿元)"]
    },
    grid: {
      left: 0,
      right: 0,
      width: "80%",
      bottom: "2%",
      top: 0,
      containLabel: true
    },
    xAxis: {
      type: "value",

      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          label: {
            show: true,
          }
        },
        pdaaing: [5, 0, 0, 0],
        postion: "left",
        data: attaName,
        axisLabel: {
          show: false // 将排名的轴标签设置为不显示
        }
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        position: "left",
        axisLabel: {
          textStyle: {
            color: "red",
            fontSize: 18
          }
        },
        data: attackSourcesDataFmt(attaName)
      },
      {//名称
        type: 'category',
        offset: -10,
        position: "left",
        axisLine: {
          show: false
        },
        inverse: false,
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          color: ["#fff"],
          align: "left",
          verticalAlign: "bottom",
          lineHeight: 40,
          fontSize: 18
        },
        data: topName
      },
    ],
    series: [
      {
        zlevel: 1,
        name: "个人所得(亿元)",
        type: "bar",
        barWidth: "15px",
        animationDuration: 1500,
        data: attackSourcesDataFmt(attaData),
        align: "center",
        itemStyle: {
          normal: {
            barBorderRadius: 0
          }
        },
        label: {
          show: false,
          fontSize: 18,
          color: "#fff",
          textBorderWidth: 2,
          padding: [2, 0, 0, 0]
        }
      },
      {
        name: "个人所得(亿元)",
        type: "bar",
        barWidth: 15,
        barGap: "-100%",
        margin: "20",
        data: salvProMax,
        textStyle: {
          fontSize: 18,
          color: "#fff"
        },
        itemStyle: {
          normal: {
            color: "#05325F",
            fontSize: 18,
            barBorderRadius: 0
          },
        }
      }
    ]
  };
  chart.setOption(option);
}

