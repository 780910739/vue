<template>
  <div class="w_h_100 friendsBox">
    <txt-header headerTitle="我的好友"></txt-header>
    <txt-friend-tab :chooseNum="$store.state[module].chooseNum" :jump-user="jumpUser" :user-list-data="$store.state[module].userList"  v-if="$store.state[module].userList.length>0" :list-number="$store.state[module].listNumber"></txt-friend-tab>
    <div class="friends">
      <txt-friend v-if="$store.state[module].userList.length>0" :user-list-data="$store.state[module].userList" :choose-num="$store.state[module].chooseNum" :go-user="goUserDetail" :follow-user="followUser"></txt-friend>
    </div>
  </div>
</template>
<script>
  import TxtHeader from './../components/txt-header'
  import TxtFriendTab from '../components/txt-friend-tab'
  import TxtFriend from '../components/txt-friend'
  import {USER_FRIEND_TAB,USER_DETAIL,GET_MY_FRIENDS,USER_FOLLOW,USER_CHANGE_FOLLOW} from './../store/types'
  export default {
    components:{
      TxtHeader,
      TxtFriendTab,
      TxtFriend
    },
    methods:{
      /* 切换*/
      jumpUser:function(index){
        this.$store.dispatch(this.modulePath + USER_FRIEND_TAB, {'index':index});
      },
      /* 跳转用户主页 */
      goUserDetail:function(id,follow){
        let payload = {
          'id':id,
          'follow':follow
        }
        this.$store.commit(this.modulePath + USER_DETAIL, payload);
      },
      /* 关注/取消关注 */
      followUser:function(id){
        this.$store.dispatch(this.modulePath + USER_FOLLOW, id);
      },
    },
    created(){
      this.$store.dispatch(this.modulePath + GET_MY_FRIENDS,this.$route.params.index);
    }
  }
</script>
<style scoped>
  .friendsBox{
    background: #fff;
  }
</style>
