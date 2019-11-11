<template>
  <div>
    供应商管理
  </div>
</template>

<script>
import { mixin, mixinDevice } from '@/utils/mixin'
export default {

  name: 'MProduct',
  mixins: [mixin, mixinDevice],

  mounted () {
    // console.log('this.isDesktop()======', this.isDesktop())
    // if (this.isDesktop()) {
    //   this.$router.push('/supply')
    // }
  }
}
</script>

<style scoped>

</style>
