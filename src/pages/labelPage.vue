<template>
  <div class="bg_fff">
    <txt-header></txt-header>
    <txt-text txtLeftText="区块链" leftStyle="color:#222;font-weight:900;font-size:1.6rem;" textStyle="margin:0 4%;"></txt-text>
    <txt-news-list :list-data="$store.state[module].listData" :from-label="true" listBoxStyle="margin-bottom:0;" :news-detail="newsDetail"></txt-news-list>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header'
  import TxtText from './../components/txt-text'
  import TxtNewsList from './../components/txt-news-list'
  import {NEWS_DETAIL} from './../store/types'
  export default {
    components:{
      TxtHeader,
      TxtText,
      TxtNewsList
    },
    methods:{
      newsDetail(event){
        this.$store.commit('index/' + NEWS_DETAIL,event)
      }
    },
    created(){
      console.log(this.$route.params);
    }
  }
</script>
<style scoped>
</style>
