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

  }
}
</script>
<style>
  #app {
    background: #F7F8FA;
    height: 100%;
  }
</style>
