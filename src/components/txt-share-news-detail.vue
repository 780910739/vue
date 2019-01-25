<template>
  <div class="shareBox w_h_100" @click="closeShare">
    <div class="share">
      <div class="lineBox flex row item_ct justify_ct">
        <span class="line"></span>
        <span class="lineWord">分享</span>
        <span class="line"></span>
      </div>
      <div class="shareBottom justify_ct item_ct flex">
        <txt-data :menu-list="$store.state['index'].menuList" :jump-user="jumpUser" top-type="icon" content-style="color:#999;" listStyle="padding:1rem 0;"></txt-data>
      </div>
    </div>
  </div>
</template>
<script>
  import TxtData from './../components/txt-data'
  export default {
    components:{
      TxtData
    },
    props:{
      closeShare:{
        type:Function,
        default(){

        }
      }
    },
    methods:{
      jumpUser(event){
        console.log(event);
      }
    }
  }
</script>
<style scoped>
  .shareBox{
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.4);
    z-index:999;
  }
  .share{
    z-index:999;
    background: #fff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
  }
  .lineBox{
    padding:1.6rem 0 1rem;
  }
  .line{
    width: 20%;
    height: 1px;
    background: #eee;
  }
  .lineWord{
    color:#999;
    padding:0 0.8rem;
  }
  .shareBottom{
    padding:0 4%;
  }
</style>
