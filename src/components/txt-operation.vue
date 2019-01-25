<template>
  <div class="noticeBox">
    <div class="operationBox">
      <div class="operationList flex row justify_bt item_ct" v-for="(item,index) in list" :key="item.id || index" @click="jump(index)">
        <div class="operationTitle">{{item.label}}</div>
        <div class="operationIcon flex row justify_bt item_ct">
          <span class="notice" v-if="item.notice > 0">{{item.notice}}</span>
          <img :src="icon" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:this.userListData
      }
    },
    watch:{
      userListData(data){
        this.list = data;
      }
    },
    props:{
      userListData:{
        type:Array,
        default(){
          return [];
        }
      },
      icon:{
        type:String,
        default:require('./../assets/next.png')
      },
      jumpUser:{
        type:Function,
        default:function(){

        }
      }
    },
    methods:{
      jump(event){
        this.jumpUser(event);
      }
    }
  }
</script>
<style scoped>
  .noticeBox{
    margin:1.2rem 0;
  }
  .operationBox{
    overflow: hidden;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.10);
    margin:0 4%;
  }
  .operationList{
    padding:0.6rem 0;
    border: 1px solid #F2F2F2;
  }
  .operationTitle{
    padding:0 0.4rem;
  }
  .operationIcon{
    height: 2rem;
  }
  .operationIcon > img{
    width: 1.6rem;
    margin-right:0.4rem;
  }
  .notice{
    color:#fff;
    background: #F5603A;
    border-radius:50%;
    width: 1.4rem;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 1rem;
  }
</style>
