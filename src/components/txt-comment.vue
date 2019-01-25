<template>
  <div class="flex row justify_ct item_ct commentBox border-box" :style="commentBoxStyle">
    <div class="searchInput flex row border-box">
      <textarea placeholder="评论说点什么" cols="50" rows="1" class="textarea" @input="inputProoseage" @blur="blurProoseage" :value="value"></textarea>
    </div>
    <div class="escSearch flex row justify_ct item_ct" >
      <div class="send" @click="sendComment">发送 &nbsp;|</div>
      <div class="flex row justify_ct item_ct collection" @click="collection">
        <img src="./../assets/collection.png" alt="" v-if="collectionSrc">
        <img src="./../assets/collection_no.png" alt="" v-else>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        value:this.defaultValue
      }
    },
    methods:{
      inputProoseage(event){
        this.input(event.target.value)
      },
      blurProoseage(event){
        this.blur(event)
      },
    },
    watch:{
      defaultValue(newVal){
        this.value = newVal;
      },
    },
    props:{
      collectionSrc:{
        type:Boolean,
        default:false
      },
      defaultValue:{
        type:String,
        default:''
      },
      commentBoxStyle:{
        type:String,
        default:''
      },
      input:{
        type:Function,
        default:function(){

        }
      },
      sendComment:{
        type:Function,
        default:function(){

        }
      },
      blur:{
        type:Function,
        default:function(){

        }
      },
      collection:{
        type:Function,
        default:function(){

        }
      }
    }
  }
</script>
<style scoped>
  .commentBox{
    position: fixed;
    bottom:0;
    width: 100%;
    background: #fff;
    padding:0.4rem 4%;
  }
  .searchInput{
    height: 100%;
    flex:1;
    background: #EBEBEB;
    padding:0.8rem;
    border-radius:4px;
  }
  .searchInput > img{
    width: 1.6rem;
    height: 1.6rem;
  }
  .textarea{
    min-height:1rem;
    max-height:5rem;
    width: 100%;
    background: #EBEBEB;
    outline: none;
    resize:none;
    border:none;
  }
  .escSearch{
    padding:0 0.4rem;
  }
  .send{
    color:#bbb;
  }
  .collection > img{
    margin-left:0.4rem;
    width: 1.6rem;
    height: 1.6rem;
  }
</style>
