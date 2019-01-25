<template>
  <div class="flex row" :style="listStyle">
    <div class="box" v-for="(item,index) in menuList" :key="index" @click="jump" :indexId="index">
      <div>
        <div class="flex row justify_ct item_ct num" v-if="index === 0 && topType == ''">
          {{list.followMan}}
        </div>
        <div class="flex row justify_ct item_ct num" v-if="index === 1 && topType == ''">
          {{list.fans}}
        </div>
        <div class="flex row justify_ct item_ct num" v-if="index === 2 && topType == ''">
          {{list.comment}}
        </div>
        <div class="flex row justify_ct item_ct iconSrc" v-if="topType=='icon'">
          <img :src="item.iconSrc" alt="">
        </div>
        <p class="flex row justify_ct item_ct loginType" :style="contentStyle">
          {{item.content}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  // import
  export default {
    data(){
      return {
        list:this.inforData
      }
    },
    watch:{
      inforData(data){
        this.list = data;
      }
    },
    methods: {
      jump(e){
        e.stopPropagation()
        this.jumpUser(e.path[2].attributes['indexId'].value)
      }
    },
    props:{
      topType:{
        type:String,
        default:''
      },
      contentStyle:{
        type:String,
        default:''
      },
      listStyle:{
        type:String,
        default:''
      },
      inforData:{
        type:Object,
        default(){
          return {};
        }
      },
      menuList:{
        type:Array,
        default(){
          return [
            {'num':12,content:'关注'},
            {'num':12,content:'粉丝'},
            {'num':12,content:'评论'}
          ]
        }
      },
      jumpUser:{
        type:Function,
        default:function(){

        }
      }
    }
  }
</script>
<style scoped>
  .box{
    width: 33.33%;
  }
  .num{
    height: 2rem;
    line-height: 2rem;
  }
  .loginType{
    color:#333;
    font-size: 0.8rem;
  }
  .iconSrc > img{
    width: 60%;
    margin-bottom:0.6rem;
  }
</style>
