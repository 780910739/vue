import * as types from '../types';
import router from './../../router';
import { HTTP_GET } from "../../utils/request/request";
import {
  DARA_MY_NEWS,
  DARA_MY_COLLECTION,
  DARA_MY_COMMENT,
  DARA_MY_FRIENDS,
  DARA_NOTICE,
  DATA_USER_OTHER_USERINFOR,
  DATA_USERINFOR
} from "../../utils/request/global";
import Vue from "vue";
// initial state
const state = {
  chooseNum:0,
  fromAuthor:true,
  noAuthor:true,
  userId:'',
  nickName:'',
  skill:'',
  pic:'',
  userList:[],
  listData:[],
  collectionData:[],
  commentData:[],
  noticeData:[],
  listNumber:[],
  listNumber1:[0,0,0],
  userNewsInfor:{},
  menuList:[
    {content:'文章'},
    {content:'收藏'},
    {content:'评论'},
  ],
}

// getters
const getters = {}
// actions
const actions = {
  /* 切换导航 */
  [types.USER_FRIEND_TAB]({state,rootState,commit,dispatch},payload){
    if(!payload){

    }else{
      state.chooseNum = payload.index - 0;
    }
    if(!payload.id){

    }else{
      state.userId = payload.id;
    }
    dispatch(types.GET_MY_NEWS);
    dispatch(types.GET_MY_COLLECTION);
    dispatch(types.GET_MY_COMMENT);
  },
  /* 其他人物主页 */
  [types.USER_OTHER_PAGE]({state,rootState,commit,dispatch},payload){
    state.userId = payload.id;
    state.fromAuthor = payload.follow;
    state.chooseNum = 0;
    dispatch(types.GET_MY_NEWS);
  },
  /* 获取我的文章 */
  [types.GET_MY_NEWS]({state,rootState,commit,dispatch},payload){
    HTTP_GET({
      url:DARA_MY_NEWS
    }).then((data)=>{
      console.log(data);
      state.listData= [];
      if(state.userId != ''){
        data.data.forEach((o,i)=>{
          if(o.authorId == state.userId){
            state.listData.push(o)
          }
        })
        Vue.set( state.listNumber1,'0',state.listData.length);

      }
    })
  },
  /* 获取我的收藏 */
  [types.GET_MY_COLLECTION]({state,rootState,commit,dispatch},payload){
    HTTP_GET({
      url:DARA_MY_COLLECTION
    }).then((data)=>{
      console.log(data);
      console.log(state.userId);
      state.collectionData= [];
      if(state.userId != ''){
        data.data.forEach((o,i)=>{
          if(o.authorId == state.userId){
            state.collectionData.push(o)
          }
        })
        Vue.set( state.listNumber1,'1',state.collectionData.length);
      }
    })
  },
  /* 获取我的评论 */
  [types.GET_MY_COMMENT]({state,rootState,commit,dispatch},payload){
    HTTP_GET({
      url:DARA_MY_COMMENT
    }).then((data)=>{
      console.log(data);
      state.commentData= [];
      if(state.userId != ''){
        data.data.forEach((o,i)=>{
          if(o.authorId == state.userId){
            state.commentData.push(o)
          }
        })
        Vue.set( state.listNumber1,'2',state.commentData.length);
      }
    })
  },
  /* 获取我的关注和粉丝 */
  [types.GET_MY_FRIENDS]({state,rootState,commit,dispatch},payload){
    state.chooseNum = payload - 0 || 0;
    HTTP_GET({
      url:DARA_MY_FRIENDS
    }).then((data)=>{
      console.log(data);
      state.userList = data.data;
      Vue.set(state.userList,'',state.userList);
      commit(types.CHANGE_NUMBER)
    })
  },
  /* 关注、取关 */
  [types.USER_FOLLOW]({state,rootState,commit,dispatch},payload){
    state.userList.forEach((o,i)=>{
      if(o.id == payload){
        o.follow = !o.follow;
      }
    })
    commit(types.CHANGE_NUMBER)
  },
}
// mutations
const mutations = {
  /* 跳转人物主页 */
  [types.USER_DETAIL](state,payload){
    router.push({name:'userNews',query:{'id':payload.id,'follow':payload.follow}})
  },
  /* 跳转新闻详情 */
  [types.NEWS_DETAIL](state,payload){
    router.push({name:'newsDetail',query:{'id':payload}})
  },
  /* 我的粉丝和关注人数 */
  [types.CHANGE_NUMBER](state,payload){
    state.listNumber = [];
    let followNum = 0,noFollow = 0;
    state.userList.forEach((o,i)=>{
      if(o.follow && !o.followed){
        followNum++;
      }else{
        noFollow++;
      }
    })
    state.listNumber.push(followNum)
    state.listNumber.push(noFollow)
  },
  /* 我的消息 */
  [types.GET_NOCTICE_DATA](state,payload){
    HTTP_GET({
      url:DARA_NOTICE
    }).then((data)=>{
      state.noticeData = data.data;
    })
  },
  /* 其他人物主页信息 */
  [types.USER_OTHER_USERINFOR](state,payload){
    HTTP_GET({
      url:DATA_USER_OTHER_USERINFOR
    }).then((data)=>{
      console.log(data);
      state.userNewsInfor= {};
      if(state.userId != ''){
        if(data.data.id == state.userId){
          state.userNewsInfor = data.data
        }
      }
    })
  },
  /* 本人主页 */
  [types.USER_USERINFOR](state,payload){
    HTTP_GET({
      url: DATA_USERINFOR,
    }).then((data)=> {
      state.userNewsInfor= {};
      state.userNewsInfor = data.data
    })
  },
  /* 人物主页关注 */
  [types.NEWS_FOLLOW](state,payload){
    console.log(payload);
    state.fromAuthor = !state.fromAuthor
    state.userList.forEach((o,i)=>{
      if(o.id == payload){
        o.follow = !o.follow;
      }
    })
  },
  /* 用户昵称 */
  [types.USER_NICK_NAME](state,payload){
    console.log(payload);
    state.nickName = payload
  },
  /* 用户简介 */
  [types.USER_SKILL](state,payload){
    console.log(payload);
    state.skill = payload
  },
  /* 保存用户信息 */
  [types.USER_SAVE_INFOR](state,payload){
    console.log(state.nickName)
    console.log(state.skill)
    console.log(state.pic)
    router.push({name:'index',params:{'index':2}})
  },
}

const initState = JSON.parse(JSON.stringify(state));

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
