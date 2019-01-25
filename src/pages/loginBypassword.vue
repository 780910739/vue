<template>
  <div>
    <txt-header headerTitle="账号登陆" headerRightText="注册" :header-right-click="register"></txt-header>
    <txt-input marginTop="" label="用户名/手机号码" placeholder="请输入账号" :max-length="11" inputType="integer"></txt-input>
    <txt-input marginTop="" label="密码" placeholder="请输入密码" :max-length="6" inputType="integer"></txt-input>
    <txt-button btnText="登陆" :btn-click="loginBypassword"></txt-button>
    <txt-text txtRightText="忘记密码" :forget="forget"></txt-text>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header.vue'
  import TxtInput from './../components/txt-input.vue'
  import TxtButton from './../components/txt-button.vue'
  import TxtText from './../components/txt-text.vue'
  export default {
    components: {
      TxtHeader,
      TxtInput,
      TxtButton,
      TxtText
    },
    methods:{
      loginBypassword:function(){

      },
      forget:function(){
        this.$router.push('forgetPasswordOne');
      },
      register:function(){
        this.$router.push('register');
      }
    }
  }
</script>
<style scoped>

</style>
