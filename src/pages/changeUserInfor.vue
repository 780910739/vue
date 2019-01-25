<template>
  <div class="userInfor">
    <txt-header headerTitle="个人信息" headerRightText="保存" :header-right-click="saveUserInfor"></txt-header>
    <txt-operation-infor fromRoute="changeUserInfor" :user-news-infor="$store.state[module].userNewsInfor" :input="inputValue" :text-input="textInput"></txt-operation-infor>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header'
  import TxtOperationInfor from './../components/txt-operation-infor'
  import {USER_USERINFOR, USER_NICK_NAME, USER_SKILL, USER_SAVE_INFOR} from './../store/types'
  export default {
    components:{
      TxtHeader,
      TxtOperationInfor
    },
    methods:{
      saveUserInfor:function(){
        this.$store.commit(this.modulePath + USER_SAVE_INFOR)
      },
      inputValue:function(value){
        this.$store.commit(this.modulePath + USER_NICK_NAME,value)
      },
      textInput:function(value){
        this.$store.commit(this.modulePath + USER_SKILL,value)
      }
    },
    created(){
      this.$store.commit(this.modulePath + USER_USERINFOR)
    }
  }
</script>
<style scoped>

</style>
