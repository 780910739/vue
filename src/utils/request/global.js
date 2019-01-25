let REQUEST_HOST = "./";
if(process.env.NODE_ENV==="development"){
  REQUEST_HOST = ""; // 后台接口
};

let CONVENIENCE_PAGE_HOST = '';
if(process.env.NODE_ENV==="development"){ // 生产环境
  CONVENIENCE_PAGE_HOST = "";
}else if(process.env.NODE_ENV==="testing"){ // 测试环境
  CONVENIENCE_PAGE_HOST = "";
}else if(process.env.NODE_ENV==="production"){ // 正式环境
  CONVENIENCE_PAGE_HOST = "";
};

export const HOSTS = {
  REQUEST_HOST,
  CONVENIENCE_PAGE_HOST
};

// 接口地址
export const DATA_NEWS_FLASH = 'static/dataJson/newsFlash.json'; // 快讯新闻
export const DATA_NEWS_NAV = 'static/dataJson/navType.json'; // 新闻导航
export const DATA_FIND_NEWS = 'static/dataJson/newsList.json'; // 发现 新闻
export const DATA_WECHAT_MENU = 'static/dataJson/wechat.json'; // 快讯 分享
export const DATA_USERINFOR = 'static/dataJson/userInfor.json'; // 我的信息
export const DARA_MY_NEWS = 'static/dataJson/myNews.json'; // 我的文章
export const DARA_MY_FRIENDS = 'static/dataJson/myFriends.json'; // 我的关注和粉丝
export const DARA_MY_COLLECTION = 'static/dataJson/myCollection.json'; // 我的收藏
export const DARA_MY_COMMENT = 'static/dataJson/myComment.json'; // 我的评论
export const DARA_NOTICE = 'static/dataJson/noticeData.json'; // 我的消息
export const DATA_USER_OTHER_USERINFOR = 'static/dataJson/userOtherInfor.json'; // 人物主页
export const DATA_MY_SHARE = 'static/dataJson/wechatMy.json'; // 人物分享
export const DATA_NEWS_DETAIL = 'static/dataJson/newsDetail.json'; // 新闻详情
