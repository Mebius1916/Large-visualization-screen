import { VueElement, ref, defineComponent } from 'vue';
import type { CSSProperties } from 'vue'
import './index.css'

interface Props {

    duration?: number //动画播放一圈总时间，单位为 秒(s)，默认值为 12
    paused?: boolean //是否暂停动画，默认为 false
    enterPaused?: boolean //鼠标移动上去是否暂停动画，默认为 true
    children?: VueElement[]

    width?: number //容器宽度，默认 600px
    height?: number //容器高度，默认 200px


    className?: string //样式名，可以编写一些自定义的样式
    style?: CSSProperties //内联样式，可以编写一些自定义内联样式
    //注意：无论外部传过来的 className 或 style 怎么设置，其中 position 属性在这里会被强制设置为 relative

}

const EllipseAnimation = defineComponent((
    { duration = 12, paused = false, enterPaused = true, children = [], className = '', style = {}, width = 600, height = 200 }: Props,
    {slots}
) => {
    const enter = ref<boolean>(false);
    const setEnter = (newValue: boolean) => enter.value = newValue;

    console.log(slots?.default?.())

    return () => {
        return(
            <div
                class={`${className}`}
                style={{ width, height, ...style, position: 'relative' }}
                onPointerenter={() => enterPaused ? setEnter(true) : null}
                onPointerleave={() => enterPaused ? setEnter(false) : null}
            >
                {
                    Array.from((slots.default()[0].children as []) ?? []).map?.((child, index) => {
                        const animYDelay = - (duration * 2 / children.length) * index
                        const animXDelay = - (duration * 2 / children.length) * index - duration / 2

                        return (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    animation: `animX ${duration}s cubic-bezier(0.36, 0, 0.64, 1) ${animXDelay}s infinite alternate, animY ${duration}s cubic-bezier(0.36, 0, 0.64, 1) ${animYDelay}s infinite alternate`,
                                    animationPlayState: (paused || enter) ? 'paused' : 'running'
                                }}
                            >
                                {
                                    child
                                }
                            </div>
                        )
                    })
                }
            </div >
        )
    }
})

// const EllipseAnimation = ({ duration = 12, paused = false, enterPaused = true, children = [], className = '', style = {}, width = 600, height = 200 }: Props) => {

//     const enter = ref<boolean>(false);
//     const setEnter = (newValue: boolean) => {
//         enter.value = newValue
//     }

//     return (
        
//     )

// }

export default EllipseAnimation