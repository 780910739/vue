<template>
  <div class="flex row justify_ad item_ct inforBox" @click="jump(list.id)" :style="inforBoxStyle">
    <div class="inforPic flex row justify_ct item_ct" :style="picStyle">
      <img :src="list.pic" alt="">
    </div>
    <div class="inforContent">
      <div class="userName flex row justify_st item_ct" :style="nameStyle">
        {{list.userName}}
        <div v-if="detailFromNews && detailFromNewsAuthor" class="newsTime">
          {{list.time}}
        </div>
      </div>
      <div class="userSkill contentTitle" v-if="!noAuthor && !detailFromNewsAuthor">{{list.skill}}</div>
      <div class="userSkill flex row author" v-else-if="!detailFromNewsAuthor">
        <div class="follow">
          关注 &nbsp;{{list.followMan}}  &nbsp;
        </div>
        <div class="fans">
          |  &nbsp;粉丝&nbsp; {{list.fans}}
        </div>
      </div>
    </div>
    <div class="inforIcon" v-if="!noAuthor && !detailFromNews">
      <img :src="icon" alt="">
    </div>
    <div class="inforIcon userOperationBox flex row justify_ct item_ct" v-if="noAuthor && fromAuthor" @click="follow" :indexId="list.id">
        <img src="./../assets/followed.png" alt="">
        <div class="operationName">已关注</div>
    </div>
    <div class="noInforIcon userOperationBox flex row justify_ct item_ct" v-if="!fromAuthor && noAuthor" @click="follow" :indexId="list.id">
        <img src="./../assets/follow.png" alt="">
        <div class="operationName">未关注</div>
    </div>
    <div class="flex row justify_ct item_ct seeBox" v-if="detailFromNews && detailFromNewsAuthor">
        {{list.see}}&nbsp;浏览
    </div>
    <div class="flex row justify_ct item_ct seeBox" v-if="!detailFromNewsAuthor">
        {{list.commentTime}}
    </div>
  </div>
</template>
<script>
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
    props:{
      inforData:{
        type:Object,
        default(){
          return {};
        }
      },
      icon:{
        type:String,
        default:require('./../assets/next.png')
      },
      nameStyle:{
        type:String,
        default:''
      },
      inforBoxStyle:{
        type:String,
        default:''
      },
      picStyle:{
        type:String,
        default:''
      },
      noAuthor:{
        type:Boolean,
        default:false
      },
      fromAuthor:{
        type:Boolean,
        default:false
      },
      detailFromNews:{
        type:Boolean,
        default:false
      },
      detailFromNewsAuthor:{
        type:Boolean,
        default:false
      },
      jumpUser:{
        type:Function,
        default:function(){

        }
      },
      followUser:{
        type:Function,
        default:function(){

        }
      },
    },
    methods:{
      jump:function(event){
        this.jumpUser(event)
      },
      follow:function(e){
        e.stopPropagation()
        this.followUser(e.path[1].attributes['indexid'].value)
      },
    }
  }
</script>
<style scoped>
  .inforBox{
    margin-bottom:1rem;
  }
  .inforPic{
    width: 7rem;
    height: 7rem;
  }
  .inforPic > img{
    width: 80%;
    height: 80%;
    border-radius:50%;
  }
  .inforContent{
    flex:1;
  }
  .userName{
    font-weight:900;
    font-size: 1.4rem;
    color: #333;
    line-height: 2rem;
  }
  .userSkill{
    text-align:left;
    color:#999;
    line-height: 1.2rem;

  }
  .inforIcon,.noInforIcon{
    margin-right:2%;
  }
  .inforIcon > img{
    width: 1.6rem;
  }
  .author{
    color:#333;
    height: 1.6rem;
    line-height: 1.6rem;
    font-weight:700;
  }
  .userOperationBox{
    width: 5rem;
    background: #FFF;
    border: 1px solid #999;
    border-radius: 4px;
    height: 2rem;
    color: #999;
  }
  .userOperationBox > img{
    width: 1rem;
    height: 1rem;
    margin-right:0.2rem;
  }
  .noInforIcon > img{
    width: 1.6rem;
  }
  .newsTime{
    margin-left:0.4rem;
  }
  .seeBox{
    color:#666;
  }
</style>
