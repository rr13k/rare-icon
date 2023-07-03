<template>
  <cite class="tray" ref="tray" :style="{padding: props.padding}">
    <div class="bg" ref="bg" :style="{
      backgroundColor: props.color,
      borderRadius: props.linecap == 'round' ? '5px' : '0px'}">
    </div>
    <div ref="slotTarget" style="height: inherit;line-height: 0px;">
      <slot ></slot>
    </div>
  </cite>
</template>
<script setup lang='ts'>
// @ts-ignore
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

interface Props {
  duration?: number
  targer?: string
  color?: string
  strokeWidth?: number
  parentDeep?:number
  width?:number
  height?:number
  linecap?: 'round' | 'butt'
  padding?:string
}

const props = withDefaults(defineProps<Props>(), {
  duration: .3,
  targer: undefined,
  color: '#f3f3f3', // 通过透明度渐变
  strokeWidth: 10,
  linecap: "butt",
  padding: '3px'
})

const tray = ref(null)
const bg = ref(null)
const slotTarget = ref(null)

onMounted(() => {
  const bgDom = bg.value
  const onHoverTarger :any= slotTarget.value

  const tl = gsap.timeline({ paused: true});
  // transformOrigin 设置旋转中心,应该为view/2
  tl.fromTo(bgDom, { transformOrigin: "center",scale:0 }, { duration:props.duration, scale:1 })
  onHoverTarger?.addEventListener('mouseenter', () => {
    tl.play();
  });
  onHoverTarger?.addEventListener('mouseleave', () => {
    tl.reverse();
  });
})
</script>

<style scoped>
.tray {
  display: inline-block;
  text-align: center;
  margin: 2px;
  position: relative;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: -1;
}
</style>