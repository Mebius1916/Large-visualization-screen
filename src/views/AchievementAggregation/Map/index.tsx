
import { defineComponent, onMounted, onBeforeMount, reactive, VueElement, type StyleValue } from 'vue';
import axios from 'axios';
import { counter } from '../../count';
import dynamicJson from './../data.json';
import { EllipseAnimation, EllipseItem } from '@/components/EllipseAnimation';

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
    const getImageUrl = (name: string) => {
      return new URL(`../../../assets/achievement-aggregation/${name}`, import.meta.url).href
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
        <div class="aa-center">
          <div class="vlc-top-realtime-data">
            <span>成果聚合中心</span>
          </div>
          <div class="aac-animation-imgs">
            <img class="aacai-mv" src={getImageUrl('main-view.png')} alt="" srcset="" />
            <img class="aacaim-light" src={getImageUrl('light.png')} alt="" srcset="" />
            <img class="aacaim-building" src={getImageUrl('building.png')} alt="" srcset="" />
            <div class="aaca-circle">
              <div class="circle circle1">
                <img class="circle-img-pop" src={getImageUrl('base1.png')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png')} alt="" srcset="" />
                <img class="circle-img-bg-icon" src={getImageUrl('szhsfjs.png')} alt="" srcset="" />
                <span class="circle-text-main">数字化示范建设</span>
              </div>
              <div class="circle circle2">
                <img class="circle-img-pop" src={getImageUrl('base1.png')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png')} alt="" srcset="" />
                <img class="circle-img-bg-icon" src={getImageUrl('jcfwzq.png')} alt="" srcset="" />
                <span class="circle-text-main">基层服务专区</span>
              </div>
              <div class="circle circle3">
                <img class="circle-img-pop" src={getImageUrl('base1.png')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png')} alt="" srcset="" />
                <img class="circle-img-bg-icon" src={getImageUrl('pragpyycj.png')} alt="" srcset="" />
                <span class="circle-text-main">RPA高频应用场景</span>
              </div>
              <div class="circle circle4">
                <img class="circle-img-pop" src={getImageUrl('base1.png')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png')} alt="" srcset="" />
                <img class="circle-img-bg-icon" src={getImageUrl('dsjyy.png')} alt="" srcset="" />
                <span class="circle-text-main">大数据应用</span>
              </div>
              <div class="circle circle5">
                <img class="circle-img-pop" src={getImageUrl('base1.png')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png')} alt="" srcset="" />
                <img class="circle-img-bg-icon" src={getImageUrl('szhnlkfpt.png')} alt="" srcset="" />
                <span class="circle-text-main">数字化能力开放平台</span>
              </div>
              <div class="circle circle6">
                <img class="circle-img-pop" src={getImageUrl('base1.png')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png')} alt="" srcset="" />
                <img class="circle-img-bg-icon" src={getImageUrl('bbzx.png')} alt="" srcset="" />
                <span class="circle-text-main">报表中心</span>
              </div>
              <div class="circle circle7">
                <img class="circle-img-pop" src={getImageUrl('base1.png')} alt="" srcset="" />
                <img class="circle-img-bg" src={getImageUrl('NO1.icon.png')} alt="" srcset="" />
                <img class="circle-img-bg-icon" src={getImageUrl('qnsclmtd.png')} alt="" srcset="" />
                <span class="circle-text-main">青年数创联盟团队</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
