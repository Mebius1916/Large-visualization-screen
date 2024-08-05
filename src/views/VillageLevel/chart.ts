import * as echarts from 'echarts';

export function totalEnergy() {
  const chart = echarts.init(document.querySelector('.chart-total-energy') as HTMLElement);
  chart.setOption({
    legend: {
      show: true,
      x: "center",
      y: 0,
      icon: "stack",
      itemWidth: 12,
      itemHeight: 6,
      itemGap: 30,
      textStyle: {
        color: "#D8DBDF",
        fontSize: 22
      },
      data: [
        "电力生产",
        "原油加工及石油制品制造",
        "石油开采",
        "热力生产和供应",
        "其他"
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
        name: '电力生产',
        type: 'line',
        data: [100, 212, 300, 500, 400, 100, 100],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      },
      {
        name: '原油加工及石油制品制造',
        type: 'line',
        data: [100, 200, 400, 300, 600, 400, 500],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      },
      {
        name: '石油开采',
        type: 'line',
        data: [211, 112, 333, 400, 510, 211, 100],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      },
      {
        name: '热力生产和供应',
        type: 'line',
        data: [400, 300, 700, 500, 400, 200, 300],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      },
      {
        name: '其他',
        type: 'line',
        data: [300, 200, 600, 300, 500, 100, 200],
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4
        }
      }
    ]
  
  });
};

export function industrialValueAdded() {
  const chart = echarts.init(document.querySelector('.chart-industrial-value-added') as HTMLElement);
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
      data: ["能耗", "电耗"],
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

export function energyPerUnitOutput() {
  const chart = echarts.init(document.querySelector('.chart-energ-perUnit-output') as HTMLElement);
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
      "bottom": 10,
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
        "2023-09",
        "2023-10",
        "2023-11",
        "2023-12",
        "2024-01",
        "2024-02"
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
          200,
          85,
          112,
          50,
          305,
          150
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
          200,
          85,
          112,
          50,
          305,
          150
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

