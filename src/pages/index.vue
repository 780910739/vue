<template>
  <div class="w_h_100">
    <txt-share-index v-if="$store.state[module].share" :other-close="shareNews" :wechat-list="$store.state[module].wechatList" :share-data="$store.state[module].shareData"></txt-share-index>
    <div v-if="$store.state[module].activatedIndex===0 || $store.state[module].activatedIndex == undefined" :class="$store.state[module].fixed?'fixed':''">
      <div class="information">
        <txt-search :search="searchPage"></txt-search>
        <txt-text txtLeftText="快讯" :txt-right-text="currentTime" textStyle="margin:0 4%;" leftStyle="font-size:1.8rem;color:#fff;" :right-style="rightStyle"></txt-text>
      </div>
      <div class="informationBox border-box">
        <txt-infor :infor-list-data="$store.state[module].newsFlash" :share-news="shareNews" :love-news="loveNews" :jump-detail="jumpNewsDetail"></txt-infor>
      </div>
    </div>
    <div v-if="$store.state[module].activatedIndex===1" class="findBox">
      <txt-nav :nav-list-data="$store.state[module].navList" :search="searchPage" :choose-list-num="$store.state[module].chooseIndex" :choose-nav="choose"></txt-nav>
      <txt-banner :banner-list-data="$store.state[module].newsData.bannerList" :news-detail="jumpNewsDetail"></txt-banner>

      <div class="mui-table-view loadmore" v-infinite-scroll="loadMore" :infinite-scroll-disabled="$store.state[module].loading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
      <txt-news-list :list-data="$store.state[module].newsData.newsList" :news-detail="jumpNewsDetail" :load-top-data="loadTopData" :load-more-data="loadMore" :loading="$store.state[module].loading" :queryLoading="$store.state[module].queryLoading" :allLoaded="$store.state[module].allLoaded"></txt-news-list>
      </div>
    </div>
    <div v-if="$store.state[module].activatedIndex===2" class="userBox border-box h_100" :class="$store.state[module].fixedMy?'fixed':''">
      <div class="userInfor">
        <txt-user :infor-data="$store.state[module].userInfor" :jump-user="jumpAuthor"></txt-user>
        <txt-data :infor-data="$store.state[module].userInfor" :jump-user="jumpUser"></txt-data>
      </div>
      <txt-operation :user-list-data="$store.state[module].userHave" :jump-user="jumpUserHave"></txt-operation>
      <txt-operation :user-list-data="$store.state[module].userOperation" :jump-user="jumpUserOperation"></txt-operation>
      <txt-button btnText="退出登录" btnStyle="background:#fff;color:#363535;" btnBoxStyle="margin-bottom:5rem;" :btn-click="quit"></txt-button>
    </div>
    <txt-share-news-detail v-if="$store.state[module].shareMy" :close-share="shareNewsDetail"></txt-share-news-detail>
    <txt-footer :change="tabChange" :activated-index="$store.state[module].activatedIndex"></txt-footer>
  </div>
</template>
<script>
  import TxtSearch from './../components/txt-search'
  import TxtText from './../components/txt-text'
  import TxtInfor from './../components/txt-infor'
  import TxtNav from './../components/txt-nav'
  import TxtBanner from './../components/txt-banner'
  import TxtNewsList from './../components/txt-news-list'
  import TxtUser from '../components/txt-user'
  import TxtData from './../components/txt-data'
  import TxtOperation from './../components/txt-operation'
  import TxtButton from './../components/txt-button'
  import TxtShareIndex from './../components/txt-share-index'
  import TxtShareNewsDetail from './../components/txt-share-news-detail'
  import TxtFooter from './../components/txt-footer'
  import {MENU_NUM,USER_FOLLOW_FANS_COMMENT,USER_HAVE,USER_OPERATION,USER_AUTHOR,SEARCH_NEWS,SHARE_NEWS,COLLECTION_NEWS,NEWS_DETAIL,SHARE_NEWS_DETAIL,MORE_NEWS_DATA,CHOOSE_NAV_MENU,QUIT_ACCOUNT_NUMBER} from './../store/types'
  import {Tools} from './../utils/js/tool'
  import { MessageBox } from 'mint-ui';
  export default {
    components:{
      TxtSearch,
      TxtText,
      TxtInfor,
      TxtNav,
      TxtBanner,
      TxtNewsList,
      TxtOperation,
      TxtUser,
      TxtData,
      TxtButton,
      TxtShareIndex,
      TxtShareNewsDetail,
      TxtFooter,
      MessageBox
    },
    data(){
      return {
        currentTime:Tools.data.date.getCurrentDate(),
        rightStyle:'color:#fff;display:flex;justify-content:flex-end;align-items: flex-end;'
      }
    },
    created(){
      this.$store.dispatch(this.modulePath + MENU_NUM,this.$route.params.index)
    },
    methods:{
      /* 快讯分享 */
      shareNews(event){
        this.$store.commit(this.modulePath + SHARE_NEWS,event)
      },
      /* 收藏 */
      loveNews(event){
        this.$store.commit(this.modulePath + COLLECTION_NEWS,event)
      },
      /* 切换导航 */
      choose(id,index){
        let parameter = {'id':id,'index':index}
        this.$store.dispatch(this.modulePath + CHOOSE_NAV_MENU,parameter)
      },
      /* 上拉刷新 */
      loadTopData(){
        this.$store.dispatch(this.modulePath + MORE_NEWS_DATA,1)
      },
      /* 滚动刷新 */
      loadMore(){
        this.$store.dispatch(this.modulePath + MORE_NEWS_DATA,2)
      },
      /* 跳转详情 */
      jumpNewsDetail(event){
        this.$store.commit(this.modulePath + NEWS_DETAIL,event)
      },
      /* 底部菜单切换 */
      tabChange:function(index){
        this.$store.dispatch(this.modulePath + MENU_NUM, index)
      },
      /* 搜索 */
      searchPage:function(index){
        this.$store.commit(this.modulePath + SEARCH_NEWS, index)
      },
      /* 我的分享 */
      shareNewsDetail(){
        this.$store.commit(this.modulePath + SHARE_NEWS_DETAIL)
      },
      /* 跳转关注人页面*/
      jumpAuthor:function(id){
        this.$store.commit(this.modulePath + USER_AUTHOR, id)
      },
      /* 跳转 关注、粉丝、评论 */
      jumpUser:function(index){
        this.$store.commit(this.modulePath + USER_FOLLOW_FANS_COMMENT, index)
      },
      /* 跳转 我的文章、消息、收藏 */
      jumpUserHave:function(index){
        this.$store.commit(this.modulePath + USER_HAVE, index)
      },
      /* 跳转 分享、消息设置、意见反馈 */
      jumpUserOperation:function(index){
        this.$store.commit(this.modulePath + USER_OPERATION, index)
      },
      /* 退出登录 */
      quit(){
        this.$store.commit(this.modulePath + QUIT_ACCOUNT_NUMBER,MessageBox)
      }
    }
  }
</script>
<style scoped>
  .information{
    background: #302F2F;
    padding-bottom:2rem;
  }
  .informationBox{
    background: #FFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.10);
    border-radius: 2px;
    width: 92%;
    padding:0.8rem;
    margin:-1.2rem 4% 5.4rem;
  }
  .findBox{
    background: #fff;
  }
  .userBox{
    background: #D8D8D8;
    overflow: hidden;
  }
  .userInfor{
    overflow: hidden;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.10);
    margin:4%;
    padding:0.8rem 0;
  }
  .loadmore{
    margin-bottom:4rem;
  }
</style>
