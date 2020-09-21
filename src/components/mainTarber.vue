<template>
      <tabBar>
      <tarberItem path="/home" acitveColor='blue'>
        <img slot="item-icon" src="./tarbber/img/feng.gif" alt="">
        <img slot="item-icon-active" src="./tarbber/img/feng2.gif" alt="">
        <div slot="item-text">首页</div>
      </tarberItem>
      <tarberItem path="/fenlei" acitveColor='green'>
        <img slot="item-icon" src="./tarbber/img/qiu.gif" alt="">
        <img slot="item-icon-active" src="./tarbber/img/qiu2.gif" alt="">
        <div slot="item-text">我的</div>
      </tarberItem>
    </tabBar>
</template>

<script>
import tabBar from './tarbber/tarbber'
import tarberItem from './tarbber/tarbberitem'
export default {
  name: 'mainTarber',
  components:{
    tabBar,
    tarberItem
  }
}
</script>

<style>

</style>