<template>
  <div id="app">
    <router-view/>
    <mainTarber/>
  </div>
</template>
<script>
import mainTarber from './components/mainTarber.vue'
export default {
  name: 'App',
  components:{
    mainTarber
  }
}
</script>

<style>

</style>
