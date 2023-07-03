<template>
  <svg ref="root" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    :width="props.width" :height="props.height"
    id="root"
    :style="{'--hover-color': props.hoverColor}"
    >
    <path
     id="nihao"
      class="rare-more"
      ref="point1"
      d="M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z"
      :fill="props.color" p-id="2443"></path>
    <path
      class="rare-more"
      ref="point2"
      d="M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z"
      :fill="props.color"
      p-id="2444"></path>
    <path
      class="rare-more"
      ref="point3"
      d="M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z"
      :fill="props.color" p-id="2445"></path>
  </svg>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
// @ts-ignore
import color from 'color'
import { addHoverClassEvent } from '@/utils/utils';

interface Props {
  duration?: number
  targer?: string
  color?: string
  strokeWidth?: number
  rotate?: number
  parentDeep?: number
  width?: number
  height?: number
  linecap?: string
  hoverColor?: string
  animation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  duration: .3,
  targer: undefined,
  color: 'currentColor', // 通过透明度渐变
  strokeWidth: 10,
  rotate: 0,
  parentDeep: 1,
  width: 12,
  height: 12,
  hoverColor: 'currentColor',
  linecap: 'butt',
  animation: true
})

const root = ref(null);
const point1 = ref(null)
const point2 = ref(null)
const point3 = ref(null)

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

  if(root.value) {
      addHoverClassEvent(root.value)
  }

  if (props.animation && onHoverTarger) {
    // 定义SVG元素的动画效果 
    const tl = gsap.timeline({ paused: true });
    // transformOrigin 设置旋转中心,应该为view/2
    tl.fromTo(point2.value, { opacity:0, transformOrigin: "center" }, { opacity:1,duration: props.duration,fill:props.color })
    tl.fromTo(point1.value, {x:280,opacity:0},{x:-60, fill: props.color, opacity:1 ,duration: props.duration},0)
    tl.fromTo(point3.value, {x:-280,opacity:0 },{ x:60, fill: props.color, opacity:1,duration: props.duration },0)
    // 监听鼠标事件，触发动画

    onHoverTarger.addEventListener('mouseenter', () => {
      tl.play()
    });
    onHoverTarger.addEventListener('mouseleave', () => {
      tl.reverse()
    });
  }
})

defineExpose({
  point1,
  point2,
  point3
})
</script>

<style lang="scss" scoped>
.hover{
  > path {
    fill: var(--hover-color, 'black') !important;
  }
}
</style>
