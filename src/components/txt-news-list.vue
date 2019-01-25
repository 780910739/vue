<template>
  <div class="listBox" :style="listBoxStyle">
    <div class="flex row newsBox justify_bt" v-for="(item,index) in list" :key="item.id || index" @click="jump(item.id)">
            <div class="contentBox border-box ">
              <div class="contentTitle pd_tb">
                {{item.title}}
              </div>
              <div class="justify_st flex row pd_tb labelBox">
                <div class="b-i label" v-if="item.label">
                  {{item.label}}
                </div>
              </div>
              <div class="contentOther flex row justify_bt pd_tb">
                <div class="other author">
                  {{item.author}}
                  <span v-if="fromLabel">{{item.time}}</span>
                </div>
                <div class="other time" v-if="!fromLabel">
                  {{item.time}}
                </div>
                <div class="other see" v-if="fromLabel && !searchFrom">
                  <img src="./../assets/see.png" alt="" class="seeIcon">
                  {{item.see}}
                </div>
              </div>
            </div>
            <div class="picBox border-box flex row justify_ct item_ct">
              <img :src="item.pic" alt="" class="b-i">
            </div>
          </div>
    <li class="more_loading flex row justify_ct item_ct" v-show="!queryLoading">
      <mt-spinner type="snake" color="#00ccff" :size="20" v-show="loading&&!allLoaded"  style="padding:0.4rem 0;"></mt-spinner>
      <span v-show="allLoaded">已全部加载</span>
    </li>
  </div>
</template>
<script>
  import { InfiniteScroll } from 'mint-ui';
  export default {
    directives: {
      InfiniteScroll
    },
    data(){
      return {
        list:this.listData,
      }
    },
    watch:{
      listData(newVal){
        this.list = newVal;
      }
    },
    props:{
      listData:{
        type:Array,
        default(){
          return [];
        }
      },
      fromLabel:{
        type:Boolean,
        default:false
      },
      loading:{
        type:Boolean,
        default:false
      },
      allLoaded:{
        type:Boolean,
        default:false
      },
      queryLoading:{
        type:Boolean,
        default:false
      },
      searchFrom:{
        type:Boolean,
        default:false
      },
      listBoxStyle:{
        type:String,
        default:''
      },
      newsDetail:{
        type:Function,
        default:function(){

        }
      },
    },
    methods:{
      jump:function(event){
        this.newsDetail(event)
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
  }
  .contentBox{
    flex:1;
  }
  .contentTitle{
    height: 3.2rem;
    font-size: 1.2rem;
    color: #141414;
    font-weight: 900;
    text-align: left;
  }
  .labelBox{
    height:1.2rem;
  }
  .label{
    height:1.2rem;
    line-height: 1.2rem;
    border: 1px solid #DDD;
    border-radius: 2px;
    padding:0 0.3rem;
  }
  .other{
    font-size:1rem;
    color: #999;
  }
  .pd_tb{
    padding:0.2rem 0;
  }
  .picBox{
    margin:0.4rem;
  }
  .picBox > img{
    width: 6.4rem;
    height: 6.4rem;
    border-radius:5px;
  }
  .seeIcon{
    width: 1.2rem;
  }
</style>
