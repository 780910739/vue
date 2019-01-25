<template>
  <div class="menuBox">
    <div class="flex row">
      <div class="navMenu flex row justify_st item_ct">
        <div class="menuList" v-for="(item,index) in menuList" :key="item.id || index" :class="chooseListNum===index?'active':''" @click="choose(item.id,index)">
          {{item.navName}}
        </div>
      </div>
      <div class="search flex row justify_ct item_ct" @click="search">
        <img src="./../assets/search.png" alt="" class="d-i">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        menuList:this.navListData
      }
    },
    watch:{
      navListData(data){
        this.menuList = data;
      }
    },
    props:{
      chooseListNum:{
        type:Number,
        default:0
      },
      navListData:{
        type:Array,
        default(){
          return [];
        }
      },
      search:{
        type:Function,
        default:function(){

        }
      },
      chooseNav:{
        type:Function,
        default:function(){

        }
      },
    },
    methods:{
      choose(id,index){
        this.chooseNav(id,index)
      }
    }
  }
</script>
<style scoped>
  .menuBox{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    z-index:999;
    background: #fff;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .menuBox::-webkit-scrollbar {
    display: none;
  }
  .navMenu{
    flex:1;
    margin-left:4%;
    padding-right:4rem;
  }
  .menuList{
    margin:0 0.4rem;
    height: 2.4rem;
    line-height: 2.4rem;
    width: 4rem;
    color:#333;
  }
  .navMenu .active{
    color:#363535;
    font-weight:700;
    border-bottom:2px solid #FFC400;
  }
  .search{
    position: absolute;
    right:0;
    top:0;
    width: 4rem;
    height: 2.4rem;
    background: #fff;
  }
  .search > img{
    width: 40%;
  }
</style>
