import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as mutations from './mutations';
import index from './module/index'
import user from './module/user'
import login from './module/login'
import newsDetail from './module/newsDetail'
Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  mutations,
  modules:{
    index,
    user,
    login,
    newsDetail
  },
  state:{
    news: {
      newsFlash:[
        {
          id:'01',
          time:'14:21:29',
          title:'广州推出“税链”电子发票区块链平台',
          content:'日前，全国首个电子发票区块链平台“税链”成功上线，广州燃气集团有限公司由税务机关授权加入区块链网络，开出首张“上链”发票，实现全国首张电子发票上区块链存储、交换和共享。'
        },{
          id:'02',
          time:'14:23:29',
          title:'广州推出“税链”电子发票区块链平台',
          content:'日前，全国首个电子发票区块链平台“税链”成功上线，广州燃气集团有限公司由税务机关授权加入区块链网络，开出首张“上链”发票，实现全国首张电子发票上区块链存储、交换和共享。'
        },{
          id:'03',
          time:'14:23:29',
          title:'广州推出“税链”电子发票区块链平台',
          content:'日前，全国首个电子发票区块链平台“税链”成功上线，广州燃气集团有限公司由税务机关授权加入区块链网络，开出首张“上链”发票，实现全国首张电子发票上区块链存储、交换和共享。'
        },
      ],
    }
  }
})

export const initState = JSON.parse(JSON.stringify(store.state));

export default store
