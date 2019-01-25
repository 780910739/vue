import * as types from '../types';
import router from './../../router';
import { HTTP_GET } from "../../utils/request/request";
import Toast from "../../utils/js/toast";
import { DATA_NEWS_FLASH, DATA_NEWS_NAV, DATA_FIND_NEWS, DATA_WECHAT_MENU, DATA_USERINFOR, DATA_MY_SHARE } from "../../utils/request/global";
// initial state
const state = {
  activatedIndex: 1, // 底部菜单切换索引
  userId: '',
  newsTypeId:'',
  newsFlash:[], // 快讯新闻
  shareData:[],
  loading:false,
  queryLoading:false,
  allLoaded:false,
  share:false,
  fixed:false,
  chooseIndex:0,  // 导航切换索引
  navList:[],   // 发现模块导航
  newsData:{},  // 发现模块新闻
  pageNum:4,
  pageSize:0,
  shareMy:false,
  fixedMy:false,
  userHave:[
    {
      id:'',
      label:'我的文章',
      notice:0,
      route:'userNews'
    },{
      id:'',
      label:'我的消息',
      notice:0,
      route:'userNoticeList'
    },{
      id:'',
      label:'我的收藏',
      notice:1,
      route:'userNews'
    },
  ], // 我的模块菜单
  userOperation:[
    {
      id:'',
      label:'分享给好友',
      notice:0
    },{
      id:'',
      label:'消息设置',
      notice:1,
      route:'noticeSetUp'
    },{
      id:'',
      label:'意见反馈',
      notice:0
    },
  ], // 我的模块菜单
  userInfor:{},
  wechatList:[], // 分享菜单
  menuList:[]
}

