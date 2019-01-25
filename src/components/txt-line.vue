<template>
  <div class="lineBox" :style="lineStyle">
    <span class="lineWeight b-i" :style="weightStyle"></span>
  </div>
</template>
<script>
  export default {
    props:{
      lineStyle:{
        type:String,
        default:''
      },
      weightStyle:{
        type:String,
        default:''
      }
    }
  }
</script>
<style scoped>
  .lineBox{
    position: relative;
    margin:0.8rem auto;
    width: 70%;
    height:1px;
    background: #eee;
  }
  .lineWeight{
    position: absolute;
    left: 45%;
    width: 20%;
    height: 2px;
    background: #363535;
  }
</style>
