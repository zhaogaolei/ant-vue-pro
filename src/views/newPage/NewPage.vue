<template>
  <page-view>
    <div slot="headerContent">
      插槽，用来显示面包屑和标题,可通过路由配置是否显示
    </div>
    <div>是否手机模式：{{ this.isMobile() }}</div>
    <div v-if="this.isDesktop()">
      AntdDate:
      <a-date-picker @change="onChange" />
    </div>
    <div v-if="this.isMobile()">
      <van-field
        v-model="value"
        label="VantDate"
        disabled
        @click="onInputClick"
        placeholder="选择日期" />
      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '50%' }"
      >
        <van-datetime-picker
          @confirm="onDateConfirm"
          @cancel="onDateCancel"
          v-model="currentDate"/>
      </van-popup>

    </div>
  </page-view>

</template>

<script>
import { PageView } from '@/layouts'
import { mixin, mixinDevice } from '@/utils/mixin'
export default {
  name: 'NewPage',
  mixins: [mixin, mixinDevice],
  components: {
    PageView
  },
  data () {
    return {
      value: '',
      show: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    }
  },
  mounted () {
  },
  methods: {
    onChange (date, dateString) {
      console.log(date, dateString)
    },
    onInputClick () {
      this.show = true
    },
    onDateConfirm () {
      this.value = this.currentDate.toLocaleDateString()
      this.show = false
      console.log(this.value)
    },
    onDateCancel () {
      this.show = false
    }
  }
}
</script>
