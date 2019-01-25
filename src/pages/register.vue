<template>
  <div>
    <txt-header headerTitle="注册"></txt-header>
    <txt-input marginTop="" label="手机号码" placeholder="您的手机号" :max-length="11" inputType="integer"></txt-input>
    <txt-input marginTop="" label="验证码" placeholder="请输入验证码" buttonIconShow="" buttonText="获取验证码" :max-length="6" inputType="integer"></txt-input>
    <txt-button btnText="注册" :btn-click="register"></txt-button>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header.vue'
  import TxtInput from './../components/txt-input.vue'
  import TxtButton from './../components/txt-button.vue'
  export default {
    components: {
      TxtHeader,
      TxtInput,
      TxtButton
    },
    methods:{
      register:function(){

      }
    }
  }
</script>
<style scoped>

</style>
