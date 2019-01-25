<template>
  <div>
    <txt-header headerLeftType="ii" headerRightText="注册" :header-right-click="register"></txt-header>
    <txt-input marginTop="" label="手机号码" placeholder="您的手机号" :max-length="11" inputType="integer"></txt-input>
    <txt-input marginTop="" label="验证码" placeholder="请输入验证码" buttonIconShow="" buttonText="获取验证码" :max-length="6" inputType="integer"></txt-input>
    <txt-button btnText="登陆" :btn-click="login"></txt-button>
    <txt-text txtCenterText="其他方式登陆" textStyle="color:#999;justify-content: center;margin-top:6rem;"></txt-text>
    <txt-login-tab :left-login="leftLogin" :right-login="rightLogin"></txt-login-tab>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header.vue'
  import TxtInput from './../components/txt-input.vue'
  import TxtButton from './../components/txt-button.vue'
  import TxtText from './../components/txt-text.vue'
  import TxtLoginTab from './../components/txt-login-tab.vue'
  export default {
    components: {
      TxtHeader,
      TxtInput,
      TxtButton,
      TxtText,
      TxtLoginTab
    },
    methods:{
      login:function(){

      },
      leftLogin:function(){
        this.$router.push('loginByPassword');
      },
      rightLogin:function(){
        this.$router.push('wechatLogin');
      },
      register:function(){
        this.$router.push('register');
      }
    }
  }
</script>
<style scoped>

</style>
