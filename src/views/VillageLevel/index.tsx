
import { defineComponent, reactive, onMounted, watchEffect, VueElement } from 'vue';
import Skeleton from '@/components/Skeleton';
import Card from '@/components/Card';
import Map from './Map';
import { totalEnergy, industrialValueAdded, energyPerUnitOutput, energyProportion, energyTop10 } from './chart';

import './style.less';

interface AbnormalItem {
  [key: string]: string
}

interface State {
  title?: string,
  mapType?: string,
  isInfoBox?: boolean
}

export default defineComponent(() => {

  const state = reactive<State>({
    title: '数字化全业务运营中心',
    mapType: 'bg1',
    isInfoBox: true
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

  onMounted(() => {
    totalEnergy();
    industrialValueAdded();
    energyPerUnitOutput();
    // energyTop10()
  });

  const ProgressBar = ({ label, value, max, color }: any) => (
    <div style={{ marginBottom: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{ color: '#fff', fontSize: '28px', marginBottom: '5px' }}>{label}</span>
        <span style={{
          color: '#0084FF',
          fontSize: '36px',
          transform: 'translateY(32px)',
          display: 'inline-block',
          width: '186px',
          fontFamily: 'neirong'
          }}
        >{value.toLocaleString()}</span>
      </div>
      <div style={{
        height: '16px',
        backgroundColor: '#3690ff1a',
        borderRadius: 0,
        width: 'calc(100% - 200px)'
      }}>
        <div style={{
          height: '100%',
          width: `${(value / max) * 100}%`,
          backgroundColor: color,
          borderRadius: 0,
          background: `linear-gradient(-90deg, ${color}, #10F9FD)`,
          transition: 'width 0.1s ease-in-out',
        }} />
      </div>
    </div>
  );

  const ProgressBarsPage = () => (
    <div style={{
      padding: '28px 16px 0 16px',
      fontFamily:'Arial, sans-serif'
    }}>
      {[
        { label:'中国石油天然气股份有限公司庆阳石化分公司', value :25034.4275, max :30000, color :'#3690FF'},
        { label:'华池县惠源热力有限公司', value :2933.5887, max :3000, color :'#72D981'},
        { label:'庆阳圣元环保电力有限公司', value :2445.9978, max :3000, color :'#FFFD7C'},
        { label:'甘肃圣越农牧发展有限公司', value :2317.5982, max :3000, color :'#009CFF'},
        { label:'甘肃华能天竣能源有限公司刘园子煤矿', value :1861.9947, max :3000, color :'#9469F4'},
        // 根据需要添加更多的进度条
      ].map((bar,i) => 
         (<ProgressBar key={i} {...bar} />)
       )}
    </div>
  );

  return () => {
    const { title, mapType } = state;

    return (
      <Skeleton title={title} mapType={mapType}>
        <div class="district-level">
          <div class="dl-left">
            <Card title="单位产值综合能耗分析">
              <div
                class="chart-energ-perUnit-output"
                style="width: 100%;height: 100%"
              />
            </Card>
            <Card
              title="工业增加值能耗及电耗分析" style="margin-top: 30px;" class="abnormal-data-key"
            >
              <div
                class="chart-industrial-value-added"
                style="width: 100%;height: 100%"
              />
            </Card>
            <Card title="各行业用能趋势" style="margin-top: 30px;">
              <div
                class="chart-total-energy"
                style="width: 100%;height: 100%"
              />
            </Card>
          </div>
          <Map />
          <div class="dl-right">
            <Card title="能耗分析" style="height: 38%;">
              <div class="energy-analysis">
                <div class="ea-img">
                  <img class="ea-img5" src={getImageUrl('base.png')} />
                  <img class="ea-img1" src={getImageUrl('pic.png')} />
                  <img class="ea-img2" src={getImageUrl('aperture-2.png')} />
                  <img class="ea-img2" src={getImageUrl('aperture-2.png')} />
                  <img class="ea-img2" src={getImageUrl('aperture-2.png')} />
                  <img class="ea-img2" src={getImageUrl('aperture-2.png')} />
                  <img class="ea-img2" src={getImageUrl('aperture-2.png')} />
                  <img class="ea-img2" src={getImageUrl('aperture-2.png')} />
                  <img class="ea-img3" src={getImageUrl('aperture-1.png')} />
                  <img class="ea-img3" src={getImageUrl('aperture-1.png')} />
                  <img class="ea-img3" src={getImageUrl('aperture-1.png')} />
                  <img class="ea-img3" src={getImageUrl('aperture-1.png')} />
                  <img class="ea-img3" src={getImageUrl('aperture-1.png')} />
                  <img class="ea-img3" src={getImageUrl('aperture-1.png')} />
                  <img class="ea-img4" src={getImageUrl('aperture-3.png')} />
                  <img class="ea-img4" src={getImageUrl('aperture-3.png')} />
                  <img class="ea-img4" src={getImageUrl('aperture-3.png')} />
                  <img class="ea-img4" src={getImageUrl('aperture-3.png')} />
                  <img class="ea-img4" src={getImageUrl('aperture-3.png')} />
                  <img class="ea-img4" src={getImageUrl('aperture-3.png')} />
                </div>
                <div class="ea-value">
                  <div class="eav-item">
                    <span class="eavi-title">本月累计综合能耗</span>
                    <span class="eavi-value">134492.39</span>
                  </div>
                  <div class="eav-item">
                    <span class="eavi-title">去年同期累计综合能耗</span>
                    <span class="eavi-value">183832.16</span>
                  </div>
                  <div class="eav-item">
                    <span class="eavi-title">本年累计综合能耗 </span>
                    <span class="eavi-value">172123.22</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card title="企业综合能耗排名top10" style="margin-top: 20px; height: 36%;">
              <div class="energy-top10" style="width: 100%;height: 100%">
                {ProgressBarsPage()}
              </div>
            </Card>
            <Card title="各能源品种能耗占比" style="margin-top: 30px">
              <div class="energy-proportion">
                {
                  [
                    {title: '煤', value: 15, color: '#3699F4'},
                    {title: '气', value: 20, color: '#57DA8C'},
                    {title: '电', value: 15, color: '#FFF47C'},
                    {title: '油', value: 50, color: '#436CE0'}
                  ].map((item, index) => {
                    return (
                      <div class="ep-item">
                        <div
                          class={`ep-item_${index}`}
                          style="width: 100%; height: 100%"
                        >
                          {
                            setTimeout(() => {
                              energyProportion(`.ep-item_${index}`, item.value, item.color)
                            }, 0)
                          }
                        </div>
                        <span class="epi-proportion">
                          {parseFloat((item.value / 100 * 100).toFixed(2).toString())}%
                        </span>
                        <span class="epi-title">{item.title}</span>
                      </div>
                    )
                  })
                }
              </div>
            </Card>
          </div>
        </div>
      </Skeleton>
    )
  }
})
