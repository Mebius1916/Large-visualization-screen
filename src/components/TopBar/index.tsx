import { defineComponent, ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router'

import './style.less';

interface Props {
  title: string,
  locate: string,
  temperature: string,
  isBack: boolean
}

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    locate: {
      type: String,
      default: ''
    },
    temperature: {
      type: String,
      default: '10℃'
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  setup(props: Props) {

    const router = useRouter();
    const route = useRoute();

    const activeMenu = ref('');

    onBeforeMount(() => {
      activeMenu.value = route.name as string;
    })

    const renderMenu = (list: any) => {
      return list.map((item: any) => {
        return (
          <div
            onClick={() => {
              if (!item.name) return; 
              activeMenu.value = item.name;
              localStorage.setItem('active_menu', item.name)
              router.push({ name: item.name })
            }}
            class={`menu-item ${activeMenu.value === item.name ? 'menu-item_active' : ''}`}
          >
            <span>{item.title}</span>
          </div>
        )
      })
    }

    return () => (
      <div class="top-bar">
        <div class="left">
          {
            renderMenu([
              {title: '页面 1', name: 'Home'},
              {title: '页面 2', name: 'ArtificialIntelligence'},
              {title: '页面 3', name: 'AchievementAggregation'}
            ])
          }
        </div>
        <div class="center">
          {/* <img
            src={new URL(`../../assets/common/main-title.png`, import.meta.url).href} alt=""
            style={{
              width: '1000px',
              transform: 'translate(15px, 0px)'
            }}
          /> */}
          <span style="letter-spacing: 4px;">{props.title}</span>
        </div>
        <div class="right">
          {
            renderMenu([
              {title: '页面 4', name: 'BusinessIntegration'},
              {title: '页面 5', name: 'VillageLevel'},
              {title: '页面 6', name: 'OperationalRegulation'}
            ])
          }
        </div>
      </div>
    )
  }
});
