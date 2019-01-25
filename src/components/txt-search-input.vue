<template>
  <div class="flex row searchBox">
    <div class="searchInput flex row">
      <img src="./../assets/infroSearch.png" alt="">
      <input type="text" placeholder="搜索关键词" class="input" @input="inputProoseage" @blur="blurProoseage" :value="value">
    </div>
    <div class="escSearch flex row justify_ct item_ct" v-if="inputHasSearch" @click="esc">
      取消
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        value:this.defaultValue,
        inputHasSearch:false
      }
    },
    methods:{
      inputProoseage(event){
        this.inputHasSearch = true;
        this.input(event.target.value)
      },
      blurProoseage(event){
        this.blur(event)
      },
      esc(){
        this.inputHasSearch = false;
        this.value = '';
      }
    },
    watch:{
      defaultValue(newVal){
        this.value = newVal;
      }
    },
    props:{
      defaultValue:{
        type:String,
        default:''
      },
      input:{
        type:Function,
        default:function(){

        }
      },
      blur:{
        type:Function,
        default:function(){

        }
      }
    }
  }
</script>
<style scoped>
  .searchBox{
    background: #fff;
    padding:0.4rem 4%;
  }
  .searchInput{
    flex:1;
    background: #EBEBEB;
    padding:0.4rem;
    border-radius:4px;
  }
  .searchInput > img{
    width: 1.6rem;
    height: 1.6rem;
  }
  .input{
    width: 100%;
    background: #EBEBEB;
  }
  .escSearch{
    padding:0.4rem;
    color:#4889DB;
  }
</style>
