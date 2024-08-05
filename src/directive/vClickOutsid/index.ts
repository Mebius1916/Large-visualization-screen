import type { VueElement, DirectiveBinding } from 'vue';

const destroyMap = new Map();

export default {

  /**
  * @param el - 当前指令绑定的元素的真实Dom
  * @param binding - 指令上绑定的参数,包含指令传入的value，和指令上的带的参数、修饰符等。
  * mounted钩子还有vnode, prevVnode这两个参数
  */
  mounted: (el: VueElement, binding: DirectiveBinding) => {
    /**
      * @param binding - 包含一下参数信息
      * value: 传递给指令的值,这个例子中的vlaue就是onClickOutside这个函数。
      * oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
      * arg：传递给指令的参数，(如果有的话)，这个例子中就是传入的变量msg对应的字符串。
      * modifiers：一个包含修饰符的对象 (如果有的话)。这个例子中 v-click-outside:[msg].delay中，修饰符对象是 { delay: true}，当然这可以设置多个。
      * instance：使用该指令的组件实例。
      * dir：指令的定义对象，就是当前这个export default 的对象。
      */
    const { value, arg, modifiers: { delay } } = binding;
    // 点击外部区域的事件
    function onClickOutside(e: Event) {
      /**
       * 点击外部区域通过鼠标实际点击元素的target判断是否是指令绑定的元素或这他的子元素
       * 如果是指令绑定的元素或者是它的子元素，则点击区域不是el外部
       */
      const { target } = e;

      if (target !== el && !el.contains(target as VueElement)) {
        // 同样判断value是否为函数类型
        if (typeof value === 'function') {
          value('outside', e, el, arg)
        };
        // 外部区域点击后，移除onClickOutside,
        document.removeEventListener('click', onClickOutside, false);
        // 并删除记录的这一项目
        destroyMap.get(el)[1] = null;
      };

    }

    /**
     * @param e - 给上层传当前鼠标事件的event
     */
    function onClickSelf(e: Event) {
      // 这里做了一个小判断，如果给元素对应的外部区域存在自定义的点击事件则不允许再次点击，这里可以忽略
      // if (typeof destroyMap?.get?.(el)?.[1] === 'function') return;

      // 判断传入的value是否为一个函数
      if (typeof value === 'function') {
        // 延迟执行的修饰符delay逻辑
        if (delay) {
          setTimeout(() => {
            value('self', e, el, arg)
          }, 1000)
        } else {
          value('self', e, el, arg)
        }
      };
      /**
       * 点击自身的事件已经触发，设置点击外部区域的事件，即给document设置点击事件
       */
      document.addEventListener('click', onClickOutside, false);
      // 将这两个事件存放在map中该元素对应的数组中，后续指令卸载需要使用
      destroyMap.set(el, [onClickOutside, onClickSelf])
    };

    document.addEventListener('click', onClickOutside, false);
    destroyMap.set(el, [onClickOutside, onClickSelf])

    // /**
    //  * 组件挂载完成后给当前绑定指令的元素设只点击事件
    //  * 这里必须要定义一个外部的回调函数，因为指令卸载后要移除它
    //  */
    // el.addEventListener('click', onClickSelf, false);

  },

  unmounted: (el: VueElement) => {
    // 卸载指令后移除el关联的所有自定义事件，并从记录中删除
    const [f1, f2] = destroyMap.get(el);

    document.removeEventListener('click', f1, false);
    el.removeEventListener('click', f2, false);

    destroyMap.delete(el);
  }
}
