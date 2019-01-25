<template>
  <div>
    <txt-header headerTitle="微信登陆"></txt-header>
    <txt-input marginTop="" label="请设置您的用户名" placeholder="请设置用户名" :max-length="11" inputType="integer"></txt-input>
    <txt-button btnText="登陆" :btn-click="wechatLogin"></txt-button>
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
      wechatLogin:function(){

      }
    }
  }
</script>
<style scoped>

</style>
