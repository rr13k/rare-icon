<template>
  <svg ref="root"  class="root" viewBox="0 0 800 850" version="1.1" xmlns="http://www.w3.org/2000/svg" calss="root"
    :width="props.width" :height="props.height"
    :style="{'--hover-color': props.hoverColor}"
    >
    <path
      :fill="props.color"
      d="M 249.6 99.2 v 64 h 320 v -64 H 249.6 z m 416 144 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 39.7648 -32.2352 72 -72 72 H 201.6 c -39.7648 0 -72 -32.2352 -72 -72 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 c 13.2552 0 24 10.7448 24 24 v 428.8 c 0 13.2552 10.7448 24 24 24 h 416 c 13.2552 0 24 -10.7448 24 -24 V 267.2 c 0 -13.2552 10.7448 -24 24 -24 z m -344 32 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z m 176 0 c 13.2552 0 24 10.7448 24 24 v 352 c 0 13.2552 -10.7448 24 -24 24 c -13.2552 0 -24 -10.7448 -24 -24 V 299.2 c 0 -13.2552 10.7448 -24 24 -24 z M 577.6 51.2 c 22.0912 0 40 17.9088 40 40 v 72 h 126.4 c 13.2552 0 24 10.7448 24 24 c 0 13.2552 -10.7448 24 -24 24 H 75.2 c -13.2552 0 -24 -10.7448 -24 -24 c 0 -13.2552 10.7448 -24 24 -24 h 126.4 v -72 c 0 -22.0912 17.9088 -40 40 -40 h 336 z"></path>
  </svg>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
// @ts-ignore
import { gsap } from 'gsap';
// @ts-ignore
import color from 'color'
// @ts-ignore
import anime from 'animejs'
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

const root = ref(null)
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
    const tl = gsap.timeline({ paused: true });
    // transformOrigin 设置旋转中心,应该为view/2

    tl.fromTo(root.value, { opacity:0.1,rotateY:90, transformOrigin: "center" }, { opacity:1,rotateY:0,duration: props.duration,fill:props.color })
    // 监听鼠标事件，触发动画
    onHoverTarger.addEventListener('mouseenter', () => {
      tl.play()
    });

    onHoverTarger.addEventListener('mouseleave', () => {
      tl.reverse()
    });
  }
})
</script>
<style lang="scss" scoped>
.hover {
  > path {
    fill : var(--hover-color) !important;
  }
}
</style>