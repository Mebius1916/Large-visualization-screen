import {
  defineComponent,
  reactive,
  onMounted,
  watchEffect,
} from "vue";
import Skeleton from "@/components/Skeleton";
import Card from "@/components/Card";
import Map from "./Map";
import {
  energyProportion,
  pmsFn,
  wuziFn,
  jingtaiFn,
  dongtaiFn,
  wentiFn,
  wlaqzelsFn,
} from "./chart";

import "./style.less";
import { list1, list2 } from "./data.json";

interface State {
  title?: string;
  mapType?: string;
  isInfoBox?: boolean;
  shuzihua: any[];
  huodongNumber: any[];
  scrollInterval: number;
  tableData: any[];
  tableName: string;
  tableType: 1 | 2;
  dataTitle: string;
  dataType: 1 | 2;
}

export default defineComponent(() => {
  const state = reactive<State>({
    title: "数字化全业务运营中心",
    mapType: "bg2",
    isInfoBox: true,
    shuzihua: [
      { color: "#218FF7", name: "推广任务数", value: 19, icon: "icon-1.png" },
      { color: "#00FF96", name: "典型案例", value: 11, icon: "icon-2.png" },
      { color: "#FFE16A", name: "优秀典型案例", value: 1, icon: "icon-3.png" },
    ],
    huodongNumber: [
      {
        color: "#218FF7",
        name: "活动总数",
        value: 5,
        icon: ["icon-5.png", "blue.png"],
      },
      {
        color: "#00FF96",
        name: "竞赛类",
        value: 3,
        icon: ["icon-6.png", "green.png"],
      },
      {
        color: "#218FF7",
        name: "创新类",
        value: 2,
        icon: ["icon-7.png", "blue.png"],
      },
    ],
    scrollInterval: 0,
    tableData: list1,
    tableName: "配网专业台区智能终端覆盖情况表",
    tableType: 1,

    dataTitle: "数据主人制认定情况-按专业",
    dataType: 1,
  });

  const getImageUrl = (name: string) => {
    return new URL(`../../assets/business-integration/${name}`, import.meta.url)
      .href;
  };
  /**
   * 监听某个状态的改变
   */
  watchEffect(
    (onInvalidate) => {
      /**
       * 当组件失效，watchEffect被主动停止或者副作用即将重新执行时，这个函数会执行
       */
      onInvalidate(() => {});
    },
    {
      /**
       * post: 在组件更新后触发，这样你就可以访问更新的 DOM。
       * pre: 默认值，在组件更新前触发
       * sync: 同步触发，低效
       */
      flush: "post",
    }
  );

  const onChangeData = () => {
    if (state.dataType === 1) {
      state.dataTitle = "数据主人制认定情况-按组织机构";
      state.dataType = 2;

      setTimeout(() => {
        wlaqzelsFn();
      }, 0);
    } else {
      state.dataTitle = "数据主人制认定情况-按专业";
      state.dataType = 1;
    }
  };

  const changeTableFn = () => {
    if (state.tableType === 1) {
      state.tableData = list2;
      state.tableName = "营销专业台区智能终端覆盖情况表";
      state.tableType = 2;
    } else {
      state.tableData = list1;
      state.tableName = "配网专业台区智能终端覆盖情况表";
      state.tableType = 1;
    }

    const tbody = document.querySelector(".scrollable-tbody") as HTMLElement;
    tbody.scrollTop = 0;
  };

  onMounted(() => {
    pmsFn();
    wuziFn();
    jingtaiFn();
    dongtaiFn();
    wentiFn();

    /**
     * 表格自动滚动
     */
    const tbody = document.querySelector(".scrollable-tbody") as HTMLElement;

    function startAutoScroll() {
      state.scrollInterval = setInterval(() => {
        tbody.scrollTop += 1; // 修改这个值以调整滚动速度
        /**
         * 滚动到末尾自动回到顶部
         */
        if (tbody.scrollTop >= tbody.scrollHeight - tbody.clientHeight) {
          tbody.scrollTop = 0;
        }
      }, 20); // 修改这个值以调整滚动频率
    }

    function stopAutoScroll() {
      clearInterval(state.scrollInterval);
    }

    // 鼠标移入暂停滚动
    tbody.addEventListener("mouseenter", stopAutoScroll);

    // 鼠标移出恢复滚动
    tbody.addEventListener("mouseleave", startAutoScroll);

    // 页面加载完毕开始自动滚动
    startAutoScroll();
  });

  return () => {
    const { title, mapType } = state;

    return (
      <Skeleton title={title} mapType={mapType}>
        <div class="business-integration">
          <div class="bi-left">
            <Card title="电网一张图" style="height: 40%;">
              <div class="part">
                <div class="szhnlkapt-title">静态数据准确率</div>
                <div class="chart" id="jingtai"></div>
                <div class="szhnlkapt-title">动态数据叠加率</div>
                <div class="chart" id="dongtai"></div>
              </div>
            </Card>
            <Card
              title="数据一个源"
              style="margin-top: 30px;height: calc(54% - 30px);"
              class="abnormal-data-key"
            >
              <div class="part">
                <div
                  class="szhnlkapt-title"
                  style="cursor: pointer;"
                  onClick={onChangeData}
                >
                  {state.dataTitle}
                  <div class="triangle"></div>
                </div>
                <div
                  v-show={state.dataType === 1}
                  class="chart_item"
                  style="flex: 0.8 0;"
                >
                  <div class="ea-img">
                    <img class="ea-img2" src={getImageUrl("icon-bj.png")} />
                    <img class="ea-img1" src={getImageUrl("host.png")} />
                  </div>
                  <div class="ea-value">
                    <div class="eav-item">
                      <span class="eavi-title">业务主人</span>
                      <span class="eavi-value">95.81</span>%
                    </div>
                    <div class="eav-item">
                      <span class="eavi-title">生产主人</span>
                      <span class="eavi-value">4.19</span>%
                    </div>
                  </div>
                </div>
                <div
                  v-show={state.dataType === 2}
                  style="width: 100%; flex: 0.8 0; position: relative;display: flex;align-items: center;justify-content: center;"
                >
                  <div
                    id="chart-wlaqzels"
                    class="chart-wlaqzels"
                    style="width: 100%;height: 100%;pointer-events: none"
                  ></div>
                  <div class="chart-legent">
                    {[
                      {
                        name: "市",
                        itemStyle: { color: "#FFCA7A" },
                      },
                      {
                        name: "县",
                        itemStyle: { color: "#36DC88" },
                      },
                      {
                        name: "所",
                        itemStyle: { color: "#4C9DFF" },
                      },
                    ].map((item) => {
                      return (
                        <div class="chart-legent_item">
                          <span
                            style={{
                              background: item.itemStyle.color,
                              height: "2px",
                            }}
                          ></span>
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div class="szhnlkapt-title">数据质量情况</div>
                <div class="chart_item" style="flex-direction: column;">
                  <div class="tips">
                    <div class="tips_item">
                      <span class="label">累计问题</span>
                      <span class="value">2323</span>
                      <span class="unit">个</span>
                    </div>
                    <div class="tips_item">
                      <span class="label">累计整改</span>
                      <span class="value" style="color: rgba(60, 255, 223, 1)">
                        2163
                      </span>
                      <span class="unit">个</span>
                    </div>
                    <div class="tips_item">
                      <span class="label">综合整改率</span>
                      <span
                        class="value"
                        style="color: rgba(255, 249, 105, 1);"
                      >
                        93.2
                      </span>
                      <span class="unit">%</span>
                    </div>
                  </div>

                  <div class="chart" id="wenti"></div>
                </div>
              </div>
            </Card>
          </div>
          <Map />
          <div class="bi-right">
            <Card title="采集一终端" style="height: 28%;">
              <div
                class="szhnlkapt-title"
                onClick={changeTableFn}
                style="cursor: pointer;"
              >
                {state.tableName}
                <div class="triangle"></div>
              </div>
              <div class="netdevice-gaojing">
                <table>
                  <thead>
                    <tr>
                      <th>序号</th>
                      <th>班组或供电所</th>
                      <th>终端名称</th>
                      <th>台区类型</th>
                      <th>产品型号</th>
                      <th>数据上送系统</th>
                    </tr>
                  </thead>
                  <tbody class="scrollable-tbody">
                    {state.tableData.map((item, index) => {
                      return (
                        <tr>
                          <td title={item.label1}>{item.label1}</td>
                          <td title={item.label2}>{item.label2}</td>
                          <td title={item.label3}>{item.label3}</td>
                          <td title={item.label4}>{item.label4}</td>
                          <td title={item.label5}>{item.label5}</td>
                          <td title={item.label6}>{item.label6}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
            <Card
              title="生态一链通"
              style="margin-top: 30px;height: calc(66% - 30px);"
            >
              <div class="part">
                <div class="szhnlkapt-title">营销2.0建设应用情况</div>
                <div class="circle_box">
                  {[
                    {
                      title: "业务验证完成率",
                      value: 100,
                      color: "rgba(0, 132, 255, 1)",
                    },
                    {
                      title: "数据治理完成率",
                      value: 100,
                      color: "rgba(55, 255, 201, 1)",
                    },
                    {
                      title: "数据迁移准确率",
                      value: 100,
                      color: "rgba(255, 231, 119, 1)",
                    },
                  ].map((item, index) => {
                    return (
                      <div class="ep-item">
                        <div
                          class={`ep-item_${index}`}
                          style="width: 100%; height: 100%"
                        >
                          {setTimeout(() => {
                            energyProportion(
                              `.ep-item_${index}`,
                              item.value,
                              item.color
                            );
                          }, 0)}
                        </div>
                        <span
                          class="epi-proportion"
                          style={{ color: item.color }}
                        >
                          {parseFloat(
                            ((item.value / 100) * 100).toFixed(2).toString()
                          )}

                          <p>%</p>
                        </span>
                        <span class="epi-title">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
                <div class="szhnlkapt-title">PMS3.0推广应用</div>
                <div class="chart" id="pms"></div>
                <div class="szhnlkapt-title">物资供应链应用情况</div>
                <div class="chart" id="wuzi"></div>
              </div>
            </Card>
          </div>
        </div>
      </Skeleton>
    );
  };
});