// getters
const getters = {}
// actions
const actions = {
  /* 底部菜单切换 */
  [types.MENU_NUM]({state,rootState,commit,dispatch},payload){
    console.log(payload)
    if(payload == undefined){
    }else{
      state.activatedIndex = payload
    }
    if(state.activatedIndex == 0 || state.activatedIndex == undefined){
      dispatch(types.GET_NEWS_FLASH);
      commit(types.WECHAT_MENU_DATA);
    }else if(state.activatedIndex == 1){
      dispatch(types.NEWS_NAV_LIST);
    }else if(state.activatedIndex == 2){
      dispatch(types.USER_USERINFOR);
      commit(types.SHARE_MY);
    }
  },
  /* 滚动加载新闻 */
  [types.MORE_NEWS_DATA]({state,rootState,commit,dispatch},payload){
    if (state.allLoaded) {
      state.loading = true;
      return;
    }
    if (state.queryLoading) {
      return;
    }
    state.loading = !state.queryLoading;
    dispatch(types.NEWS_FIND_LIST,state.newsTypeId)
  },
  /* 加载快讯新闻 */
  [types.GET_NEWS_FLASH]({state,rootState,commit,dispatch},payload){
    HTTP_GET({
      url: DATA_NEWS_FLASH,
    }).then((data)=> {
      console.log(data);
      state.newsFlash = data.data.newsFlash;
    }).then((data)=> {
    })
  },
  /* 加载导航数据 */
  [types.NEWS_NAV_LIST]({state,rootState,commit,dispatch},payload){
    HTTP_GET({
      url: DATA_NEWS_NAV,
    }).then((data)=> {
      console.log(data);
      state.navList = data.data.navList;
      let defaultPayload = {'index':0,'id':state.navList[0].id};
      dispatch(types.CHOOSE_NAV_MENU,defaultPayload);
    }).then((data)=> {
    })
  },
  /* 切换导航 */
  [types.CHOOSE_NAV_MENU]({state,rootState,commit,dispatch},payload){
    state.chooseIndex = payload.index || 0;
    dispatch(types.NEWS_FIND_LIST,payload.id)
  },
  /* 加载发现新闻 */
  [types.NEWS_FIND_LIST]({state,rootState,commit,dispatch},payload){
    state.newsData = {}
    state.pageSize = 0;
    state.newsTypeId = payload;
    state.pageSize++;
    HTTP_GET({
      url: DATA_FIND_NEWS,
    }).then((data)=> {
      let obj = {},bannerList=[],newsList=[];
      data.data.bannerList.forEach((o,i)=>{
        if(o.typeId == state.newsTypeId){
          bannerList.push(o);
        }
      })
      data.data.newsList.forEach((o,i)=>{
        if(o.typeId == state.newsTypeId){
          newsList.push(o);
        }
      })
      if(state.pageSize == 1){
        obj.bannerList = bannerList;
        obj.newsList = newsList;
        state.newsData = obj;
      }else{
        state.newsData.newsList.push(newsList);
      }
      state.moreLoading = state.allLoaded;
    })
  },
  /* 加载用户信息 */
  [types.USER_USERINFOR]({state,rootState,commit,dispatch},payload){
    HTTP_GET({
      url: DATA_USERINFOR,
    }).then((data)=> {
      console.log(data);
      state.userInfor = data.data;
      state.userId = data.data.id;
    }).then((data)=> {
    })
  }
}
// mutations
const mutations = {
  /* 快讯模块 */
  /* 跳转查询 */
  [types.SEARCH_NEWS](state,payload){
    router.push('search')
  },
  /* 退出登录 */
  [types.QUIT_ACCOUNT_NUMBER](state,payload){
    payload.confirm('', {
      message: '你确定退出当前账号',
      title: '退出操作',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }).then(action => {
      if (action == 'confirm') {     // 确认的回调
        Toast('退出成功')
        router.push('login')
      }
    }).catch(err => {
      if (err == 'cancel') {     // 取消的回调
        console.log(2);
      }
    });
  },
  /* 分享 */
  [types.SHARE_NEWS](state,payload){
    state.share = !state.share;
    state.fixed = !state.fixed;
    state.shareData = [];

    state.newsFlash.forEach((o,i)=>{
      if(o.id == payload){
        state.shareData.push(o);
      }
    })
  },
  /* 收藏 */
  [types.COLLECTION_NEWS](state,payload){
    console.log(payload);
    state.newsFlash.forEach((o,i)=>{
      if(o.id == payload){
        o.collection = !o.collection;
      }
    })
  },
  /* 加载微信分享菜单 */
  [types.WECHAT_MENU_DATA](state,payload){
    HTTP_GET({
      url: DATA_WECHAT_MENU,
    }).then((data)=> {
      console.log(data);
      state.wechatList = data.data
    }).then((data)=> {
    })
  },
  /* 加载我的页面分享菜单 */
  [types.SHARE_MY](state,payload){
    HTTP_GET({
      url: DATA_MY_SHARE,
    }).then((data)=> {
      console.log(data);
      state.menuList = data.data
    })
  },

  /* 发现模块 */
  /* 跳转新闻详情 */
  [types.NEWS_DETAIL](state,payload){
    router.push({name:'newsDetail',query:{'id':payload}})
  },

  /* 我的模块 */
  /* 跳转个人信息 */
  [types.USER_AUTHOR](state,payload){
    console.log(payload)
    router.push({name:'changeUserInfor',params:{'index':payload}})
  },
  /* 关注、粉丝、评论 跳转 */
  [types.USER_FOLLOW_FANS_COMMENT](state,payload){
    if(payload == 0){
      router.push({name:'userFriends',params:{'index':payload}})
    }else if(payload == 1){
      router.push({name:'userFriends',params:{'index':payload}})
    }else{
      router.push({name:'userNews',query:{'index':payload,'id':state.userId}})
    }
  },
  /* 我的文章、我的消息、我的收藏 跳转 */
  [types.USER_HAVE](state,payload){
    if(payload == 0){
      router.push({name:'userNews',query:{'index':payload,'id':state.userId}})
    }else if(payload == 1){
      router.push({name:'userNoticeList',params:{'index':payload}})
    }else{
      router.push({name:'userNews',query:{'index':1,'id':state.userId}})
    }
  },
  /* 分享给好友、消息设置、意见反馈 跳转 */
  [types.USER_OPERATION](state,payload){
    if(payload == 0){
      state.shareMy = !state.shareMy;
      state.fixedMy = !state.fixedMy;
    }else if(payload == 1){
      router.push('noticeSetUp')
    }else{
      console.log('意见反馈');
    }
  },
  /* 分享 */
  [types.SHARE_NEWS_DETAIL](state,payload){
    state.shareMy = !state.shareMy;
    state.fixedMy = !state.fixedMy;
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
