
import { defineComponent, reactive, onMounted, watchEffect, VueElement } from 'vue';
import Skeleton from '@/components/Skeleton';
import Card from '@/components/Card';
import Map from './Map';
import { cflrsgzFn, fhsjcpslFn, bbzxFn, bgdzsmFn, barSzhcgslFn, lineSzhcgslFn } from './chart';

import './style.less';

interface AbnormalItem {
  [key: string]: string
}

interface State {
  title?: string,
  mapType?: string,
  isInfoBox?: boolean,
  shuzihua: any[],
  huodongNumber: any[],
  activeRpa: 'in' | 'out',
  activeForm: 'dev' | 'gen',
  fhsjcpsl: echarts.ECharts | null,
  bbzx: echarts.ECharts | null
}

export default defineComponent(() => {

  const state = reactive<State>({
    title: '数字化全业务运营中心',
    mapType: 'bg2',
    isInfoBox: true,
    activeRpa: 'in',
    activeForm: 'dev',
    fhsjcpsl: null,
    bbzx: null,
    shuzihua: [
      { "color": "#218FF7", "name": "推广任务数", "value": 19, "icon": "icon-1.png" },
      { "color": "#00FF96", "name": "上报成果", "value": 11, "icon": "icon-2.png" },
      { "color": "#FFE16A", "name": "承担项目", "value": 8, "icon": "icon-3.png" },
    ],
    huodongNumber: [
      { "color": "#218FF7", "name": "活动总数", "value": 5, "icon": ["icon-5.png", "blue.png"] },
      { "color": "#00FF96", "name": "竞赛类", "value": 3, "icon": ["icon-6.png", "green.png"] },
      { "color": "#218FF7", "name": "创新类", "value": 2, "icon": ["icon-7.png", "blue.png"] },
    ]
  });

  const getImageUrl = (name: string) => {
    return new URL(`../../assets/achievement-aggregation/${name}`, import.meta.url).href
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

  /**
   * Rpatab切换
   * @param value table的name
   */
   const handleChangeRpa = (value: State['activeRpa']) => {
    state.activeRpa = value;
    const values = {
      in: [
        { value: 310 },
        { value: 60 },
        { value: 30 },
        { value: 30 },
      ],
      out: [
        { value: 200 },
        { value: 90 },
        { value: 10 },
        { value: 10 },
      ]
    }
    state.fhsjcpsl?.setOption({
      series: [
        {},
        { data: values[value] },
        {},
        {},
      ]
    })
  }
  const handleChangeForm = (value: State['activeForm']) => {
    state.activeForm = value;
    const values = {
      dev: [4, 26, 2, 1, 8],
      gen: [29582, 34562, 12562, 5995, 18584]
    }
    state.bbzx?.setOption({
      series: [
        {
          data: values[value]
        },
        {
          data: values[value].map(() => 1)
        },
        {
          data: values[value]
        }
      ]
    })
  }

  onMounted(() => {
    cflrsgzFn();
    bgdzsmFn();
    barSzhcgslFn();
    lineSzhcgslFn();
    state.bbzx = bbzxFn();
    state.fhsjcpsl = fhsjcpslFn();
    // industrialValueAdded();
    // energyPerUnitOutput();
    // energyTop10()
  });

  return () => {
    const { title, mapType } = state;

    return (
      <Skeleton title={title} mapType={mapType}>
        <div class="achievement-aggregation">
          <div class="aa-left">
            <Card
              title="青年数创联盟团队" style="margin-top: 30px;height: 20%" class="abnormal-data-key"
            >
              <div class="shuzihualianluoren">
                <div class="aa-img">
                  <img class="aa-img3" src={getImageUrl('base.png')} />
                  <img class="aa-img2" src={getImageUrl('light efficiency-1.png')} />
                  <img class="aa-img1" src={getImageUrl('icon-4.png')} />
                </div>
                <div class="aa-value">
                  <div class="aav-item">
                    <span class="aavi-title">市级</span>
                    <span class="aavi-value">10</span>人
                  </div>
                  <div class="aav-item">
                    <span class="aavi-title">县级</span>
                    <span class="aavi-value">8</span>人
                  </div>
                </div>
              </div>
            </Card>
            <Card title="数字化示范建设" style="height: 24%">
              <div
                class="chart-shuzihua doudou-row"
                style="width: 100%;height: 100%;padding-top: 10px;"
              >
                {
                  state.shuzihua.map((item, index) => {
                    return (
                      <div
                        class="dynamic-data-item"
                        style={{
                          fontSize: '100px',
                          background: `linear-gradient(to bottom, ${item.color}66 -45%, ${item.color}00)`
                        }}
                      >
                        <img
                          src={getImageUrl(item.icon)}
                          style={{
                            width: '110px',
                            height: '110px',
                            transform: 'translate(62px, -38px)'
                          }}
                        />
                        <div class="ddi-value">
                          <span
                            class={`dynamic-data-item_${index}`}
                            style={{ color: item.color }}
                          >
                            {item.value}
                          </span>
                        </div>
                        <span class="ddi-title">{item.name}</span>
                      </div>
                    )
                  })
                }
              </div>
            </Card>
            <Card title="基层服务专区 " style="margin-top: 10px;height: 20%">
              <div
                class="chart-cflrsgz"
                style="width: 100%;height: 100%"
              />
            </Card>
            <Card
              title="RPA高频应用场景"
              style="margin-top: 10px;height: 20%"
            >
              <div style={{
                padding: '28px 16px 0 16px',
                fontFamily:'Arial, sans-serif'
              }}>
                {[
                  { label:'采集2.0自动召测流程', value:4250, max :5000, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #EDB058 0%, rgba(255,255,255,0.55) 100%)'},
                  { label:'变压器远程停用', value:1675, max :5000, color :'#38DDFB', fontColor: 'linear-gradient(-33deg, rgb(165 165 165 / 83%) 0%, rgba(255, 255, 255, 0.83) 23.0225%, rgb(177 177 177 / 83%) 41.4062%, rgba(255, 255, 255, 0.83) 67.0654%, rgb(203 203 203 / 83%) 82.9346%, rgba(255, 255, 255, 0.83) 100%) text'},
                  { label:'统一视频监控机器人', value:1455, max :5000, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #DC9F75 0%, rgba(255,255,255,0.55) 100%)'},
                  { label:'用户低电压原因', value:458, max :5000, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #77CAFA 0%, rgba(255,255,255,0.55) 100%)'},
                  { label:'95598运营日报自动报送', value:425, max :5000, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #77CAFA 0%, rgba(255,255,255,0.55) 100%)'},
                  // 根据需要添加更多的进度条
                ].map(({ label, value, max, color, fontColor }, i) => 
                  (
                    <div key={i} style={{ marginBottom: '30px', marginLeft: '100px', position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: '17px',
                        left: '-110px',
                        'font-family': 'biaoti',
                        'font-size': '32px',
                        background: fontColor,
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent'
                      }}>TOP{i + 1}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ color: '#fff', fontSize: '28px', marginBottom: '5px' }}>{label}</span>
                        <span style={{
                          color: '#0084FF',
                          fontSize: '36px',
                          transform: 'translateY(0px)',
                          display: 'inline-block',
                          width: '186px',
                          fontFamily: 'neirong',
                          textAlign: 'end'
                          }}
                        >{value.toLocaleString()}</span>
                      </div>
                      <div style={{
                        height: '16px',
                        backgroundColor: '#3690ff1a',
                        borderRadius: 0,
                        width: 'calc(100% - 0px)'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${(value / max) * 100}%`,
                          backgroundColor: color,
                          borderRadius: 0,
                          background: `linear-gradient(-90deg, ${color}, #0084FF)`,
                          transition: 'width 0.1s ease-in-out',
                        }} />
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
          <Map />
          <Card title="数字化能力开放平台" class="shuzihuanengli">
            <div class="common-subtitle" style="width: 500px;transform: translateX(129%);">数字化成果数量</div>
            <div class="doudou-row" style="height: 360px;">
              <div
                class="chart-line-szhcgsl doudou-col-6"
                style="height: 100%;"
              />
              <div
                class="chart-bar-szhcgsl doudou-col-6"
                style="height: 100%;"
              />
            </div>
          </Card>
          <div class="aa-right">
            <Card title="大数据应用" style="height: 44%;">
              <div class="doudou-row" style="padding: 0 80px">
                <div
                  class={`doudou-col-6 doudou-tab-item ${state.activeRpa === 'in' ? 'doudou-tab-item_active' : ''}`}
                  onClick={handleChangeRpa.bind({}, 'in')}
                >对内应用</div>
                <div
                  class={`doudou-col-6 doudou-tab-item ${state.activeRpa === 'out' ? 'doudou-tab-item_active' : ''}`}
                  onClick={handleChangeRpa.bind({}, 'out')}
                >对外应用</div>
              </div>
              <div style="position: relative; height: 380px">
                {/* <div class="chart-fhsjcpsl-gb"></div> */}
                <div class="chart-fhsjcpsl" style="width: 70%;height: 100%"></div>
                {/* <div class="chart-fhsjcpsl-fugai"></div> */}
                <div class="chart-fhsjcpsl-legend">
                  {
                    [
                      {name: '分析报告', color: '#0084FF', value: state.activeRpa === 'in' ? 16 : 13},
                      {name: '在线场景', color: '#37FFC9', value: state.activeRpa === 'in' ? 3 : 2},
                      {name: '数据集', color: '#FFD768', value: state.activeRpa === 'in' ? 2 : 1},
                      {name: '算法模型', color: '#7CE4FE', value: state.activeRpa === 'in' ? 2 : 1}
                    ].map((item) => {
                      return (
                        <div class="cfl-item doudou-row">
                          <span class="cfli-dot" style={{background: item.color}}></span>
                          <span class="cfli-name" style="width: 150px">{item.name}</span>
                          <span class="cfli-value" style={{color: item.color}}>{item.value}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div class="bgdzsm-container" style="width: 100%;height: 390px;transform: translateY(-50px);">
                <div
                  class="chart-bgdzsm"
                  style="width: 100%;height: 100%"
                />
              </div>
            </Card>
            <Card title="报表中心" style="height: 24%;">
              <div class="doudou-row" style="padding: 0 80px">
                <div
                  class={`doudou-col-6 doudou-tab-item ${state.activeForm === 'dev' ? 'doudou-tab-item_active' : ''}`}
                  onClick={handleChangeForm.bind({}, 'dev')}
                >自主研发</div>
                <div
                  class={`doudou-col-6 doudou-tab-item ${state.activeForm === 'gen' ? 'doudou-tab-item_active' : ''}`}
                  onClick={handleChangeForm.bind({}, 'gen')}
                >推广应用</div>
              </div>
              <div class="bgdzsm-container" style="width: 100%;height: 320px;">
                <div
                  class="chart-bbzx"
                  style="width: 100%;height: 100%"
                />
              </div>
              <div class="common-subtitle" style="width: 100%;margin-top: 10px;padding-bottom: 10px">高频应用报表</div>
              <div style={{
                padding: '28px 16px 0 16px',
                fontFamily:'Arial, sans-serif'
              }}>
                {[
                  { label:'违约用电窃电信息工单明细', value:356, max :400, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #EDB058 0%, rgba(255,255,255,0.55) 100%)'},
                  { label:'每日新装用户数据明细表', value:210, max :400, color :'#38DDFB', fontColor: 'linear-gradient(-33deg, rgb(165 165 165 / 83%) 0%, rgba(255, 255, 255, 0.83) 23.0225%, rgb(177 177 177 / 83%) 41.4062%, rgba(255, 255, 255, 0.83) 67.0654%, rgb(203 203 203 / 83%) 82.9346%, rgba(255, 255, 255, 0.83) 100%) text'},
                  { label:'欠费停电故障工单日报表', value:156, max :400, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #DC9F75 0%, rgba(255,255,255,0.55) 100%)'},
                  { label:'运行计量箱汇总表', value:103, max :400, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #77CAFA 0%, rgba(255,255,255,0.55) 100%)'},
                  { label:'正宁县供电所周电量查询报表', value:80, max :400, color :'#38DDFB', fontColor: 'linear-gradient(0deg, #77CAFA 0%, rgba(255,255,255,0.55) 100%)'},
                  // 根据需要添加更多的进度条
                ].map(({ label, value, max, color, fontColor }, i) => 
                  (
                    <div key={i} style={{ marginBottom: '30px', marginLeft: '100px', position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: '17px',
                        left: '-110px',
                        'font-family': 'biaoti',
                        'font-size': '32px',
                        background: fontColor,
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent'
                      }}>TOP{i + 1}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ color: '#fff', fontSize: '28px', marginBottom: '5px' }}>{label}</span>
                        <span style={{
                          color: '#37FFC9',
                          fontSize: '36px',
                          transform: 'translateY(0px)',
                          display: 'inline-block',
                          width: '186px',
                          fontFamily: 'neirong',
                          textAlign: 'end'
                          }}
                        >{value.toLocaleString()}</span>
                      </div>
                      <div style={{
                        height: '16px',
                        backgroundColor: '#3690ff1a',
                        borderRadius: 0,
                        width: 'calc(100% - 0px)'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${(value / max) * 100}%`,
                          backgroundColor: color,
                          borderRadius: 0,
                          background: `linear-gradient(-90deg, ${color}, #5CCE94)`,
                          transition: 'width 0.1s ease-in-out',
                        }} />
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
        </div>
      </Skeleton>
    )
  }
})
