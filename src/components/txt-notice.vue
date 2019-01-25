<template>
  <div>
    <div class="noticeBox" v-for="(item,index) in noticeData" :key="index">
      <div class="time">
        {{item.time}}
      </div>
      <div class="notice flex row">
        <div class="noticePic">
          <img :src="item.pic" alt="">
        </div>
        <div class="arrow"></div>
        <div class="noticeContent t_l">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      noticeData:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .noticeBox{
    margin:4%;
  }
  .time{
    color:#bbb;
    height: 2rem;
    line-height: 2rem;
  }
  .notice{
    position: relative;
  }
  .noticePic > img{
    width: 2.4rem;
    height: 2.4rem;
  }
  .noticeContent{
    flex:1;
    min-height:4rem;
    margin-left:1rem;
    background: #fff;
    padding:0.4rem;
    color:#333;
    border-radius:5px;
  }
  .arrow{
    position: absolute;
    top:1rem;
    left:2.6rem;
    border-style: solid;
    border-width: 0px 0px 0.8rem 0.8rem;
    border-color: transparent transparent #fff transparent;
    width: 0px;
    height: 0px;
    transform: rotate(270deg);
  }
</style>
