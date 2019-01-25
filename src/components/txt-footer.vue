<template>
  <div class="flex row justify_ad footer">
    <div class="box" v-for="(item,index) in menuList" :key="index"  @click="changeProcessor(index)">
      <img :src="activatedIndexData===index?item.menuSrcOne:item.menuSrcTwo" alt="" class="iconLogin" >
      <p class="loginType">{{item.content}}</p>
    </div>
  </div>
</template>
<script>
  // import
  export default {
    data(){
      return {
        activatedIndexData:this.activatedIndex
      }
    },
    watch:{
      activatedIndex(newVal){
        this.activatedIndexData = newVal;
      }
    },
    methods: {
      changeProcessor(index){
        this.change(index);
      }
    },
    props:{
      menuList:{
        type:Array,
        default(){
          return [
            {'menuSrcOne':require('./../assets/menu1_choose.png'),'menuSrcTwo':require('./../assets/menu1_no.png'),content:'快讯'},
            {'menuSrcOne':require('./../assets/menu2_choose.png'),'menuSrcTwo':require('./../assets/menu2_no.png'),content:'发现'},
            {'menuSrcOne':require('./../assets/menu3_choose.png'),'menuSrcTwo':require('./../assets/menu3_no.png'),content:'我的'}
          ]
        }
      },
      change:{
        type:Function,
        default: function(){

        }
      },
      activatedIndex:{
        type: Number,
        default: 0
      }
    }
  }
</script>
<style scoped>
  .footer{
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    border-top: 1px solid #EEE;
    padding:0.4rem 0;
    background: #fff;
    height: 3.2rem;
  }
  .iconLogin{
    width: 1.6rem;
    height: 1.6rem;
  }
  .loginType{
    color:#BBB;
    font-size: 0.8rem;
  }
</style>
