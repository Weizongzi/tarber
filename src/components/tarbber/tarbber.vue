<template>
  <div id="tar-ber">
    <slot></slot>
    </div>
</template>

<script>
export default {
  name:'tarBer'
}
</script>

<style>
@import '../../assets/css/base.css';
#tar-ber {
  display: flex;
  background-color: #e0dbdb;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>