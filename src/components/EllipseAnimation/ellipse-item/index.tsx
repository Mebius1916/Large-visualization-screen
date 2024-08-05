import { defineComponent } from 'vue';
import './index.css'

interface Props {
    label: string
    num: number
}

// const EllipseItem = defineComponent(({ label, num }: Props) => {
//     return () => {
//         return (
//             <div class='ellipse-item-container'>
//                 <span>{num}</span>
//                 <span>{label}</span>
//             </div>
//         )
//     }
// })
const EllipseItem = ({ label, num }: Props) => {
    return (
        <div class='ellipse-item-container'>
            <span>{num}</span>
            <span>{label}</span>
        </div>
    )
}

export default EllipseItem