<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    console.log('移动端页面======================')
  }
}
</script>
<style>

  #app {

    height: 100%;
  }
</style>
