
import { defineComponent, onMounted } from 'vue';
import { scaleContainer } from '@/utils/utils'
import TopBar from '../TopBar';
import { drawDian } from './dian';

import './style.less';

interface Props{
  mapType?: MapType | string,
  title?: string,
  locate?: string
};

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '测试'
    },
    mapType: {
      type: String,
      default: 'bg1'
    },
    locate: {
      type: String,
      default: ''
    }
  },
  slots: {
    default: () => '',
  },
  setup(props: Props, { slots }) {

    onMounted(() => {
      scaleContainer();
      window.onresize = () => {
        scaleContainer();
      };

      drawDian('#canvasDian', '.basic-container')
    });

    const getImgUrl = () => {
      const urls = {
        'bg2': `url(${new URL('@/assets/village-level/qingyang/frame.png', import.meta.url).href}),url(${new URL('@/assets/achievement-aggregation/ac-bj.jpg', import.meta.url).href})`,
        'bg3': `url(${new URL('@/assets/common/bj-1-2.jpg', import.meta.url).href})`,
        'bg1': `url(${new URL('@/assets/village-level/qingyang/frame.png', import.meta.url).href}),url(${new URL('@/assets/village-level/qingyang/pic-4.jpg', import.meta.url).href})`
      };
      return urls[props.mapType]
    };

    return () => {
      const { title, mapType, locate }  = props;
      return (
        <div class="screen-out-box">
          <div
            class="basic-container"
            style={{
              backgroundImage: getImgUrl()
            }}
          >
            <div
              class="global-bg-shadow"
              style={{
                // background: {
                //   'GIS': 'radial-gradient(23% 45%, rgba(255, 255, 255, 0) 51%, rgb(5, 21, 37) 146%)',
                //   'VIG': 'radial-gradient(closest-side, rgba(255, 255, 255, 0) 25%, rgb(5, 21, 37))',
                //   '3D': 'radial-gradient(ellipse, #ffffff00 54%, #051525)',
                // }[mapType as MapType]
              }}
            ></div>
            <canvas id="canvasDian" />
            <TopBar title={title} locate={locate} isBack={mapType === 'VIG'} />
            <div class="content">
              {slots?.default?.()}
            </div>
            {/* <div class="bottom-under-img"></div> */}
          </div>
        </div>
      )
    }
  },
})
