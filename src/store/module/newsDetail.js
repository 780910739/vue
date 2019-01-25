import * as types from '../types';
import router from './../../router';
import { HTTP_GET } from '../../utils/request/request'
import {DATA_MY_SHARE, DATA_NEWS_DETAIL} from '../../utils/request/global'
import {Tools} from '../../utils/js/tool'
import Toast from '../../utils/js/toast'
// initial state
const state = {
  newsId:'',
  collection:false,
  share:false,
  fixed:false,
  follow:false,
  comment:'',
  news:{},
  menuList:[]
}

// getters
const getters = {}
// actions
const actions = {
  [types.GET_NEWS_ID]({state,rootState,commit,dispatch},payload){
    console.log(payload)
    state.newsId = payload;
    dispatch(types.GET_NEWS_DETAIL)
  },
  [types.GET_NEWS_DETAIL]({state,rootState,commit,dispatch},payload) {
    HTTP_GET({
      url: DATA_NEWS_DETAIL,
    }).then((data)=> {
      console.log(data);
      data.data.forEach((o,i)=>{
        if(state.newsId = o.id){
          state.news = o;
        }
      })
      console.log(state.news.comment)
    })
  },
  /* 关注、取关 */
  [types.USER_FOLLOW]({state,rootState,commit,dispatch},payload){
    console.log(payload)
    state.news.recommender.follow = !state.news.recommender.follow
    state.follow = !state.follow
    if(!state.news.recommender.follow){
      state.news.recommender.fans++;
    }else{
      state.news.recommender.fans--;
    }
  },
}
// mutations
const mutations = {
  [types.SHARE_NEWS_DETAIL](state,payload){
    state.share = !state.share;
    state.fixed = !state.fixed;
  },
  [types.JUMP_MAN_PAGE](state,payload){
    router.push({name:'userNews',query:{'id':payload}})
  },
  [types.JUMP_LABEL_PAGE](state,payload){
    console.log(payload);
    router.push({name:'labelPage',params:{'id':payload}})
  },
  [types.FOLLOW_USER](state,payload){
    console.log(payload);
  },
  [types.SHARE_MY](state,payload){
    HTTP_GET({
      url: DATA_MY_SHARE,
    }).then((data)=> {
      console.log(data);
      state.menuList = data.data
    })
  },
  /* 收藏 */
  [types.NEWS_DETAIL_COLLECTION](state,payload){
    state.collection = !state.collection
    if(state.collection){
      Toast('收藏成功')
    }else{
      Toast('取消收藏')
    }
  },
  /* 获取评论 */
  [types.GET_NEWS_DETAIL_COMMENT](state,payload){
    state.comment = payload
  },
  /* 发送评论 */
  [types.SEND_NEWS_DETAIL_COMMENT](state,payload){
    state.news.comment.unshift({
      navId: "01",
      pic: "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3899933224,734271981&fm=85&s=6BFA72DA67080F5B80E9A626030020D7",
      userName: "张博文",
      content: state.comment,
      commentTime: Tools.data.date.getCurrentDate()
    })
    Toast('评论成功')
    state.comment = '';
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
