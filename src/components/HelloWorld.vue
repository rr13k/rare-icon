<template>

<div>
    <h3>基础图标</h3>
    <Add  :width="48" :height="48" :parentDeep="3"  :animation="false" />

    <Close :width="48" :height="48" :parentDeep="3" :animation="false" />

    <More :width="48" :height="48" :animation="false" />

    <Edit :width="48" :height="48"  :animation="false" />

    <Delete color="red" :width="48" :height="48"  :animation="false" />
</div>

<div>
  <h3>带托盘</h3>
  <tray linecap="round">
    <Add  :color="'black'" :width="48" :height="48" :parentDeep="3"  :animation="false" />
  </tray>

  <tray linecap="round">
    <Close :color="'black'" :width="48" :height="48" :parentDeep="3" :animation="false" />
  </tray>

  <tray linecap="round">
    <More :parentDeep="3"  :width="48" :height="48" :animation="false" />
  </tray>

  <tray linecap="round">
    <Edit :parentDeep="3"  :width="48" :height="48"  :animation="false" />
  </tray>

  <tray linecap="round">
    <Add  :color="'black'" :width="48" :height="48" :parentDeep="3"  :animation="false" />
  </tray>
</div>

<div>
  <h3>标准用法(hover this)</h3>
  <tray linecap="round" :duration="1">
    <!-- <Delete2  :color="'black'" :width="48" :height="48" :parentDeep="3"  hoverColor="#67C23A"/> -->
    <Add  :color="'black'" :width="48" :height="48" :parentDeep="3"   :animation="true" hoverColor="#67C23A"/>
  </tray>

  <tray linecap="round">
    <Close :color="'black'" :width="48" :height="48" :parentDeep="3" :animation="true" hoverColor="red"/>
  </tray>

  <tray linecap="round">
      <More :parentDeep="3"  :width="48" :height="48" hoverColor="blue" />
  </tray>

  <tray linecap="round">
      <Edit :parentDeep="3"  :width="48" :height="48" hoverColor="yellow" />
  </tray>

  <tray linecap="round">
    <Delete :parentDeep="3"  :width="48" :height="48"  hoverColor="pink" />
  </tray>
</div>

<div>
  <h3>大图标</h3>
  <Add  :color="'black'" :width="62" :height="62" :parentDeep="3"  hoverColor="#67C23A" :animation="false"/>

  <Close :color="'black'" :width="62" :height="62" :parentDeep="3" hoverColor="red" :animation="false"/>

  <More :parentDeep="3"  :width="62" :height="62" hoverColor="blue" :animation="false"/>

  <Edit :parentDeep="3"  :width="62" :height="62" hoverColor="yellow" :animation="false"/>

  <Delete :parentDeep="3"   :width="62" :height="62"  hoverColor="pink" :animation="false"/>
</div>

 
</template>
<script setup lang="ts">
import tray from '@/components/tray/tray.vue'
// import Add from '@/components/add/add.vue'
// import Close from '@/components/close/close.vue'
import More from '@/components/more/more.vue'
import Edit from '@/components/edit/edit.vue'
import Delete from '@/components/delete/delete.vue'
import {Add, Close} from 'rare-icon'


defineProps<{ msg: string }>()

</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
