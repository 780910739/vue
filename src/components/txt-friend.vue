<template>
  <div>
    <div @click="goUserDetail(item.id,item.follow)" v-for="(item,index) in userList" :key="item.id || index">
      <div v-if="chooseNum == 1 || chooseNum == undefined">
        <div v-if="!item.follow" class="flex row justify_bt friendsListBox">
          <div class="userPicName flex row justify_ct item_ct">
            <div class="userPic">
              <img :src="item.pic" alt="">
            </div>
            <div class="userName">
              {{item.name}}
            </div>
          </div>
          <div class="userOperation flex row justify_ct item_ct" @click="follow" :userId="item.id">
            <div class="userOperationBox flex row justify_ct item_ct">
              <img src="./../assets/follow.png" alt="">
              <div class="operationName">关注</div>
            </div>
          </div>
        </div>
        <div v-if="item.follow && item.followed"  class="flex row justify_bt friendsListBox">
          <div class="userPicName flex row justify_ct item_ct">
            <div class="userPic">
              <img :src="item.pic" alt="">
            </div>
            <div class="userName">
              {{item.name}}
            </div>
          </div>
          <div class="userOperation flex row justify_ct item_ct"  @click="follow" :userId="item.id">
            <div class="userOperationBox flex row justify_ct item_ct userOperationBox1">
              <img src="./../assets/mutualFollow.png" alt="">
              <div class="operationName">相互关注</div>
            </div>
          </div>
        </div>
      </div>
      <div  v-if="item.follow && chooseNum == 0 && !item.followed" class="flex row justify_bt friendsListBox">
        <div class="userPicName flex row justify_ct item_ct">
          <div class="userPic">
            <img :src="item.pic" alt="">
          </div>
          <div class="userName">
            {{item.name}}
          </div>
        </div>
        <div class="userOperation flex row justify_ct item_ct"  @click="follow" :userId="item.id">
          <div class="userOperationBox flex row justify_ct item_ct userOperationBox1">
            <img src="./../assets/followed.png" alt="">
            <div class="operationName">已关注</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        operationIcon:'',
        userList:this.userListData
      }
    },
    watch:{
      userListData(data){
        this.userList = data;
      }
    },
    props:{
      chooseNum:{
        type:Number,
        default:0
      },
      userListData:{
        type:Array,
        default(){
          return [];
        }
      },
      goUser:{
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
      goUserDetail:function(id,follow){
        this.goUser(id,follow)
      },
      follow:function(e){
        e.stopPropagation()
        this.followUser(e.path[2].attributes.userId.value)
      },
    }
  }
</script>
<style scoped>
  .friendsListBox{
    margin-left:4%;
    padding:0 0.8rem;
    background: linear-gradient(to bottom,#fff 99%,#e3e3e3 99%,#e3e3e3) no-repeat;
  }
  .userPicName{
    padding:0.4rem 0;
  }
  .userPic > img{
    width: 3.2rem;
    height: 3.2rem;
    border-radius:50%;
  }
  .userName{
    margin-left:0.8rem;
    color:#333;
    font-size: 1.2rem;
  }
  .userOperationBox{
    width: 6rem;
    background: #FFF;
    border: 1px solid #4889DB;
    border-radius: 4px;
    height: 2rem;
    color: #4889DB;
  }
  .userOperationBox > img{
    width: 1.4rem;
    height: 1.4rem;
    border-radius:50%;
  }
  .userOperationBox1{
    border: 1px solid #999;
    color:#999;
  }
  .userOperationBox1 > img{
    width: 1rem;
    height: 1rem;
    margin-right:0.2rem;
    border-radius:50%;
  }
</style>
