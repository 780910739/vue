<template>
  <div class="navBox" v-if="bannerList.length>0">
    <div class="navPicBox border_radius">
      <mt-swipe  :auto="3000" :show-indicators="false"  @change="handleChange">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="item.id || index">
          <div @click="jump(item.id)" class="d-i w_h_100 border_radius">
            <img :src="item.pic" alt="" class="bannerPic b-i w_h_100">
            <div class="bannerTitle">
              {{item.title}}
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="pointBox flex row justify_ct item_ct">
      <span class="point" v-for="(item,index) in bannerList" :key="item.id || index" :class="chooseIndex===index?'active':''"></span>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    data(){
      return {
        chooseIndex:0,
        bannerList: this.bannerListData
      }
    },
    watch:{
      bannerListData(data){
        this.bannerList = data;
      }
    },
    props:{
      bannerListData:{
        type:Array,
        default(){
          return [];
        }
      },
      newsDetail:{
        type:Function,
        default:function(){

        }
      }
    },
    methods:{
      jump:function(event){
        this.newsDetail(event);
      },
      handleChange(index){
        this.chooseIndex = index;
      }
    }
  }
</script>
<style scoped>
  .navBox{
    height: 16rem;
    margin-left:4%;
    padding-right:4%;
    padding-top:calc(2.4rem + 4%);
    background: linear-gradient(to bottom,#fff 99.2%,#e3e3e3 99.2%,#e3e3e3) no-repeat;
  }
  .navPicBox{
    height: 14rem;
  }
  .bannerTitle{
    text-align:left;
    position: absolute;
    width: 80%;
    bottom:5%;
    left:10%;
    font-size: 1.2rem;
    color: #FFF;
    text-shadow: 0 2px 4px rgba(0,0,0,0.30);
    overflow: hidden;
    text-overflow: ellipsis;
    /*设置成弹性盒子 */
    display: -webkit-box;
    /*显示的个数 */
    -webkit-line-clamp: 2;
    /* 属性规定框的子元素应该被水平或垂直排列。 */
    -webkit-box-orient: vertical;
  }
  .pointBox{
    height: 2rem;
  }
  .point{
    margin:0 1px;
    width:5px;
    height: 5px;
    border-radius:50%;
    background: #D6D9DB;
  }
  img,.border_radius{
    border-radius:5px;
  }
  .active{
    width: 10px;
    background: #646667;
    border-radius: 100px;
  }
</style>
