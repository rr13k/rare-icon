<template >
  <div>
    <h3>基础图标</h3>
    <Add :width="48" :height="48" :parentDeep="3" :animation="false" />

    <Close :width="48" :height="48" :parentDeep="3" :animation="false" />

    <More :width="48" :height="48" :animation="false" />

    <Edit :width="48" :height="48" :animation="false" />

    <Delete color="red" :width="48" :height="48" :animation="false" />
  </div>

  <div>
    <h3>带托盘</h3>
    <tray linecap="round">
      <Add :color="'black'" :width="48" :height="48" :parentDeep="3" :animation="false" />
    </tray>

    <tray linecap="round">
      <Close :color="'black'" :width="48" :height="48" :parentDeep="3" :animation="false" />
    </tray>

    <tray linecap="round">
      <More :parentDeep="3" :width="48" :height="48" :animation="false" />
    </tray>

    <tray linecap="round">
      <Edit :parentDeep="3" :width="48" :height="48" :animation="false" />
    </tray>

    <tray linecap="round">
      <Add :color="'black'" :width="48" :height="48" :parentDeep="3" :animation="false" />
    </tray>
  </div>

  <div>
    <h3>标准用法(hover this)</h3>
    <tray linecap="round" :duration="1">
      <Add :color="'black'" :width="48" :height="48" :parentDeep="3" :animation="true" hoverColor="#67C23A" />
    </tray>

    <tray linecap="round">
      <Close :color="'black'" :width="48" :height="48" :parentDeep="3" :animation="true" hoverColor="red" />
    </tray>

    <tray linecap="round">
      <More :parentDeep="3" :width="48" :height="48" hoverColor="blue" />
    </tray>

    <tray linecap="round">
      <Edit :parentDeep="3" :width="48" :height="48" hoverColor="yellow" />
    </tray>

    <tray linecap="round">
      <Delete :parentDeep="3" :width="48" :height="48" hoverColor="pink" />
    </tray>
  </div>

  <div>
    <h3>大图标</h3>
    <Add :color="'black'" :width="62" :height="62" :parentDeep="3" hoverColor="#67C23A" :animation="false" />

    <Close :color="'black'" :width="62" :height="62" :parentDeep="3" hoverColor="red" :animation="false" />

    <More :parentDeep="3" :width="62" :height="62" hoverColor="blue" :animation="false" />

    <Edit :parentDeep="3" :width="62" :height="62" hoverColor="yellow" :animation="false" />

    <Delete :parentDeep="3" :width="62" :height="62" hoverColor="pink" :animation="false" />
  </div>

  <div>
    <h3>支持下拉</h3>
    <Select  :width="62" :height="62" :duration="1"  hover-color="red" :rotate="360" hover :animation="false">
      <tray linecap="round" :duration=".5">
        <Add :width="48" :height="48" :parentDeep="3" :animation="false" @click="clickAdd" hoverColor="green" />
      </tray>

      <tray linecap="round" :duration=".5">
        <Delete :parentDeep="3" :width="48" :height="48" hoverColor="red" :animation="false" />
      </tray>
    </Select>

    <Select :width="62" :height="62" :duration="3"  hover-color="red" :rotate="3600" :animation="false"> 
      <tray linecap="round" :duration=".5">
        <Add :width="48" :height="48" :parentDeep="3" :animation="false" @click="clickAdd" hoverColor="green" />
      </tray>

      <Edit :parentDeep="3" :width="62" :height="62" hoverColor="yellow" :animation="false" />

      <tray linecap="round" :duration=".5">
        <Delete :parentDeep="3" :width="48" :height="48" hoverColor="red" :animation="false" />
      </tray>
    </Select>

    <Select :width="62" :height="62"  :parentDeep="1" :duration="3"  hover-color="red" :rotate="3600">
      <tray linecap="round" :duration=".5">
        <Add :width="48" :height="48" :parentDeep="3" :animation="false" @click="clickAdd" hoverColor="green" />
      </tray>
      <Edit :parentDeep="3" :width="62" :height="62" hoverColor="yellow" :animation="false" />
      <tray linecap="round" :duration=".5">
        <Delete :parentDeep="3" :width="48" :height="48" hoverColor="red" :animation="false" />
      </tray>
    </Select>
  </div>
</template>
<script setup lang="ts">
import tray from '@/components/tray/tray.vue'
import Add from '@/components/add/add.vue'
import Close from '@/components/close/close.vue'
import More from '@/components/more/more.vue'
import Edit from '@/components/edit/edit.vue'
import Delete from '@/components/delete/delete.vue'
// import { Close } from 'rare-icon'
import Select from '@/components/select/select.vue'

defineProps<{ msg: string }>()

function clickAdd() {
  console.log('clickAdd')
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
