
import { defineComponent, reactive, onMounted, watchEffect } from 'vue';
import Skeleton from '@/components/Skeleton';
import Card from '@/components/Card';
import Map from './Map';
import {
  yjxxtjFn,
  jjxyFn,
  rpaFn,
  zhwlFn,
  gwyhdlFn,
  tyspjrFn,
  bdyyFn,
  rgznybgjFn
} from './chart';

import { ElCarousel, ElCarouselItem, ElImage } from 'element-plus'

import './style.less';

interface AbnormalItem {
  [key: string]: string
}

interface State {
  title?: string,
  mapType?: string,
  isInfoBox?: boolean,
  activeRpa: 'dev' | 'prom' | 'dep',
  shuzihua: any[],
  huodongNumber: any[],
  echartRpaIns: echarts.ECharts | null
  echartYjxxtjIns: echarts.ECharts | null,
  echartYjxxtjOption: any
}

export default defineComponent(() => {

  const state = reactive<State>({
    title: '数字化全业务运营中心',
    mapType: 'bg2',
    isInfoBox: true,
    activeRpa: 'dev',
    echartRpaIns: null,
    echartYjxxtjIns: null,
    echartYjxxtjOption: null,
    shuzihua: [
      { "color": "#218FF7", "name": "推广任务数", "value": 19, "icon": "icon-1.png" },
      { "color": "#00FF96", "name": "典型案例", "value": 11, "icon": "icon-2.png" },
      { "color": "#FFE16A", "name": "优秀典型案例", "value": 1, "icon": "icon-3.png" },
    ],
    huodongNumber: [
      { "color": "#218FF7", "name": "活动总数", "value": 5, "icon": ["icon-5.png", "blue.png"] },
      { "color": "#00FF96", "name": "竞赛类", "value": 3, "icon": ["icon-6.png", "green.png"] },
      { "color": "#218FF7", "name": "创新类", "value": 2, "icon": ["icon-7.png", "blue.png"] },
    ]
  });
  /**
   * Rpatab切换
   * @param value table的name
   */
  const handleChangeRpa = (value: State['activeRpa']) => {
    state.activeRpa = value;
    const values = {
      prom: [4, 7, 3, 2, 8, 3, 4],
      dep: [7, 4, 2, 8, 4, 3, 3],
      dev: [3, 2, 4, 7, 3, 4, 8]
    }
    state.echartRpaIns?.setOption({
      series: [
        {
          data: values[value].map(() => 1)
        },
        {
          data: values[value]
        },
        {
          data: values[value]
        },
        {
          data: values[value]
        },
      ]
    })
  }
  /**
   * 监听某个状态的改变
   */
  watchEffect((onInvalidate)=>{
    /**
     * 当组件失效，watchEffect被主动停止或者副作用即将重新执行时，这个函数会执行
     */
    onInvalidate(()=>{})
  },{
    /**
     * post: 在组件更新后触发，这样你就可以访问更新的 DOM。
     * pre: 默认值，在组件更新前触发
     * sync: 同步触发，低效
     */
    flush: 'post'
  });

  onMounted(() => {
    state.echartYjxxtjOption = yjxxtjFn().getOption();
    state.echartRpaIns = rpaFn();
    rgznybgjFn();
    jjxyFn();
    zhwlFn(),
    gwyhdlFn(),
    tyspjrFn(),
    bdyyFn()
  });

  return () => {
    const { title, mapType } = state;

    return (
      <Skeleton title={title} mapType={mapType}>
        <div class="artificial-intelligence">
          <div class="ai-left">
            <Card
              title="庆电小云"
              style="height: 65%"
            >
              <div class="kehuguanxi">
                <div class="ea-img">
                  <img class="ea-img1" src={new URL(`@/assets/artificial-intelligence/AI.png`, import.meta.url).href} />
                  <img class="ea-img2" src={new URL(`@/assets/artificial-intelligence/arr-1.png`, import.meta.url).href} />
                  <img class="ea-img3" src={new URL(`@/assets/artificial-intelligence/arr-2.png`, import.meta.url).href} />
                  <img class="ea-img4" src={new URL(`@/assets/artificial-intelligence/arr-3.png`, import.meta.url).href} />
                  <img class="ea-img5" src={new URL(`@/assets/artificial-intelligence/taiqujinli.png`, import.meta.url).href} />
                  <img class="ea-img6" src={new URL(`@/assets/artificial-intelligence/kehu.png`, import.meta.url).href} />
                </div>
                <div class="ea-value">
                  <div class="eav-item">
                    <span class="eavi-title">试点</span>
                    <span class="eavi-value" style="color: #02fe97;">3</span>人
                  </div>
                  <div class="eav-item">
                    <span class="eavi-title">网格</span>
                    <span class="eavi-value" style="color: #ffe169;">15</span>人
                  </div>
                  <div class="eav-item">
                    <span class="eavi-title">微信群 </span>
                    <span class="eavi-value" style="color: #4dbaff;">427</span>人
                  </div>
                  <div class="eav-item">
                    <span class="eavi-title">用户数 </span>
                    <span class="eavi-value" style="color: #fff;">28356</span>人
                  </div>
                </div>
              </div>
              <div class="qdcloud-title">预警信息统计</div>
              <div
                class="chart-jjxy"
                style="width: 100%;height: 28%"
              />
              <div class="qdcloud-title" style="transform: translateX(35%) translateY(24px);">经济效益</div>
              <div class="yjxxtj-container">
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <img class="aiyc-bgi" src={new URL(`@/assets/artificial-intelligence/jinjixiaoyi.png`, import.meta.url).href} />
                <div
                  class="chart-yjxxtj"
                  style="width: 100%;height: calc(100%);margin-top: 42px"
                />
                <div class="chart-yjxxtj-legend">
                  {
                    state.echartYjxxtjOption?.series[0].data.map((item:any, index: number) => {
                      return (
                        <div class="cfl-item doudou-row">
                          <span class="cfli-dot" style={{background: state.echartYjxxtjOption.series[0].color[index]}}></span>
                          <span class="cfli-name">{item.name}</span>
                          <span class="cfli-value" style={{color: state.echartYjxxtjOption.series[0].color[index]}}>{item.value}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </Card>
            <Card
              title="RPA规模化应用"
              style="margin-top: 30px;height: calc(33% - 30px)"
            >
              <div class="doudou-row">
                <div
                  class={`doudou-col-4 doudou-tab-item ${state.activeRpa === 'dev' ? 'doudou-tab-item_active' : ''}`}
                  onClick={handleChangeRpa.bind({}, 'dev')}
                >自主研发场景</div>
                <div
                  class={`doudou-col-4 doudou-tab-item ${state.activeRpa === 'prom' ? 'doudou-tab-item_active' : ''}`}
                  onClick={handleChangeRpa.bind({}, 'prom')}
                >推广场景</div>
                <div
                  class={`doudou-col-4 doudou-tab-item ${state.activeRpa === 'dep' ? 'doudou-tab-item_active' : ''}`}
                  onClick={handleChangeRpa.bind({}, 'dep')}
                >场景部署情况</div>
              </div>
              <div
                class="chart-rpa"
                style="width: 100%;height: calc(100% - 145px);margin-top: 20px;"
              />
            </Card>
          </div>
          <Map />
          <Card title="输电智能化" class="shudianzhinenghua">
            <div class="doudou-row doudou-row-shudianzhinenghua">
              <div class="doudou-col-3">
                <div class="common-subtitle" style="width: 100%">无人机智能巡检</div>
                <div style="border: 2px solid #0084FF;margin-top: 30px;position: relative"> 
                  <ElCarousel height="300px" arrow="never">
                    {[
                      new URL(`@/assets/artificial-intelligence/pic-1.png`, import.meta.url).href,
                      new URL(`@/assets/artificial-intelligence/pic-1.png`, import.meta.url).href,
                      new URL(`@/assets/artificial-intelligence/pic-1.png`, import.meta.url).href,
                    ].map((url) => {
                      return (
                        <ElCarouselItem key={url}>
                          <ElImage
                            style="width: 100%; height: 100%"
                            src={url}
                            fit="cover"
                          />
                        </ElCarouselItem>
                      )
                    })}
                  </ElCarousel>
                  <div
                    class="doudou-row"
                    style={`padding: 0px 10px;
                    position: absolute;
                    left: 0px;
                    width: 100%;
                    bottom: 0px;
                    background: #000000e3;`}
                  >
                    <span style="font-size: 26px; padding: 6px 0px">无人机机巢</span>
                    <span style="font-size: 26px; padding: 6px 0px">
                      <span style="color: #1E9FFF">1</span>
                      /3
                    </span>
                  </div>
                </div>
              </div>
              <div class="doudou-col-6">
                <div class="common-subtitle" style="width: 100%">D北斗应用</div>
                <div
                  class="chart-beidouyingyong"
                  style={`
                    width: 94%;
                    height: 75%;
                    margin-top: 29px;
                    margin-left: 68px;
                  `}
                />
              </div>
              <div class="doudou-col-3" style="display: flex;justify-content: center">
                <div>
                  <ElImage
                    style="width: 250px;"
                    src={new URL(`@/assets/artificial-intelligence/map.png`, import.meta.url).href}
                    fit="cover"
                  />
                  <div class="ea-value">
                    <div class="eav-item">
                      <span class="eavi-title">信号增强基站</span>
                      <span class="eavi-value">2</span>台
                    </div>
                    <div class="eav-item">
                      <span class="eavi-title">覆盖率</span>
                      <span class="eavi-value">100</span>%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div class="ai-right">
            <Card title="人工智能样本归集" style="position: relative;height: 26%">
              <div
                class="chart-rgznybgj"
                style="width: 100%;height: 100%"
              />
              {/* <div class="doudou-row air-kjcx">
                <div class="doudou-col-6 airk-left">
                  <div class="airkl-item">庆供</div>
                  <div class="airkl-item"><span>清华</span></div>
                  <div class="airkl-item"><span>西电</span></div>
                  <div class="airkl-item"><span>南瑞</span></div>
                </div>
                <div class="doudou-col-6 airk-right" style="position: relative;">
                  <img
                    class="airkr-xiangkuang"
                    src={new URL(`@/assets/artificial-intelligence/pic-bj.png`, import.meta.url).href}
                    style={`
                    position: absolute;
                    top: 100px;
                    left: 4px;
                    width: 388px;
                    height: 208px;
                    `}
                  />
                  <img
                    class="airkr-jiangzhuang"
                    src={new URL(`@/assets/artificial-intelligence/pic.png`, import.meta.url).href}
                    style={`
                    position: absolute;
                    top: 55px;
                    left: 40px;
                    width: 314px;
                    height: 208px;
                    `}
                  />
                  <div
                    class="airkr-title"
                    style={`
                    position: absolute;
                    top: 320px;
                    left: 59px;
                    font-size: 24px;
                    `}
                  >省公司第二批科技攻关团队</div>
                </div>
              </div> */}
            </Card>
            <Card title="智慧物联" style="height: 24%;">
              <div
                class="chart-zhwl"
                style="width: 100%;height: 100%"
              />
            </Card>
            <Card title="新技术应用" style="height: 42%;">
              <div class="szhnlkapt-title" style="margin-bottom: 28px;">国网用户登录情况</div>
              <div
                class="chart-gwyhdl"
                style="width: 100%;height: calc(50% - 115px)"
              />
              <div
                class="szhnlkapt-title"
                style="transform: translateX(35%) translateY(24px);margin-bottom: 28px;margin-top: 28px;"
              >统一视频接入在线率</div>
              <div
                class="chart-tyspjr"
                style="width: 100%;height: calc(50% - 115px)"
              />
            </Card>
          </div>
        </div>
      </Skeleton>
    )
  }
})
