/**
 * 开发模式下适配全屏界面
 */
export const scaleContainer = (selector = '.basic-container') => {
  const _el = document.querySelector(selector);
  const { clientWidth, clientHeight } = _el;
  const { innerWidth, innerHeight } = window;

  let widthScale = innerWidth / clientWidth;
  let heightScale = innerHeight / clientHeight;

  let scale = widthScale;
  if (scale * clientHeight > innerHeight) {
    scale = heightScale;
  }

  window.scale = scale;
  _el.style.transform = `scale(${scale}) translate(-50%, -50%)`;
};
/**
 * 定时器
 */
export function poller({
  callback = () => { },
  param = null,
  time = 3000,
}) {
  if (!Array.isArray(window._poller_timers)) {
    window._poller_timers = []
  };

  window._poller_timers.forEach(name => clearTimeout(name));

  const t = setTimeout(() => {
    param ? callback(param) : callback();
  }, time);

  window._poller_timers.push(t);
};

/**
 * 为指定元素设置滚动
 * @param { classname } key - 每个滚动元素的全局唯一标识，这个类名需要设置再滚动容器得父节点，
 *                            key必须传入，否则极易造成样式污染
 * @param { classname } content - 滚动内容得选择器，用于确定那个内容要滚动
 * @param { classname } container - 滚动容器选择器，滚动得内容要再那个容器中滚动,如果不传入则
                                    content的父节点
 * @param { number } speed - 滚动的速度，1为基准，如果想快则设置小于1的数，想慢则设置大于1的数
 * @param { boolean } paused - 鼠标划入滚动容器时，滚动是否要暂停
 */
export function setRollEffect({
  key = '',
  content = '',
  container = '',
  speed = 1,
  paused = true,
}) {
  // 获取滚动内容的高度，并拿到滚懂的元素节点
  const contentNode = document.querySelector(`${key} ${content}`);
  const { offsetHeight, childNodes } = contentNode;

  // 获取滚动容器的高度
  let containerH = 0;
  if (container) containerH = document.querySelector(`${key} ${container}`).offsetHeight;
  else containerH = contentNode.parentNode.offsetHeight;

  // 当容器高度大于滚动内容的高度时，无需滚动
  if (containerH >= offsetHeight) return;
  // 将滚动的内容复制一份插入到末尾
  childNodes.forEach((item, index) => {
    contentNode.append(item.cloneNode(true));
  });

  const nodeKey = key ? key : content
  /**
   * 获取所有滚动标识的样式表
   */
  const styleList = document.querySelectorAll('head style[roll-id]');
  styleList.forEach(item => {
    if (item['roll-id'] === nodeKey) item.remove();
  });

  // 创建一个style标签
  const style = document.createElement('style');
  // 创建这个style标签的内容，也就是滚动所需要的动画
  const keyframeName = nodeKey.match(/\w+/g).join('');
  const keyFrames = `\
                                        @keyframes ${keyframeName} {\
                                          0% {\
                                            transform: translate3d(0, 0, 0);\
                                          }\
                                          100% {\
                                            transform: translate3d(0, -${offsetHeight}px, 0);\
                                          }\
                                        }`;

  // 移动20像素需要1s作为滚动速度的基准,以此计算出这个原始列表滚动完所需要的时间
  const animation = `
                                        ${key} ${content} {\
                                          animation: ${(offsetHeight / 20) * speed}s ${keyframeName} linear infinite normal;\
                                        }\
                                        ${key} ${content}:hover {\
                                          animation-play-state: ${paused ? 'paused' : 'unset'};
                                        }\
                                      `;

  /**
   * 将构造好的动画样式内容赋给style，并将style样式表插入到head中
   * 并给style设置一个roll-id，当key不存在时取content作为roll-id
   * 这里为什么一定要添加一个roll-id，是为了当再次调用该方法时，避免给head中重复添加相同类名的css样式
   */
  style.innerHTML = keyFrames + animation;
  style.setAttribute('roll-id', nodeKey);
  style['roll-id'] = nodeKey;
  document.getElementsByTagName('head')[0].appendChild(style);
}
                                    
