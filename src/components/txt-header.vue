<template>
  <div class="header flex row" :style="headerStyle" >
    <div class="headerLeft flex row justify_ct item_ct" :style="headerLeftStyle" @click="onHeaderLeftClickProcessor">
      <img v-if="headerLeftType === 'icon' && headerLeftSrc" class="headerLeftIcon" :style="headerLeftIconStyle" :src="headerLeftSrc" />
      <p  v-else class="headerLeftText" :style="headerLeftTextStyle">{{headerLeftText}}</p>
    </div>
    <div class="headerTitle flex row justify_ct item_ct" :style="headerTitleStyle">
      <p class="headerTitleText" :style="headerTitleTextStyle">{{headerTitle}}</p>
    </div>
    <div class="headerRight flex row justify_ct item_ct" :style="headerRightStyle" @click="onHeaderRightClickProcessor">
      <img v-if="headerRightType === 'icon' && headerRightSrc" class="headerRightIcon" :style="headerRightIconStyle" :src="headerRightSrc"></img>
      <p class="headerRightText" :style="headerRightTextStyle">{{headerRightText}}</p>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    created(){

    },
    data(){
      return {

      }
    },
    props:{
      headerLeftClick:{
        type: Function,
        default() {
          this.$router.back();
        }
      },
      headerRightClick:{
        type: Function,
        default() {

        }
      },
      headerLeftSrc:{
        type:String,
        default:require("./../assets/back2.png")
      },
      headerLeftType:{
        type:String,
        default:"icon"
      },
      headerLeftText:{
        type:String,
        default:""
      },
      headerTitle:{
        type:String,
        default:""
      },
      headerRightSrc:{
        type:String,
        default:require("./../assets/btn_add.png")
      },
      headerRightType:{
        type:String,
        default:""
      },
      headerRightText:{
        type:String,
        default:""
      },
      headerStyle: {
        type: String,
        default: ""
      },
      headerLeftStyle: {
        type: String,
        default: ""
      },
      headerLeftIconStyle:{
        type: String,
        default: ""
      },
      headerLeftTextStyle:{
        type: String,
        default: ""
      },
      headerTitleStyle:{
        type:Object,
        default:function(){
          return {};
        }
      },
      headerTitleTextStyle:{
        type: String,
        default: ""
      },
      headerRightStyle:{
        type: String,
        default: ""
      },
      headerRightIconStyle:{
        type: String,
        default: ""
      },
      headerRightTextStyle:{
        type: String,
        default: ""
      },
    },
    methods:{
      onHeaderLeftClickProcessor(event){
        this.headerLeftClick(event);
      },
      onHeaderRightClickProcessor(event){
        this.headerRightClick(event);
      }
    }
  }
</script>

<style>
  .header {
    width: 100%;
    height: 3rem;
    background: linear-gradient(to bottom,#fff 98.7%,#e3e3e3 98.7%,#e3e3e3) no-repeat;
  }

  .headerLeft, .headerRight {
    width: 15%;
  }

  .headerTitle {
    width: 100%;
  }

  .headerLeftText {
    font-size: 1rem;
    color: rgb(60,60,60);
    text-align: left;
    margin-left:10%;
  }

  .headerTitleText {
    font-size: 1.2rem;
    color: rgb(60,60,60);
    text-align: center
  }

  .headerRightText {
    font-size: 1rem;
    color: #007AFF;
    text-align: right;
    margin-right: 10%;
  }

  .headerLeftIcon{
    width:0.6rem;
    /*margin-left:1.2rem;*/
  }

  .headerRightIcon{
    width:1.2rem;
  }
</style>
