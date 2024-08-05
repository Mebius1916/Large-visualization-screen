
import { defineComponent, reactive, onMounted, watchEffect, VueElement } from 'vue';
import Skeleton from '@/components/Skeleton';
import Card from '@/components/Card';
import Map from './Map';
import { dhjkgjFn, gaojingqushiFn, ldbdxfqsFn, wlgjlxFn, wlaqzelsFn, wlaqzels_data } from './chart';
import { ElCarousel, ElCarouselItem, ElImage, ElTable, ElTableColumn } from 'element-plus';
import { setRollEffect } from '@/utils/utils'

import './style.less';
import type { EChartsOption } from 'echarts';

interface AbnormalItem {
  [key: string]: string
}

interface State {
  title?: string,
  mapType?: string,
  isInfoBox?: boolean,
  tableData: any[],
  wlgjlxOption: echarts.ECharts | null,
  scrollInterval: number;
}

export default defineComponent(() => {

  const state = reactive<State>({
    title: '数字化全业务运营中心',
    mapType: 'bg1',
    isInfoBox: true,
    wlgjlxOption: null,
    scrollInterval: 0,
    tableData: [
      { number: '01', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '02', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '03', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '04', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '05', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '06', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '07', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '08', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '09', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '10', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '11', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '12', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '13', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '14', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '15', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '16', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '17', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '18', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '19', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '20', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '21', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '22', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
      { number: '23', name: '育才路机房.…', type: '华二路由器', ip: '23.77.248.1', state: '可用', kyl: 98 },
    ]
  });

  const getImageUrl = (name: string) => {
    return new URL(`../../assets/village-level/qingyang/${name}`, import.meta.url).href
  }
  /**
   * 告警信息弹出关闭动画
   */
  const showBoxAnimation = (type: 'show' | 'hide') => {
    const box = document.querySelector('.message-info-modal') as VueElement;
    if (!box) return;
    box.style.top = '500px';
    box.style.left = '377px';
    box.style.transform = 'scale(0.1)';
    box.style.opacity = '0.1';

    function loop<T extends number>(top: T): void {
      window.requestAnimationFrame(() => {
        box.style.top = `${top}px`;
        if (top > 300) loop(top - 10)
      })
    };
    loop(500);

    if (type === 'show') {
      box.clientHeight;
      box.style.top = '319px';
      box.style.left = '586px';
      box.style.transform = 'scale(1) ';
      box.style.opacity = '1';
    }
  };
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

  const ProgressBar = ({ label, value, max, color }: any) => (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{
          color: '#fff',
          fontSize: '28px',
          marginBottom: '5px',
          transform: 'translateY(32px)'
        }}>{label}</span>
        <span style={{
          color: '#0084FF',
          fontSize: '36px',
          transform: 'translateY(32px)',
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
        width: 'calc(100% - 250px)',
        marginLeft: '170px'
      }}>
        <div style={{
          height: '100%',
          width: `${(value / max) * 100}%`,
          backgroundColor: color,
          borderRadius: 0,
          background: `linear-gradient(-90deg, ${color}, #10F9FD)`,
          transition: 'width 0.1s ease-in-out',
          position: 'relative'
        }}>
          <span
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              width: '3px',
              background: '#fff'
            }}
          />
        </div>
      </div>
    </div>
  );

  const ProgressBarsPage = () => (
    <div style={{
      padding: '6px 16px 0px',
      fontFamily:'Arial, sans-serif'
    }}>
      {[
        { label:'摄像机', value : 38, max :40, color :'#3690FF'},
        { label:'消防系统', value: 30, max :40, color :'#72D981'},
        { label:'漏水监测', value: 26, max :40, color :'#FFFD7C'},
        { label:'温湿度', value: 22, max :40, color :'#009CFF'},
        { label:'其它', value: 18, max :40, color :'#9469F4'},
      ].map((bar,i) => 
         (<ProgressBar key={i} {...bar} />)
       )}
    </div>
  );

  onMounted(() => {
    dhjkgjFn();
    gaojingqushiFn();
    ldbdxfqsFn();
    state.wlgjlxOption = wlgjlxFn();
    wlaqzelsFn();

    setTimeout(() => {
      setRollEffect({
        key: '.el-table__body-wrapper',
        content: '.el-scrollbar__view',
      })
    }, 0);
  });

  return () => {
    const { title, mapType } = state;

    return (
      <Skeleton title={title} mapType={mapType}>
        <div class="operational-regulation">
          <div class="dl-left">
            <Card title="网络安全告警趋势" style="height: 25%">
              <div
                class="chart-gaojingqushi"
                style="width: 100%;height: 100%"
              />
            </Card>
            <Card
              title="网络攻击类型分布"
              style="height: 25%;position: relative"
              class="abnormal-data-key"
            >
              <div
                class="chart-wlgjlx"
                style="width: 100%;height: 100%"
              />
              <img
                src={new URL(`@/assets/operational-regulation/curve.png`, import.meta.url).href}
                style="position: absolute;top: 258px;left: 184px;"
              />
              <div class="chart-wlgjlx-legend">
                {
                  state.wlgjlxOption?.series?.[2]?.data?.map?.((item) => {
                    return (
                      <div class="cfl-item doudou-row">
                        <span class="cfli-dot" style={{background: item.color}}></span>
                        <span class="cfli-name">{item.name}</span>
                        <span class="cfli-value" style={{color: item.color}}>{item.value}</span>
                      </div>
                    )
                  })
                }
              </div>
            </Card>
            <Card title="漏洞补丁修复趋势" style="height: 25%">
              <div
                class="chart-ldbdxfqs"
                style="width: 100%;height: 100%"
              />
            </Card>
            <Card title="网络安全责任落实" style="height: 25%;position: relative">
              <div
                class="chart-wlaqzels"
                style="width: 100%;height: 100%;pointer-events: none;transform: translateX(-25px)"
              >
              </div>
              <div class="chart-legent">
                {
                  wlaqzels_data.map((item) => {
                    return (
                      <div class="chart-legent_item">
                        <span style={{background: item.itemStyle.color, height: '2px'}}></span>
                        <span>{item.name}</span>
                        <span style={{color: item.itemStyle.color}}>{item.valueText}</span>
                      </div>
                    )
                  })
                }
              </div>
            </Card>
          </div>
          <Map />
          <div class="dl-right">
            <Card title="领导视察" style="height: 29%;">
              {
                ProgressBarsPage()
              }
              {/* <div class="lingdaoshicha">
                <ElCarousel height="440px" arrow="never">
                  {[
                    new URL(`@/assets/operational-regulation/lingdao.png`, import.meta.url).href,
                    new URL(`@/assets/operational-regulation/lingdao.png`, import.meta.url).href,
                    new URL(`@/assets/operational-regulation/lingdao.png`, import.meta.url).href,
                  ].map((url) => {
                    return (
                      <ElCarouselItem key={url}>
                        <ElImage
                          style="width: 100%; height: 100%"
                          src={url}
                          fit="fill"
                        />
                      </ElCarouselItem>
                    )
                  })}
                </ElCarousel>
              </div> */}
            </Card>
            <Card title="动环监控告警趋势" style="margin-top: 20px; height: 36%;">
              <div
                class="chart-dhjkgj"
                style="width: 100%;height: 100%"
              />
            </Card>
            <Card title="网络设备实时告警" style="margin-top: 30px">
              <div class="netdevice-gaojing">
                <ElTable
                  data={state.tableData}
                  border
                >
                  <ElTableColumn
                    prop="number"
                    label="序号"
                    width={80}
                    align="center"
                    show-overflow-tooltip="true"
                  />
                  <ElTableColumn
                    prop="name"
                    label="资源名称"
                    show-overflow-tooltip="true"
                  />
                  <ElTableColumn
                    prop="ip"
                    label="IP地址"
                    show-overflow-tooltip="true"
                  />
                  <ElTableColumn
                    prop="type"
                    label="资源类型"
                    show-overflow-tooltip="true"
                  />
                  <ElTableColumn
                    prop="state"
                    label="资源状态"
                    align="center"
                    show-overflow-tooltip="true"
                  />
                  <ElTableColumn
                    prop="kyl"
                    label="可用率"
                    align="center"
                    show-overflow-tooltip="true"
                  />
                </ElTable>
              </div>
            </Card>
          </div>
        </div>
      </Skeleton>
    )
  }
})
