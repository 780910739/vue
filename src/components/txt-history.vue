<template>
  <div>
    <div class="history">
      <div class="flex row justify_bt labelBox" v-if="!fromDetail">
        <div class="label" v-if="keySearch">历史搜索</div>
        <div class="label" v-else>热门搜索</div>
        <div class="function" v-if="keySearch" @click="deleteSearch">删除历史搜索</div>
      </div>
      <div class="list t_l">
        <div class="b_i" @click="jump(item.id)" v-for="(item,index) in list" :key="item.id || index" :style="listStyleData">{{item.keyWord}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:this.keyWords
      }
    },
    watch:{
      keyWords(data){
        this.list = data
      }
    },
    methods:{
      jump(event){
        this.jumpNews(event)
      }
    },
    props:{
      jumpNews:{
        type:Function,
        default:function(){

        }
      },
      deleteSearch:{
        type:Function,
        default:function(){

        }
      },
      deleteSearch:{
        type:Function,
        default:function(){

        }
      },
      keyWords:{
        type:Array,
        default(){
          return []
        }
      },
      keySearch:{
        type:Boolean,
        default:false
      },
      fromDetail:{
        type:Boolean,
        default:false
      },
      listStyleData:{
        type:String,
        default:''
      }
    }
  }
</script>
<style scoped>
  .labelBox{
    padding:0.4rem 4%;
  }
  .label{
    color:#333;
    font-weight:700;
    font-size: 1.2rem;
  }
  .function{
    color:#bbb;
  }
  .list{
    padding:0.6rem 4%;
  }
  .list > div{
    margin: 0.4rem;
    margin-left:0;
    padding:0.2rem 0.6rem;
    background: #F5F5F5;
    border-radius: 100px;
    color:#333;
  }
</style>
