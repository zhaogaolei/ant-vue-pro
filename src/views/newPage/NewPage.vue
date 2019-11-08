<template>
  <page-view>
    <div slot="headerContent">
      插槽，用来显示面包屑和标题,可通过路由配置是否显示
    </div>
    <div>新的内容</div>

  </page-view>

</template>

<script>
import { PageView } from '@/layouts'

export default {
  name: 'NewPage',
  components: {
    PageView
  }
}
</script>
