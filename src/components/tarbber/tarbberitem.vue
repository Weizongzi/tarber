<template>
  <div class="tarbberitem" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'tarberItem',
  data(){
    return{
      //isActive:true
    }
  },
  props:{
    path: String,
    acitveColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      console.log('active',this.$route.path, this.path)
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive? {color:this.acitveColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
       console.log('click', this.path)
       console.log(this.isActive)
    }
  }
}
</script>

<style>
.tarbberitem{
  flex: 1;
  text-align: center;
  height: 49px;
  justify-items: center;
  box-shadow: 0px -1px 10px rgba(56, 54, 54, 0.1);

}
#tar-ber img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: red;
}
</style>