<template>
  <pagg-view>
    <div>商品列表</div>
  </pagg-view>

</template>

<script>
import { PageView } from '@/layouts'
import { mixin, mixinDevice } from '@/utils/mixin'
export default {
  name: 'Product',
  mixins: [mixin, mixinDevice],
  components: {
    PageView
  },
  data () {
    return {
    }
  },
  mounted () {
    if (this.isMobile() || this.isTablet()) {
      this.$router.push({ path: '/m/product' })
    }
  },
  methods: {
  }
}
</script>
