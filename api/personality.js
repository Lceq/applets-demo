const {request} = require('../utils/bsurl.js');
// export const playlistCatlist = (val) => request('/playlist/catlist', val);
module.exports ={
  homepageBlockPage:(data) =>{ return request('/homepage/block/page',data) },//
  playlistCatlist:(data) =>{ return request('/playlist/catlist',data)},//热搜接口
  banner:(data) =>{ return request('/banner',data)},// 轮播图
  personalized:(data) =>{ return request('/personalized',data)},// 推荐歌单
  personalizedNewsong:(data) =>{ return request('/personalized/newsong',data)},// 最新音乐
  personalizedMv:(data) =>{ return request('/personalized/mv',data)},// 推荐mv
  personalpersonalizedDjprogramizedMv:(data) =>{ return request('/personalized/djprogram',data)},// 主播电台
}