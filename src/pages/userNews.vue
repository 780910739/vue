<template>
  <div class="newsBox w_h_100 over_h">
    <txt-header></txt-header>
    <div class="userTop">
      <txt-user :infor-data="$store.state[module].userNewsInfor" v-if="$store.state[module].userNewsInfor.id" inforBoxStyle="margin-bottom:0;margin: 0 2%;" :no-author="$store.state[module].noAuthor" :from-author="$store.state[module].fromAuthor" :follow-user="followUser"></txt-user>
      <txt-text :txtText="$store.state[module].userNewsInfor.skill" textStyle="color:#999;padding-bottom:0.8rem;"></txt-text>
    </div>
    <txt-friend-tab :menu-list="$store.state[module].menuList" :chooseNum="$store.state[module].chooseNum" :jump-user="jumpUser" :list-number="$store.state[module].listNumber1"></txt-friend-tab>
    <txt-news-list :list-data="$store.state[module].listData" listBoxStyle="margin-bottom:0;" :from-label="true" v-if="$store.state[module].chooseNum == 0" :news-detail="jumpNewsDetail"></txt-news-list>
    <txt-comment-list :list-data="$store.state[module].collectionData" listBoxStyle="margin-bottom:0;" :from-label="true" v-if="$store.state[module].chooseNum == 1" :chooseNum="$store.state[module].chooseNum" :jump-news-detail="jumpNewsDetail"></txt-comment-list>
    <txt-comment-list :list-data="$store.state[module].commentData" listBoxStyle="margin-bottom:0;" :from-label="true" v-if="$store.state[module].chooseNum == 2" :chooseNum="$store.state[module].chooseNum" titleStyle="font-weight:400;" contentStyle="color:#999;" :jump-news-detail="jumpNewsDetail"></txt-comment-list>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header'
  import TxtUser from './../components/txt-user'
  import TxtText from './../components/txt-text'
  import TxtFriendTab from './../components/txt-friend-tab'
  import TxtNewsList from './../components/txt-news-list'
  import TxtCommentList from './../components/txt-comment-list'
  import {USER_FRIEND_TAB,NEWS_DETAIL,USER_USERINFOR,USER_OTHER_USERINFOR,USER_OTHER_PAGE,NEWS_FOLLOW,} from './../store/types'
  export default {
    components:{
      TxtHeader,
      TxtUser,
      TxtText,
      TxtFriendTab,
      TxtNewsList,
      TxtCommentList
    },
    methods:{
      /* 切换文章、收藏、评论 */
      jumpUser(index){
        this.$store.dispatch(this.modulePath + USER_FRIEND_TAB, {'index':index});
      },
      /* 跳转详情 */
      jumpNewsDetail(event){
        this.$store.commit(this.modulePath + NEWS_DETAIL,event)
      },
      /* 关注、取关 */
      followUser(event){
        this.$store.commit(this.modulePath + NEWS_FOLLOW,event)
      },
    },
    beforeRouteEnter (to,from,next){
      next(vm=>{
        console.log(from.name)
        if(from.name === 'index' || from.name == null){
          vm.$store.commit(vm.modulePath + USER_USERINFOR)
          vm.$store.dispatch(vm.modulePath + USER_FRIEND_TAB, vm.$route.query);
        }else{
          vm.$store.commit(vm.modulePath + USER_OTHER_USERINFOR)
          vm.$store.dispatch(vm.modulePath + USER_OTHER_PAGE, vm.$route.query);
        }
      })
    },
    created(){
    }
  }
</script>
<style scoped>
  .newsBox{
    background: #fff;
  }
</style>
