<template>
  <div class="noticeBox">
    <div class="operationBox" v-if="fromRoute==='changeUserInfor'">
      <div class="operationList flex row justify_bt item_ct picBox" @click="sheetVisible=true">
        <div class="operationTitle">头像</div>
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
        </mt-actionsheet>
        <div class="operationIcon flex row justify_bt item_ct">
          <img :src="userNewsInfor.pic" alt="" class="userPic">
          <img :src="icon" alt="">
        </div>
      </div>
      <div class="operationList flex row justify_bt item_ct">
        <div class="operationTitle">昵称</div>
        <div class="operationIcon flex row justify_bt item_ct f_1">
          <input type="text" class="t_r nameInput" maxlength="10" :value="userNewsInfor.nickName" @input="inputProcessor">
        </div>
      </div>
      <div class="operationList">
        <div class="operationTitle flex row justify_st">个人简介</div>
        <textarea name="" id="area" cols="30" rows="10" class="textareaBox w_h_100 border-box" :value="userNewsInfor.skill" @input="textProcessor"></textarea>
      </div>
    </div>
    <div class="operationBox" v-if="fromRoute==='noticeSetUp'">
      <div class="operationList flex row justify_bt item_ct picBox">
        <div class="operationTitle">系统推送</div>
        <div class="operationIconLabel flex row justify_bt item_ct">
          <mt-switch v-model="systemValue"></mt-switch>
        </div>
      </div>
      <div class="operationList flex row justify_bt item_ct">
        <div class="operationTitle">快讯推送</div>
        <div class="operationIconLabel flex row justify_bt item_ct">
          <mt-switch v-model="flashValue"></mt-switch>
        </div>
      </div>
      <div class="operationList flex row justify_bt item_ct">
        <div class="operationTitle">文章推送</div>
        <div class="operationIconLabel flex row justify_bt item_ct">
          <mt-switch v-model="newsValue"></mt-switch>
        </div>
      </div>
      <div class="operationList flex row justify_bt item_ct">
        <div class="operationTitle">免打扰</div>
        <div class="operationIconLabel flex row justify_bt item_ct">
          <mt-switch v-model="disturbValue"></mt-switch>
        </div>
      </div>
      <div class="operationListLabel flex row justify_bt item_ct">
        <div class="operationTitle">推送时间</div>
        <div class="operationIconTime flex row justify_bt item_ct" @click="timeChoose=true">
          <input type="text" placeholder="00:00 - 00:00" class="t_r" readonly v-model="chooseTime">
          <img :src="icon" alt="">
        </div>
      </div>
    </div>
    <div class="timeBoxMint" v-if="timeChoose">
      <div class="flex row item_ct">
        <div class="esc btnBox" @click="esc">取消</div>
        <div class="sure btnBox" @click="sure">确定</div>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
  </div>
</template>
<script>
  import { Switch, Picker,Actionsheet  } from 'mint-ui';
  export default {
    compponents:{
      Switch,
      Picker,
      Actionsheet
    },
    data(){
      return {
        sheetVisible:false,
        actions: [{
          name: '拍照',
          method : ''	// 调用methods中的函数
        }, {
          name: '从相册中选择',
          method : ''	// 调用methods中的函数
        }],
        systemValue:true,
        flashValue:true,
        newsValue:false,
        disturbValue:false,
        timeChoose:false,
        slots:[
          {
            flex: 1,
            values: ['00', '01', '02', '03', '04', '05','06', '07', '08', '09', '10', '11','12', '13', '14', '15', '16', '17','18','19','20','21','22','23'],
            className: 'slot1',
            textAlign: 'center'
          },{
            divider: true,
            content: '-',
            className: 'slot2'
          },
          {
            flex: 1,
            values: ['00', '01', '02', '03', '04', '05','06', '07', '08', '09', '10', '11','12', '13', '14', '15', '16', '17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'],
            className: 'slot3',
            textAlign: 'center'
          },
          {
            flex: 1,
            values: ['00', '01', '02', '03', '04', '05','06', '07', '08', '09', '10', '11','12', '13', '14', '15', '16', '17','18','19','20','21','22','23'],
            className: 'slot4',
            textAlign: 'center'
          },{
            divider: true,
            content: '-',
            className: 'slot5'
          },
          {
            flex: 1,
            values: ['00', '01', '02', '03', '04', '05','06', '07', '08', '09', '10', '11','12', '13', '14', '15', '16', '17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'],
            className: 'slot6',
            textAlign: 'center'
          },
        ],
        chooseTime:'',
        time:''
      }
    },
    props:{
      icon:{
        type:String,
        default:require('./../assets/next.png')
      },
      fromRoute:{
        type:String,
        default:''
      },
      userNewsInfor:{
        type:Object,
        default(){
          return {}
        }
      },
      input:{
        type:Function,
        default(){

        }
      },
      textInput:{
        type:Function,
        default(){

        }
      },
    },
    methods:{
      inputProcessor(event){
        this.input(event.target.value)
      },
      textProcessor(event){
        this.textInput(event.target.value)
      },
      onValuesChange(picker, values){
        console.log(values);
        this.time = values;
      },
      sure(){
        this.timeChoose = false
        this.chooseTime = this.time[0] + ':' + this.time[1] + ' - ' + this.time[2] + ':' + this.time[3];
      },
      esc(){
        this.timeChoose = false
      }
    }
  }
</script>
<style scoped>
  .noticeBox{
    margin:1.2rem 0;
  }
  .operationBox{
    overflow: hidden;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.10);
    margin:0 4%;
  }
  .operationList{
    padding:0.6rem 0;
    border: 1px solid #F2F2F2;
  }
  .operationTitle{
    padding:0 0.8rem;
  }
  .operationIcon{
    height: 2.6rem;
  }
  .operationIconTime{
    height: 4rem;
  }
  .operationIconTime > img{
    width: 1.6rem;
    margin-right:0.4rem;
    border-radius:50%;
  }
  .operationIconLabel{
    padding-right:0.4rem;
  }
  .operationIcon > img{
    width: 1.6rem;
    margin-right:0.4rem;
    border-radius:50%;
  }
  .operationIcon > img.userPic{
    width: 2.6rem;
    height: 2.6rem;
    border-radius:50%;
  }
  .picBox{
    position: relative;
  }
  .picNative{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .nameInput{
    width: 100%;
    padding-right:0.8rem;
    color:#666;
  }
  .textareaBox{
    outline: none;
    border:none;
    padding:0.4rem 0.8rem;
    color:#666;
  }
  .timeBoxMint{
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
  }
  .btnBox{
    padding:0.8rem 0;
    width: 50%;
    border-top:1px solid #888;
    border-bottom:1px solid #888;
  }
  input{
    background: #fff !important;
  }
</style>
