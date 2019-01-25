<template>
  <div>
    <txt-header headerTitle="重置密码"></txt-header>
    <txt-input marginTop="" label="设置新密码" placeholder="输入8-16位密码" :max-length="11" inputType="integer"></txt-input>
    <txt-input marginTop="" label="确认密码" placeholder="再次输入8-16位密码" buttonIconShow="" buttonText="获取验证码" :max-length="6" inputType="integer"></txt-input>
    <txt-button btnText="确定" :btn-click="sure"></txt-button>
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
      sure:function(){

      }
    }
  }
</script>
<style scoped>

</style>
