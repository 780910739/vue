<template>
  <div class="listBox border-box" :style="listBoxStyle">
    <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
      <ul :v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="30">
        <div class="newsBox" v-for="(item,index) in list" :key="item.id || index" @click="jump(item.id)">
        <div class="time t_l border-box">
          <span v-if="chooseNumber !== 2 && !fromDetail">{{item.type}}</span>
          <span v-else-if="!fromDetail">评论时间</span>
          <span v-if="chooseNumber !== 2 && !fromDetail">{{item.time}}</span>
          <span v-else-if="!fromDetail">{{item.commentTime}}</span>
          <txt-user :infor-data="item" :jump-user="jumpAuthor" pic-style="width:2rem;height:2rem;" infor-box-style="margin-right:4%;" name-style="color:#666;font-weight:400;font-size:1rem;margin-left:0.4rem;" :detail-from-news="true" v-if="fromDetail"></txt-user>
        </div>
        <div class="title t_l border-box" :style="titleStyle"  v-if="chooseNumber !== 2 && !fromDetail">
          {{item.title}}
        </div>
        <div class="title t_l border-box" :style="titleStyle" v-else-if="!fromDetail">
          {{item.comment}}
        </div>
        <div class="content t_l border-box" :style="contentStyle"  v-if="chooseNumber !== 2 && !fromDetail">
          {{item.content}}
        </div>
        <div class="content t_l border-box" :style="contentStyle" v-else-if="!fromDetail">
          <<{{item.newsName}}>>
        </div>
        <div class="content t_l border-box" :style="contentStyle"  v-if="fromDetail">
          {{item.content}}
        </div>
      </div>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
  import TxtUser from './txt-user'
  import { Loadmore,InfiniteScroll } from 'mint-ui';
  export default {
    directives: {
      InfiniteScroll
    },
    components:{
      TxtUser,Loadmore
    },
    data(){
      return {
        list:this.listData,
        allLoaded:false,
        chooseNumber:this.chooseNum
      }
    },
    watch:{
      listData(newVal){
        this.list = newVal;
      },
      chooseNum(newVal){
        this.chooseNumber = newVal;
      }
    },
    props:{
      listData:{
        type:Array,
        default(){
          return [];
        }
      },
      titleStyle:{
        type:String,
        default:''
      },
      contentStyle:{
        type:String,
        default:''
      },
      listBoxStyle:{
        type:String,
        default:''
      },
      chooseNum:{
        type:Number,
        default:1
      },
      fromDetail:{
        type:Boolean,
        default:false
      },
      loading:{
        type:Boolean,
        default:false
      },
      jumpNewsDetail:{
        type:Function,
        default(){

        }
      },
      loadTopData:{
        type:Function,
        default(){

        }
      },
      loadMoreData:{
        type:Function,
        default(){

        }
      }
    },
    methods:{
      jumpAuthor(id){
        this.$router.push({name:'userNews',params:{'id':id}})
      },
      jump:function(id){
        this.jumpNewsDetail(id)
      },
      loadTop: function () { //组件提供的下拉触发方法
        this.loadTopData();
        this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
      },
      // 滚动加载
      loadMore:function(){
        this.loadMoreData();
      },
    }
  }
</script>
<style scoped>
  .listBox{
    overflow-y: auto;
    margin-bottom:4rem;
  }
  .newsBox{
    margin-left:4%;
    background: linear-gradient(to bottom,#fff 99%,#e3e3e3 99%,#e3e3e3) no-repeat;
    padding:0.6rem 0;
  }
  .time{
    color:#3F3F3F;
  }
  .title{
    color:#222;
    font-weight:700;
    font-size: 1.4rem;
    padding: 0.4rem 0;
  }
  .content{
    padding-right:4%;
    color:#666;
  }
</style>
