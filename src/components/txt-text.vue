<template>
  <div class="flex row textBox" :style="textStyle" @click="forgetPassword">
    <div v-if="txtText" class="txtBoxText">{{txtText}}</div>
    <div v-if="!txtText" class="leftText txt" :style="leftStyle">{{txtLeftText}}</div>
    <div v-if="!txtText" class="centerText txt" :style="centerStyle">{{txtCenterText}}</div>
    <div v-if="!txtText" class="rightText txt" :style="rightStyle">{{txtRightText}}</div>
  </div>
</template>
<script>
  export default {
    props:{
      txtText:{
        type:String,
        default:''
      },
      txtLeftText:{
        type:String,
        default:''
      },
      txtCenterText:{
        type:String,
        default:''
      },
      txtRightText:{
        type:String,
        default:''
      },
      leftStyle:{
        type:String,
        default:''
      },
      centerStyle:{
        type:String,
        default:''
      },
      rightStyle:{
        type:String,
        default:''
      },
      textStyle:{
        type:String,
        default: ''
      },
      forget:{
        type:Function,
        default:function(){

        }
      }
    },
    methods:{
      forgetPassword:function(event) {
        this.forget(event)
      }
    }
  }
</script>
<style scoped>
  .textBox{
    color:#007AFF;
    margin:0 4%;
  }
  .textBox > div{
    padding:0.6rem 0;
  }
  .txt{
    width: 33.33%;
  }
  .leftText{
    text-align:left;
  }
  .centerText{
    text-align:center;
  }
  .rightText{
    text-align:right;
  }
  .txtBoxText{
    text-align:left;
  }
</style>
