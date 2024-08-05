
import { defineComponent, ref, reactive, VueElement } from 'vue';

import './style.less';

interface Props {
  title: string | VueElement,
  class: string
}

export default defineComponent({
  props: {
    title: {
      type: [String, VueElement],
      default: ''
    },
    class: {
      type: String,
      default: ''
    }
  },
  setup(props: Props, { slots }) {

    return () => {
      const { class: className, title } = props;
      return (
        <div class={`doudou-card ${className}`}>
          <div class="nc-card-title">
            {
              typeof title === 'string' ? (
                <span class="nc-ct-span">{title}</span>
              ) : (
                title
              )
            }
          </div>
          <div class="nc-content">
            {slots?.default?.()}
          </div>
        </div>
      )
    }
  }
})
