<template>
  <zsAdd :rotate="props.rotate" :targer="props.targer" :color="props.color" :stroke-width="props.strokeWidth"
    :duration="props.duration" :parentDeep="props.parentDeep" :linecap="props.linecap" :hoverColor="props.hoverColor"
    :width="props.width" :height="props.height" :animation="props.animation" />
</template>

<script setup lang='ts'>
import zsAdd from '@/components/add/add.vue'

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
  color: 'black', // 通过透明度渐变
  strokeWidth: 10,
  animation:true,
  rotate: 45,
})
</script>