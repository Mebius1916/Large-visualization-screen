import { defineComponent, reactive, onMounted, watchEffect } from "vue";
import { scaleContainer } from "@/utils/utils";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { useRouter } from "vue-router";
import { drawDian } from "../../components/Skeleton/dian"; // 从Skeleton文件夹中引入dian.ts;

import "./style.less";

interface State {
  title?: string;
  date: string;
}

export default defineComponent(() => {
  const state = reactive<State>({
    title: "数字化全业务运营中心",
    date: "",
  });

  const getImageUrl = (name: string) => {
    return new URL(`../../assets/home/${name}`, import.meta.url).href;
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

  /**
   * 获取实时时间，2024-03-26  10:00:00这样的格式
   */
  const getTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    // 秒小于0在前面加个0
    const second =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  };

  const toPath = (path: string) => {
    const router = useRouter();
    return () => {
      router.push({ path });
    };
  };

  onMounted(() => {
    scaleContainer(".container");
    window.onresize = () => {
      scaleContainer(".container");
    };

    drawDian("#canvasDian", ".container");

    new Swiper(".swiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      effect: "fade",
      modules: [Autoplay, EffectFade],
    });

    state.date = getTime();

    setInterval(() => {
      state.date = getTime();
    }, 1000);
  });

  return () => {
    const { title } = state;

    return (
      <div class="home_root">
        <div class="container">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src={getImageUrl("bj-1.jpg")} alt="" />
              </div>
              <div class="swiper-slide">
                <img src={getImageUrl("bj-2.jpg")} alt="" />
              </div>
              <div class="swiper-slide">
                <img src={getImageUrl("bj-3.jpg")} alt="" />
              </div>
              <div class="swiper-slide">
                <img src={getImageUrl("bj-4.jpg")} alt="" />
              </div>
            </div>
          </div>

          <div class="tips">
            <span class="date">{state.date}</span>

            <div class="weather">
              台湾   台北   19℃
              <img src={getImageUrl("taiyang.png")} alt="" />
            </div>
          </div>

          <div class="home_title">
            <img src={getImageUrl("main_title.png")} alt="" />
          </div>

          <div class="caidan">
            <div class="item" onClick={toPath("ArtificialIntelligence")}>
              <img src={getImageUrl("caidan1.png")} class="item_bac" alt="" />
              <span>页面 2</span>
            </div>
            <div class="item" onClick={toPath("AchievementAggregation")}>
              <img src={getImageUrl("caidan2.png")} class="item_bac" alt="" />
              <span>页面 3</span>
            </div>
            <div class="item">
              <img
                src={getImageUrl("caidan3.png")}
                class="item_bac"
                alt=""
                onClick={toPath("BusinessIntegration")}
              />
              <span>页面 4</span>
            </div>
            <div class="item" onClick={toPath("VillageLevel")}>
              <img src={getImageUrl("caidan4.png")} class="item_bac" alt="" />
              <span>页面 5</span>
            </div>
            <div class="item" onClick={toPath("OperationalRegulation")}>
              <img src={getImageUrl("caidan5.png")} class="item_bac" alt="" />
              <span>页面 6</span>
            </div>
          </div>

          <canvas id="canvasDian" />
          <div class="back"></div>
          <div class="home_topbar">
            {/* <img
              class="logo"
              src={
                new URL(`../../assets/common/main-title.png`, import.meta.url)
                  .href
              }
            ></img> */}
            <span style="letter-spacing: 4px;">数字化全业务运营中心</span>
          </div>
        </div>
      </div>
    );
  };
});
