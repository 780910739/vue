<template>
  <div class="flex row justify_ad item_ct friend">
    <div class="box" v-for="(item,index) in list" :key="index"  @click="tabUser(index)">
      <p class="flex row justify_ct item_ct loginType" :class="chooseNum===index?'active':''">{{item.content}}&nbsp;{{listNumber[index]}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      tabUser(event){
        this.jumpUser(event)
      }
    },
    data(){
      return {
        list:this.menuList
      }
    },
    watch:{
      menuList(data){
        this.list = data;
      }
    },
    props:{
      chooseNum:{
        type:Number,
        default:0
      },
      listNumber:{
        type:Array,
        default(){
          return []
        }
      },
      userListData:{
        type:Array,
        default(){
          return []
        }
      },
      menuList:{
        type:Array,
        default(){
          return [
            {content:'关注'},
            {content:'粉丝'},
          ]
        }
      },
      jumpUser:{
        type:Function,
        default:function(){

        }
      },
    }
  }
</script>
<style scoped>
  .friend{
    background: #F8F8F8;
  }
  .loginType{
    height: 3rem;
    padding:0 0.8rem;
    color:#666;
    font-size: 0.8rem;
  }
  .active{
    height: calc(3rem - 2px);
    color:#333;
    margin-top:-2px;
    border-bottom:2px solid #4889DB;
  }
</style>
