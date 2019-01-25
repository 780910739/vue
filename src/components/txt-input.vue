<template>
  <div class="input-container" :style="marginTop?'margin-top:0.8rem;':''">
    <div class="input" :style="inputStyle" :class="{borderBtm}">
      <div :style="labelStyle" class="flex justify_st item_ct label">
        <span>{{label}}</span>
      </div>
      <div class="flex justify_ct item_ct textInputContainer" :style="textInputContainerStyle">
        <input ref="input" :style="textInputStyle" :type="type" :maxLength="maxLength"
               class="textInput box" @input="inputProcessor" @change="changeProcessor"
               @focus="focusProcessor" @blur="blurProcessor" @keypress="keyPressProcessor"
               @keyup="keyUpProcessor" @keydown="keyDownProcessor" @paste="pasteProcessor"
               :value="value" :placeholder="placeholder" :disabled="disabled"
               :autofocus="autoFocus"/>
        <img :style="clearIconStyle" class="clearIcon" :src="clearIconSrc"
             v-if="clearIconShowData" @click="clearIconClick"/>
        <p @click="buttonIconClickProcessor" class="buttonText flex row justify_ct item_ct" :style="buttonTextStyle" v-if="buttonIconShow">{{buttonText}}</p>
      </div>
    </div>
    <div class="message font-orange">{{msgData}}</div>
  </div>
</template>
<script type="es6">
  import { Tools } from '../utils/js/tool';
  export default {
    created(){
      if(this.inputType == "integer"){
        this.type = "tel";
      }else if(this.inputType == ("decimal" || "money")){
        this.type = "number";
      }else if(this.inputType == "password"){
        this.type = "password";
      }

    },
    watch:{
      clearIconShow(newVal){
        this.clearIconShowData = newVal;
      },
      defaultValue(newVal){
        this.value = newVal;
      },
    },
    data(){
      return {
        msgData:this.msg,
        clearIconShowData:this.clearIconShow,
        value:this.defaultValue,
        computedMaxLength:this.maxLength||100,
        type:"text"
      }
    },
    props: {
      msg:{
        type:String,
        default:""
      },
      label:{
        type:String,
        default:""
      },
      buttonTextStyle:{
        type:String,
        default:""
      },
      buttonText:{
        type:String,
        default:""
      },
      defaultValue:{
        type:String,
        default:""
      },
      buttonIconShow:{
        type:Boolean,
        default:false
      },
      clearIconShow:{
        type:Boolean,
        default:false
      },
      borderBtm:{
        type:Boolean,
        default:false
      },
      marginTop:{
        type:Boolean,
        default:false
      },
      inputType:{
        type:String,
        default:'text'
      },
      placeholder:{
        type:String,
        default:''
      },
      tipText:{
        type:String,
        default:""
      },
      tipImgSrc:{
        type:String,
        default:""
      },
      disabled:{
        type:Boolean,
        default:false
      },
      autoFocus:{
        type:Boolean,
        default:false
      },
      firstSplitLength:{
        type:Number,
        default:3
      },
      splitLength:{
        type:Number,
        default:3
      },
      maxLength:{
        type:Number,
        default:100
      },
      intLength:{
        type:Number,
        default:100
      },
      decLength:{
        type:Number,
        default:2
      },
      input:{
        type:Function,
        default:function(){

        }
      },
      change:{
        type:Function,
        default:function(){

        }
      },
      buttonIconClick:{
        type:Function,
        default:function(){

        }
      },
      keyUp:{
        type:Function,
        default:function(){

        }
      },
      keyDown:{
        type:Function,
        default:function(){

        }
      },
      paste:{
        type:Function,
        default:function(){
          return false;
        }
      },
      keyPress:{
        type:Function,
        default:function(){

        }
      },
      clear:{
        type:Function,
        default:function(){

        }
      },
      onBlur:{
        type:Function,
        default:function(){

        }
      },
      onFocus:{
        type:Function,
        default:function(){

        }
      },
      rightIconClick:{
        type:Function,
        default:function(){

        }
      },
      clearIconSrc:{
        type:String,
        default:require("./../assets/clear.png")
      },
      inputStyle:{
        type: String,
        default: ""
      },
      labelStyle:{
        type: String,
        default: ""
      },
      leftIconStyle:{
        type: String,
        default: ""
      },
      textInputContainerStyle:{
        type: String,
        default: ""
      },
      textInputStyle:{
        type: String,
        default: ""
      },
      clearIconStyle:{
        type: String,
        default: ""
      },
    },
    methods:{
      buttonIconClickProcessor(event){
        if(!this.buttonDisabledData){
          this.buttonIconClick(event);
        }
      },
      inputProcessor(event){
        var text = event.target.value;
        if(text&&text.length>0){
          if(this.inputType=="integer"){
            text = Tools.data.convert.input2StringWithLength(
              text, this.computedMaxLength);
          }else if(this.inputType=="decimal"){
            text = Tools.data.convert.input2Decimal(
              text , this.intLength, this.decLength);
          }else if(this.inputType=="money"){
            text = Tools.data.convert.input2Money(text);
          }

          this.value = text;
          this.clearIconShowData = true;
        }else{
          this.value = "";
          this.clearIconShowData = false;
        }

        this.input(event);

      },
      focusProcessor(event){
        var text = Tools.data.convert.trim(this.value);
        this.value = text;
        this.computedMaxLength = this.maxLength;
        this.onFocus(event);

      },
      blurProcessor(event){
        var text;
        if (!Tools.data.check.isEmpty(this.value)) {
          if (this.inputType == "integer") {
            text = Tools.data.format.stringWithSpace(
              this.value, this.splitLength, this.firstSplitLength);
          } else if (this.inputType == "decimal") {
            if (!isNaN(this.value)) {
              text = Tools.data.format.decimal(this.value);
            }
          } else if (this.inputType == "money") {
            if (!isNaN(this.value)) {
              text = Tools.data.format.money(this.value);
            }
          }else{
            text = this.value;
          }
        }
        var maxLength = !Tools.data.check.isEmpty(text)?text.length:0;
        this.value = text;
        this.computedMaxLength = maxLength;
        this.onBlur(event);

      },
      changeProcessor(event){
        this.change(event);
      },
      keyUpProcessor(event){
        this.keyUp(event);
      },
      keyDownProcessor(event){
        this.keyDown(event);
      },
      keyPressProcessor(event){
        this.keyPress(event);
      },
      pasteProcessor(event){
        this.paste(event);
      },
      clearIconClick(event){
        this.value="";
        this.clearIconShowData = false;
        this.clear();
      },
      inputBlur(){
        //静态方法用于移出光标
        this.$refs.input.blur();
      },
      inputFocus(){
        //静态方法用于聚焦光标
        this.$refs.input.focus();
      }
    }
  }
</script>
<style scoped>
  .input-container{
    margin:0 4%;
  }
  .label{
    font-size: 1.2rem;
    color:#000;
    padding:0.5rem 0;
  }
  .textInputContainer{
    height: 2.8rem;
    border-bottom:1px solid #eee;
  }
  input{
    width:100%;
    text-align:left;
    border:none;
    background: linear-gradient(to bottom,#fff 98.7%,#e3e3e3 98.7%,#e3e3e3) no-repeat;
  }
  .clearIcon{
    margin-right:0.4rem;
    width: 1rem;
  }
  .buttonText{
    height: 100%;
    width:30%;
    color:#1188FF;
  }
</style>
