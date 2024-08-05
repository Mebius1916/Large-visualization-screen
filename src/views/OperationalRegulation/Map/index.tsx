
import { defineComponent, onMounted, onBeforeMount, reactive, VueElement, type StyleValue } from 'vue';
import axios from 'axios';
import { counter } from '../../count';
import { WordCloud, getRandLetterNum } from './../WordCloud';
import { wordList } from './../WordCloud/words.js'
import dynamicJson from  './../data.json';

import './style.less';

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
    const state = reactive<State>({
      activeTitle: '庆阳市',
      dynamicData: []
    });

    onBeforeMount(async () => {
      // const resp = await axios.get('src/views/OperationalRegulation/data.json');
      state.dynamicData = dynamicJson.list
    })

    onMounted(() => {
      // ...
      initWordCloud()
    });

    const initWordCloud = () => {
      let list = [];
      for (let i = 0; i < wordList.length; i++) {
        let a = i % 10;
        list.push({
          //   name: `${a}${a}${a}${a}`,
          name: wordList[i],
          value: Math.round(Math.random() * 100)
        });
      }
      console.log(list);
      let myWordCloud = new WordCloud();
      myWordCloud.initThree(document.getElementById('wordCloud'));
      window.myWordCloud = myWordCloud;
      myWordCloud.createChart({
        data: list,
        minFontSize: 2,
        maxFontSize: 5,
        color: '#FFFFFF',
        radius: 30
      });
    }

    return () => {
      const { dynamicData } = state;
      return (
        <div class="or-center">
          <div class="vlc-top-realtime-data doudou-row">
            {
              dynamicData.map((item, index) => {
                return (
                  <div class="dynamic-data-item">
                    <span class="ddi-title">{item.name}</span>
                    <div class="ddi-value">
                      <span
                        class={`dynamic-data-item_${index}`}
                        style={{ color: item.color }}
                      >
                        {item.value}
                        {/* {
                          counter({
                            maxValue: item.value,
                            callBack: (current) => {
                              const itemElement = document.querySelector(`.dynamic-data-item_${index}`)
                              if (itemElement instanceof Element) itemElement.innerHTML = `${current}`;
                            }
                          })
                        } */}
                      </span>
                      <span class="ddi-unit">
                        {item.unit}
                      </span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <svg
            class="map-svg"
            width="1584"
            height="1584"
          >
            <g>
              <image
                class="image-3D"
                href={new URL(`@/assets/operational-regulation/luminous-source.png`, import.meta.url).href}
              />
            </g>
          </svg>
          <div id="wordCloud"></div>
        </div>
      )
    }
  }
})
