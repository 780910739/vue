<template>
  <div class="flex row justify_ad">
    <div class="leftBox" @click="leftLogin">
      <img src="./../assets/user.png" alt="" class="iconLogin">
      <p class="loginType">账号登陆</p>
    </div>
    <div class="rightBox" @click="rightLogin">
      <img src="./../assets/wechat.png" alt="" class="iconLogin">
      <p class="loginType">微信登陆</p>
    </div>
  </div>
</template>
<script>
  // import
  export default {
    props:{
      leftLogin:{
        type:Function,
        default:function(){

        }
      },
      rightLogin:{
        type:Function,
        default:function(){

        }
      }
    }
  }
</script>
<style scoped>
  .iconLogin{
    width: 2.4rem;
    height: 2.4rem;
  }
  .loginType{
    color:#BBB;
    font-size: 0.8rem;
    padding:0.6rem 0;
  }
</style>
