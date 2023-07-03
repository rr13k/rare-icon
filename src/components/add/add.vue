<template>
  <svg ref="root" class="root" :width="props.width" :height="props.height" viewBox="0 0 80 80" :style="{ rotate: props.rotate + 'deg', '--hover-color': props.hoverColor }">
    <line ref="line1" class="line1" x1="10" y1="40" x2="70" y2="40" :stroke-width="props.strokeWidth" :stroke="props.color"/>
    <line ref="line2" x1="40" y1="10" x2="40" y2="70" :stroke-width="props.strokeWidth" :stroke="props.color" />
  </svg>
</template>

<script setup lang='ts'>
import { onMounted,ref } from 'vue';
// @ts-ignore
import { gsap } from 'gsap';
// @ts-ignore
import color from 'color'

// 库名称-rare
interface Props {
  duration?: number
  targer?: string
  color?: string
  strokeWidth?: number
  rotate?: number
  parentDeep?:number
  width?:number
  height?:number
  linecap?:string
  hoverColor?:string
  animation?:boolean
}

const props = withDefaults(defineProps<Props>(), {
  duration: .3,
  targer: undefined,
  color: 'currentColor', // 通过透明度渐变
  strokeWidth: 10,
  rotate: 0,
  parentDeep: 1,
  width:12,
  height:12,
  hoverColor: 'currentColor',
  linecap: 'butt',
  animation: true
})

const root = ref(null);
const line1 = ref(null)
const line2 = ref(null)

onMounted(() => {
  var onHoverTarger
  const closeline1 = line1.value
  const closeline2 = line2.value

  if (props.parentDeep != undefined && props.parentDeep > 0 && root.value != undefined) {
    var parent:any = root.value
    for (let i = 0; i < props.parentDeep; i++) {
      parent = parent.parentNode
    }
    onHoverTarger = parent
  }else if(props.targer){
    onHoverTarger = document.getElementById(props.targer);
  }

  if (onHoverTarger == undefined) {
    console.error("targer is undefined")
  }

  if (props.animation){
    // 定义SVG元素的动画效果 
    const tl = gsap.timeline({ paused: true});
    // transformOrigin 设置旋转中心,应该为view/2
    tl.fromTo(closeline1, { attr: { x1: '40', x2: '40',   'stroke-linecap': 'butt'}, opacity:0.1,transformOrigin: "center" }, { attr: { x1: "10", x2: "70", stroke: props.color,'stroke-linecap': props.linecap},opacity:1, duration:props.duration,rotation: 360 })
    tl.fromTo(closeline2, { attr: { x1: '40', y1: "40", x2: '40', y2: "40", 'stroke-linecap': 'butt' },opacity:0.1, transformOrigin: "center" }, { attr: { x1: "40", y1: "10", x2: "40", y2: "70", stroke:  props.color,'stroke-linecap': props.linecap }, opacity:1, duration:props.duration, rotation: 360 }, 0)
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

<style lang="scss">
.root:hover{
  line{
    // transition: all .3s;
    stroke: var(--hover-color,'black'); 
  }
}
</style>
