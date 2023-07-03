<template>
  <svg ref="root" :width="props.width" :height="props.height" viewBox="0 0 1024 924" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="icon root" version="1.1" :style="{'--hover-color': props.hoverColor}">
    <path ref="line1" d="M611,94L266,97c-25,7-44,34-43,84l5,574c1,34-3,34,31,36l546,3c18,1,14,-7,15,-27l0,-324" fill="none" id="svg_1" :stroke="props.color"  stroke-linecap="round" :stroke-width="`${props.strokeWidth}px`"/>
    <path ref="line2" d="m847.74,188.67q1.9,4.54 3.09,10.58t1.18,12.6t-2.38,13.1t-7.62,12.6q-5.71,6.05 -10.24,10.58t-7.86,8.07q-3.81,4.03 -7.14,7.06l-89.09,-94.25q5.71,-5.54 13.58,-13.36t13.1,-12.35q6.67,-5.55 13.81,-7.81t14.06,-2.02t13.34,2.27t11.2,4.53q10,5.55 22.16,19.41t18.82,28.98l-0.01,0.01zm-371.12,245.96q2.85,-3.02 13.34,-14.37t26.2,-27.97l34.77,-36.8l38.59,-40.83l102.43,-108.37l89.09,94.75l-102.43,108.37l-38.12,40.83q-19.05,19.66 -34.3,36.03t-25.25,26.96t-11.91,12.09q-4.76,4.54 -10.96,9.57t-12.87,8.07q-6.67,3.53 -19.54,8.56t-26.92,9.83t-26.68,8.32t-18.82,4.54q-12.87,1.51 -17.14,-4.03t-2.38,-18.65q0.95,-7.06 4.53,-20.41t7.62,-27.72t7.86,-26.46t6.19,-16.63q2.86,-7.06 6.44,-12.86t10.24,-12.86l0,0.02l0.02,0.02z" fill="none" id="svg_2" :stroke="props.color" :stroke-width="`${props.strokeWidth - 10}px`"/>
  </svg>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
// @ts-ignore
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
  strokeWidth: 50,
  rotate: 0,
  parentDeep: 1,
  width: 12,
  height: 12,
  hoverColor: 'currentColor',
  linecap: 'butt',
  animation: true
})

const root = ref(null);
const line1 = ref(null);
const line2 = ref(null);

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
    const tl = gsap.timeline({ paused: true});

    // 动态计算描边长度
    let length = (line1.value as any).getTotalLength()
    let strokeDasharray = `${length} ${length}`
    let strokeDashoffset = length

    tl.fromTo(line1.value, { attr: { stroke:props.color},opacity:0.1, strokeDashoffset:strokeDashoffset,strokeDasharray:strokeDasharray, transformOrigin: "center" }, { attr: { stroke:props.color},opacity:1,strokeDashoffset:0, duration:props.duration})
    tl.fromTo(line2.value, { attr: { stroke:props.color},strokeDashoffset:strokeDashoffset,strokeDasharray:strokeDasharray,opacity:0.1, transformOrigin: "center" }, { attr: { stroke:props.color},opacity:1,strokeDashoffset:0, duration:props.duration},0)
    
    // 监听鼠标事件，触发动画
    onHoverTarger?.addEventListener('mouseenter', () => {
      tl.play();
    });
    onHoverTarger?.addEventListener('mouseleave', () => {
      tl.reverse();
    });
  }
})  
</script>

<style lang="scss" scoped>
.hover {
  path {
    stroke: var(--hover-color, 'black');
  }
}
</style>
