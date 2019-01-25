<template>
  <div class="flex row searchBox item_ct" :style="searchStyle" @click="search">
    <img :src="icon" alt="">
  </div>
</template>
<script>
  export default {
    props:{
      searchStyle:{
        type:String,
        default:''
      },
      icon:{
        type:String,
        default:require('./../assets/infroSearch.png')
      },
      search:{
        type:Function,
        default:function(){

        }
      }

    }
  }
</script>
<style scoped>
  .searchBox{
    justify-content: flex-end;
    height: 3rem;
    padding:0 4%;
  }
  .searchBox > img{
    width:1.6rem;
    height: 1.6rem;
  }
</style>
