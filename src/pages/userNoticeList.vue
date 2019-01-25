<template>
  <div>
    <txt-header headerTitle="消息列表"></txt-header>
    <txt-notice :notice-data="$store.state[module].noticeData"></txt-notice>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header'
  import TxtNotice from './../components/txt-notice'
  import {GET_NOCTICE_DATA} from './../store/types'
  export default {
    components:{
      TxtHeader,TxtNotice
    },
    created(){
      this.$store.commit(this.modulePath + GET_NOCTICE_DATA)
    }
  }
</script>
<style scoped>

</style>
