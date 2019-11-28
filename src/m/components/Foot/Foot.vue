<template>
  <div class="footer">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'Foot'
}
</script>
<style lang="less" scoped>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 54px;
  background: #ffffff;
  padding: 5px 16px;
  width: 100%;
  z-index: 1000;
  display: flex
}
</style>
