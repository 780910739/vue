<template>
  <div class="border-box">
    <div class="contentBox" v-for="(item,index) in inforList" :key="item.id || index" @click="jump(item.id)">
      <div class="pointInfor"></div>
      <div class="inforTime flex row justify_st">
        {{item.time}}
      </div>
      <div class="inforConent">
        <div class="contentTitle t_l">
          {{item.title}}
        </div>
        <div class="content t_l">
          {{item.content}}
        </div>
      </div>
      <div class="inforShare flex row justify_ed item_ct">
        <img :src="shareSrc" alt="" class="share" @click="share" :indexNum="item.id">
        <img :src="loveSrc" alt="" class="love" @click="love" :indexNum="item.id" v-if="!item.collection">
        <img :src="loveSrcEd" alt="" class="love" @click="love" :indexNum="item.id" v-else>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        inforList:this.inforListData
      }
    },
    watch:{
      inforListData(data){
        this.inforList = data;
      }
    },
    methods:{
      jump(event){
        this.jumpDetail(event)
      },
      share(e){
        e.stopPropagation()
        this.shareNews(e.path[0].attributes.indexNum.value)
      },
      love(e){
        e.stopPropagation()
        this.loveNews(e.path[0].attributes.indexNum.value)
      }
    },
    props: {
      inforListData: {
        type: Array,
        default() {
          return [];
        }
      },
      shareSrc: {
        type: String,
        default:require('./../assets/share.png')
      },
      loveSrc: {
        type: String,
        default:require('./../assets/love.png')
      },
      loveSrcEd: {
        type: String,
        default:require('./../assets/love2.png')
      },
      jumpDetail: {
        type: Function,
        default:function(){

        }
      },
      shareNews: {
        type: Function,
        default:function(){

        }
      },
      loveNews: {
        type: Function,
        default:function(){

        }
      },
    }
  }
</script>
<style scoped>
  .contentBox{
    position: relative;
    padding:0 0.4rem;
    border-left:2px solid #eee;
  }
  .pointInfor{
    position: absolute;
    left: -4px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FFC400;
  }
  .inforTime{
    color:#999;
  }
  .inforConent{
    padding:0.4rem 0;
  }
  .contentTitle{
    color:#222;
    font-size: 1.4rem;
    font-weight:900;
  }
  .content{
    color:#666;
    font-size: 1rem;
  }
  .inforShare{
    padding:0.2rem 0;
  }
  .share{
    margin-right:1.4rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  .love{
    width: 1.4rem;
    height: 1.4rem;
  }
</style>
