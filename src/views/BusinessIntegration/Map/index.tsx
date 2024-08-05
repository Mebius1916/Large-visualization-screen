import { defineComponent, onMounted, onBeforeMount, reactive } from "vue";
import Card from "@/components/Card";

import "./style.less";

import { shebeishuFn, gongdanshuFn } from "./chart";
import Swiper from "swiper";

interface State {
  mySwiper?: Swiper;
}

export default defineComponent({
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(
        `../../../assets/business-integration/${name}`,
        import.meta.url
      ).href;
    };
    const state = reactive<State>({});

    onBeforeMount(async () => {});

    const onPreview = () => {
      state.mySwiper?.slidePrev();
    };

    const onNext = () => {
      state.mySwiper?.slideNext();
    };

    onMounted(() => {
      shebeishuFn();
      gongdanshuFn();

      state.mySwiper = new Swiper(".swiper", {
        direction: "horizontal",
      });
    });

    return () => {
      return (
        <div class="bi-center">
          <div class="siwper_box">
            <img
              class="left"
              src={getImageUrl("left.png")}
              alt=""
              onClick={onPreview}
            />
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="container">
                    <div class="item">
                      <span class="label">电网生产业务系统应用率</span>
                      <div
                        class="value"
                        style={{ color: "rgba(0, 138, 255, 1)" }}
                      >
                        99.74
                        <span>%</span>
                      </div>
                    </div>
                    <div class="item">
                      <span class="label">同源维护及时率</span>
                      <div
                        class="value"
                        style={{ color: "rgba(0, 255, 150, 1)" }}
                      >
                        100
                        <span>%</span>
                      </div>
                    </div>
                    <div class="item">
                      <span class="label">主网设备台账一致率</span>
                      <div
                        class="value"
                        style={{ color: "rgba(255, 225, 106, 1)" }}
                      >
                        100
                        <span>%</span>
                      </div>
                    </div>
                    <div class="item">
                      <span class="label">中压设备台账一致率</span>
                      <div
                        class="value"
                        style={{ color: "rgba(160, 143, 232, 1)" }}
                      >
                        98.39
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="container">
                    <div class="item">
                      <span class="label">营配设备台账一致率</span>
                      <div
                        class="value"
                        style={{ color: "rgba(0, 138, 255, 1)" }}
                      >
                        99.66
                        <span>%</span>
                      </div>
                    </div>
                    <div class="item">
                      <span class="label">一证办电覆盖率</span>
                      <div
                        class="value"
                        style={{ color: "rgba(0, 255, 150, 1)" }}
                      >
                        100
                        <span>%</span>
                      </div>
                    </div>
                    <div class="item">
                      <span class="label">刷脸办电覆盖率</span>
                      <div
                        class="value"
                        style={{ color: "rgba(255, 225, 106, 1)" }}
                      >
                        100
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              class="right"
              src={getImageUrl("left.png")}
              alt=""
              onClick={onNext}
            />
          </div>

          <div class="canvas">
            <img class="dizuo" src={getImageUrl("dizuo.png")} alt="" />
            <img class="blink" src={getImageUrl("blink.png")} alt="" />
            <div class="item blue item1">生产</div>
            <div class="item blue item2">调度</div>
            <div class="item blue item3">综合</div>
            <div class="item item4">物资</div>
            <div class="item item5">营销</div>

            <div class="labels">
              <img src={getImageUrl("title.png")} alt="" />
            </div>

            <div class="center_imgs">
              <div class="img_item">
                <img src={getImageUrl("icon-1.png")} alt="" />
                <span>精准感知能力</span>
              </div>
              <div class="img_item">
                <img src={getImageUrl("icon-2.png")} alt="" />
                <span>可靠通信能力</span>
              </div>
              <div class="img_item">
                <img src={getImageUrl("icon-3.png")} alt="" />
                <span>全域计算能力</span>
              </div>
              <div class="img_item">
                <img src={getImageUrl("icon-4.png")} alt="" />
                <span>基础数据底座</span>
              </div>
              <div class="img_item">
                <img src={getImageUrl("icon-5.png")} alt="" />
                <span>中台支撑能力</span>
              </div>
            </div>
          </div>

          <Card title="设备一本账" class="card">
            <div class="charts">
              <div class="box">
                <div class="szhnlkapt-title">同源治理设备数</div>
                <div class="chart" id="shebeishu"></div>
              </div>
              <div class="box">
                <div class="szhnlkapt-title">发起异动工单数</div>
                <div class="chart" id="gongdanshu"></div>
              </div>
            </div>
          </Card>
        </div>
      );
    };
  },
});
