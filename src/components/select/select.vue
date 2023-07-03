<template>
    <div ref="root" class="set " :class="show ? 'show' : ''" :style="{
        width: props.width + 'px',
        height: props.height + 'px',
        transition: `all ${props.duration}s ease`
    }" @mouseenter="optMore" @mouseleave="optMore">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" @click="optMore" :width="props.width"
            :height="props.height" id="root" :style="{ '--hover-color': props.hoverColor }">
            <path class="rare-more" ref="point11"
                d="M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z"
                :fill="props.color" p-id="2443"></path>
        </svg>

        <!-- 变形target svg -->
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" :width="props.width"
            display="none" :height="props.height">
            <path id="decagon" opacity="0"
                d="M722.773333 381.44a64 64 0 0 1 90.453334 90.453333l-252.970667 253.013334a68.266667 68.266667 0 0 1-96.512 0l-253.013333-253.013334a64 64 0 0 1 90.538666-90.453333L512 592.128l210.773333-210.773333z"
                fill="#111111" p-id="2447"></path>
        </svg>

        <div ref="drawerBody">
            <slot></slot>
        </div>
    </div>
</template>

<script lang='ts'  setup>
import { gsap } from 'gsap';
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { watch, reactive, toRefs, ref, nextTick, onMounted } from 'vue';
import { addHoverClassEvent } from '@/utils/utils';

const props = defineProps({
    keyId: {
        type: String,
        default: '1'
    },

    hover: {
        type: Boolean,
        default: false
    },

    hoverColor: {
        type: String,
        default: '#000'
    },

    parentDeep: {
        type: Number,
        default: 1
    },

    // 旋转的圈数 360 为一圈
    rotate: {
        type: Number,
        default: 360
    },

    animation: {
        type: Boolean,
        default: true
    },

    color: {
        type: String,
        default: 'currentColor'
    },

    width: {
        type: Number,
        default: 48
    },

    duration: {
        type: Number,
        default: .3
    },
    targer: {
        type: String,
        default: ''
    },

    height: {
        type: Number,
        default: 48
    },

    showKey: {
        type: String,
        default: '1'
    },
    changeShow: {
        type: Function,
        default: undefined
    },
})

const state = reactive({
    show: false
})
const { show } = toRefs(state)
const root = ref<HTMLDivElement>()
const drawerBody = ref<HTMLElement>()
const point11 = ref()

defineEmits(['open', 'close', 'update:visible'])

var tv: any

watch(() => show.value, (value: boolean) => {
    const drawer_boxs = drawerBody.value
    const drawer = root.value
    if (!drawer_boxs || !drawer) throw new Error("无法获取ref: drawerBody或drawer元素")
    const childHeight = drawer_boxs.offsetHeight

    // 计算调整的高度
    const drawerHeight = value ? drawer.offsetHeight + childHeight : props.height
    nextTick(() => {
        drawer.style.height = drawerHeight + 'px'
        console.log("执行tv动画",value,tv)
        value ? tv.play() : tv.reverse()
    })
})

function optMore(e: MouseEvent) {
    console.log(e.type,show.value)
    if (props.hover && e.type === 'click') {
        return
    }

    if (!props.hover) {
        if (e.type === 'mouseenter' || e.type === 'mouseleave') {
            return
        }
    }
    show.value = !show.value
}

onMounted(() => {
    var onHoverTarger
    if (props.parentDeep != undefined && props.parentDeep > 0 && root.value != undefined) {
        var parent: any = root.value
        for (let i = 0; i < props.parentDeep; i++) {
            parent = parent.parentNode
        }
        onHoverTarger = parent
    } else if (props.targer) {
        onHoverTarger = document.getElementById(props.targer);
    }

    if (onHoverTarger == undefined) {
        console.error("targer is undefined")
    }

    console.log('onHoverTarger', onHoverTarger)

    if (root.value) {
        addHoverClassEvent(root.value)
    }

    if (props.animation && onHoverTarger) {
        // 定义SVG元素的动画效果 
        let duration = 0.3
        const tl = gsap.timeline({ paused: true });
        // transformOrigin 设置旋转中心,应该为view/2
        tl.fromTo(point11.value.parentElement, { opacity: 0, transformOrigin: "center" }, { opacity: 1, fill: props.color })
        // 监听鼠标事件，触发动画
        onHoverTarger.addEventListener('mouseenter', () => {
            tl.play().duration(duration)
        });
        onHoverTarger.addEventListener('mouseleave', () => {
            // 当展开时不能隐藏icon
            if (show.value) {
                show.value = false
                tl.reverse().duration(props.duration)
            } else {
                tl.reverse()
            }
        });
    }

    tv = (() => {
        gsap.registerPlugin(MorphSVGPlugin)
        let kk = MorphSVGPlugin.convertToPath([point11.value])
        let tl = gsap.timeline({
            paused: true,
        })
        tl.to(kk, { rotate: props.rotate, transformOrigin: "50% 50%", duration: props.duration })
        tl.to(kk, { morphSVG: "#decagon" }, 0)
        return tl
    })()
})
</script>

<style lang='scss' scoped>
@import './main.scss';

.hover {
    >path {
        fill: var(--hover-color, 'black') !important;
    }
}

.show {
    width: 16px;
    box-shadow: 0px 0px 2px #d2d2d2;
}
</style>