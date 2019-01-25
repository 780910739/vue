<template>
  <div class="detailBox" :class="$store.state[module].fixed?'fixedDetail':''">
    <txt-header headerRightType="icon" :header-right-src="rightIcon" :header-right-click="shareNewsDetail"></txt-header>
    <txt-text :txt-text="$store.state[module].news.title" :text-style="textStyle"></txt-text>
    <txt-user :infor-data="$store.state[module].news.publisher" :jump-user="jumpAuthor" pic-style="width:2rem;height:2rem;" infor-box-style="margin:0 4%;" name-style="color:#666;font-weight:400;font-size:1rem;margin-left:0.4rem;" :detail-from-news="true" :detail-from-news-author="true"></txt-user>
    <txt-line lineStyle="margin-top:2rem;"></txt-line>
    <txt-text txtText="" text-style="color:#333;width:70%;margin:auto;"></txt-text>
    <txt-content></txt-content>
    <txt-history :from-detail="true" :key-words="$store.state[module].news.labelList" list-style-data="color:#bbb;background:#fff;border: 1px solid #BBBBBB;" :jump-news="jumpLabels"></txt-history>
    <txt-user :infor-data="$store.state[module].news.recommender" :jump-user="jumpAuthor" :no-author="true" :from-author="$store.state[module].follow" :follow-user="followUser"></txt-user>
    <txt-line lineStyle="margin-top:1rem;" weightStyle="top:-2px;"></txt-line>
    <txt-text txtLeftText="热门文章" leftStyle="color:#222;font-weight:900;font-size:1.4rem;"></txt-text>
    <div class="recommend border-box">
      <txt-news-recommend :jump-news="jumpNews" :hot-news="$store.state[module].news.hotNews"></txt-news-recommend>
    </div>
    <txt-text txtLeftText="评论" leftStyle="color:#222;font-weight:900;font-size:1.4rem;"></txt-text>
    <txt-comment-list :list-data="$store.state[module].news.comment" :from-detail="true" :detail-from-news="false":detail-from-news-author="true" list-box-style="margin-bottom:1.6rem;":load-top-data="loadTopData" :load-more-data="loadMore" :loading="false"></txt-comment-list>
    <txt-comment :input="inputComment" :send-comment="sendComment" :collectionSrc="$store.state[module].collection" :collection="collection" :default-value="$store.state[module].comment"></txt-comment>
    <txt-share-news-detail v-if="$store.state[module].share" :close-share="shareNewsDetail"></txt-share-news-detail>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header'
  import TxtText from './../components/txt-text'
  import TxtUser from './../components/txt-user'
  import TxtLine from './../components/txt-line'
  import TxtContent from './../components/txt-content'
  import TxtHistory from './../components/txt-history'
  import TxtNewsRecommend from './../components/txt-news-recommend'
  import TxtCommentList from './../components/txt-comment-list'
  import TxtComment from './../components/txt-comment'
  import TxtShareNewsDetail from './../components/txt-share-news-detail'
  import {GET_NEWS_ID,SHARE_NEWS_DETAIL,JUMP_MAN_PAGE,NEWS_DETAIL,JUMP_LABEL_PAGE,USER_FOLLOW,SHARE_MY,NEWS_DETAIL_COLLECTION,SEND_NEWS_DETAIL_COMMENT,GET_NEWS_DETAIL_COMMENT} from './../store/types'
  export default {
    components:{
      TxtHeader,
      TxtText,
      TxtUser,
      TxtLine,
      TxtContent,
      TxtHistory,
      TxtNewsRecommend,
      TxtCommentList,
      TxtComment,
      TxtShareNewsDetail
    },
    data(){
      return {
        textStyle:'font-weight:900;color:#222;font-size:1.4rem;margin:0 4%;',
        rightIcon:require('./../assets/share.png'),
      }
    },
    created(){
      this.$store.dispatch(this.modulePath + GET_NEWS_ID,this.$route.query.id)
      this.$store.commit(this.modulePath + SHARE_MY)
    },
    methods:{
      /* 分享 */
      shareNewsDetail(){
        this.$store.commit(this.modulePath + SHARE_NEWS_DETAIL)
      },
      /* 跳转人物主页 */
      jumpAuthor(id){
        this.$store.commit(this.modulePath + JUMP_MAN_PAGE,id)
      },
      /* 跳转标签页 */
      jumpLabels(id){
        this.$store.commit(this.modulePath + JUMP_LABEL_PAGE,id)
      },
      /* 跳转热门文章 */
      jumpNews(id){
        this.$store.commit('index/' + NEWS_DETAIL,id)
      },
      /* 关注/取消关注 */
      followUser(id){
        this.$store.dispatch(this.modulePath + USER_FOLLOW, id);
      },
      /* 评论 */
      inputComment(comment){
        this.$store.commit(this.modulePath + GET_NEWS_DETAIL_COMMENT,comment)
      },
      /* 发送评论 */
      sendComment(){
        this.$store.commit(this.modulePath + SEND_NEWS_DETAIL_COMMENT)
      },
      /* 收藏 */
      collection(){
        this.$store.commit(this.modulePath + NEWS_DETAIL_COLLECTION)
      },
      /* 上拉刷新 */
      loadTopData(){
        console.log('下拉刷新')
      },
      /* 滚动刷新 */
      loadMore(){
        console.log('滚动刷新')
      },

    }
  }
</script>
<style scoped>
  .detailBox{
    padding-bottom:2rem;
    background: #fff;
  }
  .recommend{
    margin-left:4%;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .recommend::-webkit-scrollbar {
    display: none;
  }
  .fixedDetail{
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
