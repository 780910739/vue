<template>
  <div class="flex row">
    <div class="flex row justify_st item_ct recommend">
      <div class="recommendBox b_i" @click="jump(item.id)" v-for="(item,index) in hotNews" :key="item.id || index">
        <div class="recommendPic">
          <img :src="item.pic" alt="">
        </div>
        <div class="recommendAbout contentTitle t_l" style="-webkit-box-orient: vertical;">
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      jump(event){
        this.jumpNews(event)
      }
    },
    props:{
      hotNews:{
        type:Array,
        default(){
          return [];
        }
      },
      jumpNews:{
        type:Function,
        default:function(){

        }
      }
    }
  }
</script>
<style scoped>
  .recommend{
    flex:1;
    padding-right:4%;
  }
  .recommendBox{
    width: 10rem;
  }
  .recommendPic > img{
    width: 90%;
    height: 10rem;
    margin:auto;
  }
  .recommendAbout{
    width: 90%;
    margin:auto;
  }
</style>
