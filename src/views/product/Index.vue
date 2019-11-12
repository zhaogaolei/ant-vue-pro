<template>
  <page-view>
    <div>商品列表</div>
  </page-view>

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

  },
  methods: {
  }
}
</script>
