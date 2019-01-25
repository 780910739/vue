<template>
  <div class="w_h_100 shareBox" @click="otherClose">
    <div class="shareIndex flex column">
      <div class="shareTop w_100 flex column">
        <div class="shareTopPic w_100">
          <img src="./../assets/shareTop.png" alt="" class="w_100">
        </div>
        <div class="shareContent border-box flex column">
          <div class="time t_l">
            {{list[0].time}}
          </div>
          <div class="title t_l">
            {{list[0].title}}
          </div>
          <div class="content t_l">
            {{list[0].content}}
          </div>
          <div class="erweima flex row justify_ad item_ct">
            <div class="erweimaPic">
              <img :src="list[0].shareErWeiMa" alt="">
            </div>
            <div class="erweimaAbout t_l">
              <p>分享来自五六财经</p>
              <p>每天一分钟，读懂{{list[0].typeName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shareBottom justify_ct item_ct flex">
        <txt-data :menu-list="wechatList" :jump-user="jumpUser" top-type="icon" content-style="color:#999;"></txt-data>
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
    data(){
      return {
        list:this.shareData
      }
    },
    watch:{
      shareData(data){
        console.log(data);
        this.list = data
      }
    },
    props:{
      shareData:{
        type:Array,
        default(){
          return []
        }
      },
      wechatList:{
        type:Array,
        default(){
          return []
        }
      },
      otherClose:{
        type:Function,
        default:function(){

        }
      }
    },
    methods:{
      jumpUser(index){
        console.log(index);
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
  .shareIndex{
    position: absolute;
    width: 85%;
    height: 75%;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #F2F2F2;
    border-radius:10px;
  }
  .shareTop{
    flex:3;
  }
  .shareBottom{
    flex:1;
    padding:0 4%;
  }
  .shareContent{
    margin:-15% auto 0;
    width: 90%;
    background: #fff;
    border-radius:10px;
    flex:1;
    padding:0.4rem 0.8rem;
  }
  .time{
    color:#bbb;
    padding:2% 0;
  }
  .title{
    font-weight:900;
    font-size: 1.4rem;
    color:#222;
    margin-bottom:2%;
  }
  .content{
    line-height: 1.6;
    margin:auto;
    overflow: hidden;
    text-overflow: ellipsis;
    /*设置成弹性盒子 */
    display: -webkit-box;
    /*显示的个数 */
    -webkit-line-clamp: 5;
    /* 属性规定框的子元素应该被水平或垂直排列。 */
    -webkit-box-orient: vertical;
  }
  .erweima{
    padding:2% 5%;
  }
  .erweimaPic > img{
    width: 4rem;
  }
  .erweimaAbout > p{
    line-height: 1.8;
  }
</style>
