
import { defineComponent, onMounted, onBeforeMount, reactive, VueElement, type StyleValue } from 'vue';
import axios from 'axios';
import { counter } from '../../count';
import dynamicJson from './../data.json';

import './style.less';
import './circle.less';

interface DynamicDataItem {
  value: number;
  [key: string]: any;
};

interface State {
  dynamicData: DynamicDataItem[],
  activeTitle: string,
};

export default defineComponent({
  setup() {
    const getImageUrl = (name: string, path: string = 'artificial-intelligence') => {
      return new URL(`../../../assets/${path}/${name}`, import.meta.url).href
    }
    const state = reactive<State>({
      activeTitle: '庆阳市',
      dynamicData: []
    });

    onBeforeMount(async () => {
      // const resp = await axios.get('src/views/VillageLevel/data.json');
      state.dynamicData = dynamicJson.list
    })

    onMounted(() => {
      // ...
    });

    return () => {
      const { dynamicData } = state;
      return (
        <div class="ai-center">
          <div class="vlc-top-realtime-data">
            <span>成果聚合中心</span>
          </div>
          <div class="aic-animation-imgs">
            <img class="aicai-mv" src={getImageUrl('main-view.png', 'achievement-aggregation')} alt="" srcset="" />
            <img class="aicaim-light" src={getImageUrl('light.png', 'achievement-aggregation')} alt="" srcset="" />
            <img class="aicaim-building" src={getImageUrl('AI.png')} alt="" srcset="" />
            <img class="aicaim-hengfu" src={getImageUrl('gwgsdrp.png')} alt="" srcset="" />
            <img class="aicaim-logo" src={getImageUrl('nanrui_logo.png')} style="top: 190px;left: 600px;animation: hover-animation2 2s infinite linear;" />
            <img class="aicaim-logo" src={getImageUrl('xidian_logo.png')} style="top: 350px;left: 915px;animation: hover-animation1 2s infinite linear;" />
            <img class="aicaim-logo" src={getImageUrl('qinghua_logo.png')} style="top: 50px;left: 1200px;animation: hover-animation2 3s infinite linear;" />
            <div class="aica-circle">
              <div class="circle circle1">
                <img class="circle-img-pop" src={getImageUrl('base1.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-content_icon" src={getImageUrl('qdxy.png')} alt="" srcset="" />
                <span class="circle-text-main">庆电小云</span>
              </div>
              <div class="circle circle2">
                <img class="circle-img-pop" src={getImageUrl('base1.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-content_icon" src={getImageUrl('RPA.png')} alt="" srcset="" />
                <span class="circle-text-main">RPA规模化应用</span>
              </div>
              <div class="circle circle3">
                <img class="circle-img-pop" src={getImageUrl('base1.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-content_icon" src={getImageUrl('xjsyy.png')} alt="" srcset="" />
                <span class="circle-text-main">新技术应用</span>
              </div>
              <div class="circle circle4">
                <img class="circle-img-pop" src={getImageUrl('base1.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-content_icon" src={getImageUrl('zhwl.png')} alt="" srcset="" />
                <span class="circle-text-main">智慧物联</span>
              </div>
              <div class="circle circle5">
                <img class="circle-img-pop" src={getImageUrl('base1.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-content_icon" src={getImageUrl('kjcxqn.png')} alt="" srcset="" />
                <span class="circle-text-main">科技创新潜能</span>
              </div>
              <div class="circle circle6">
                <img class="circle-img-pop" src={getImageUrl('base1.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png', 'achievement-aggregation')} alt="" srcset="" />
                <img class="circle-img-content_icon" src={getImageUrl('shudianzhineng.png')} alt="" srcset="" />
                <span class="circle-text-main">输电智能化</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
