<template>
  <div class="w_h_100 searchPage">
    <txt-search-input></txt-search-input>
    <txt-history :jump-news="jumpNews" :delete-search="deleteSearch" :key-search="true" :keyWords="keyWords"></txt-history>
    <txt-history :jump-news="jumpNews" :keyWords="keyWords" :key-search="false"></txt-history>
    <txt-news-list :list-data="listData" :from-label="true" :search-from="true"></txt-news-list>
  </div>
</template>
<script>
  import TxtSearchInput from './../components/txt-search-input'
  import TxtHistory from './../components/txt-history'
  import TxtNewsList from './../components/txt-news-list'
  export default {
    components:{
      TxtSearchInput,
      TxtHistory,
      TxtNewsList
    },
    data(){
      return {
        listData:[
          {
            navId:'01',
            id:'0001',
            title: "世界区块链大会回顾：26万字浓缩成6个关键词看见未来",
            time: "7分钟前",
            label: "",
            pic: require("./../assets/author.png"),
            author: "张博文",
            see:1
          },
          {
            navId:'01',
            id:'0002',
            title: "世界区块链大会回顾：26万字浓缩成6个关键词看见未来",
            time: "7分钟前",
            label: "广告",
            pic: require("./../assets/author.png"),
            author: "张博文",
            see:100
          },
          {
            navId:'01',
            id:'0003',
            title: "世界区块链大会回顾：26万字浓缩成6个关键词看见未来",
            time: "7分钟前",
            label: "广告",
            pic: require("./../assets/author.png"),
            author: "张博文",
            see:10111
          },
          {
            navId:'01',
            id:'0004',
            title: "世界区块链大会回顾：26万字浓缩成6个关键词看见未来",
            time: "7分钟前",
            label: "广告",
            pic: require("./../assets/author.png"),
            author: "张博文",
            see:4324324324
          },
          {
            navId:'01',
            id:'0005',
            title: "世界区块链大会回顾：26万字浓缩成6个关键词看见未来",
            time: "7分钟前",
            label: "广告",
            pic: require("./../assets/author.png"),
            author: "张博文",
            see:300213
          },
          {
            navId:'02',
            id:'0006',
            title: "世界区块链大会回顾：26万字浓缩成6个关键词看见未来",
            time: "7分钟前",
            label: "广告",
            pic: require("./../assets/author.png"),
            author: "张博文",
            see:10022
          },
        ],
        keyWords:[
          {
            id:'01',
            keyWord:'人工智能',
          },{
            id:'02',
            keyWord:'人工人工智能',
          },{
            id:'03',
            keyWord:'人工人工智智能',
          },{
            id:'04',
            keyWord:'人工人工智能智能',
          }
        ]
      }
    },
    methods:{
      jumpNews(id){
        console.log(id);
      },
      deleteSearch(){
        console.log('删除历史搜索')
      }
    }
  }
</script>
<style scoped>
  .searchPage{
    background: #fff;
  }
</style>
