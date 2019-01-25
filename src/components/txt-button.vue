<template>
  <div  class="flex row btnBox" :style="btnBoxStyle">
    <div class="btnContent" @click="btnClick" :style="btnStyle" :class="startBtnClick?'bg-black':'bg-orange'">
      {{btnText}}
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      btnText:{
        type:String,
        default:''
      },
      btnBoxStyle:{
        type:String,
        default:''
      },
      btnStyle:{
        type:String,
        default:''
      },
      startBtnClick:{
        type:Boolean,
        default:true
      },
      btnClick:{
        type:Function,
        default:function(){

        }
      }
    }
  }
</script>
<style scoped>
  .btnBox{
    margin:5% 4% 0;
  }
  .btnContent{
    width: 100%;
    padding:1rem 0;
    border-radius: 4px;
    color:#fff;
  }
  .bg-black{
    background: #ccc;
  }
  .bg-orange{
    background: #bb9115;
  }
</style>
