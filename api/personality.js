const {request} = require('../utils/bsurl.js');
// export const playlistCatlist = (val) => request('/playlist/catlist', val);
module.exports ={
  playlistCatlist:(data) =>{ return request('playlist/catlist',data)},//热搜接口
  banner:(data) =>{ return request('banner',data)},// 轮播图
  personalized:(data) =>{ return request('personalized',data)},// 推荐歌单
  personalizedNewsong:(data) =>{ return request('personalized/newsong',data)},// 最新音乐
  personalizedMv:(data) =>{ return request('personalized/mv',data)},// 推荐mv
  personalpersonalizedDjprogramizedMv:(data) =>{ return request('personalized/djprogram',data)},// 主播电台
  playlistDetail:(data) =>{ return request('playlist/detail',data)},// 获取歌单详情
  userDetail:(data) =>{ return request('user/detail',data)},// 获取用户详情
  userPlaylist:(data) =>{ return request('user/playlist',data)},// 获取用户歌单
  mvDetail:(data) =>{ return request('mv/detail',data)},// 获取 mv 数据
  mvUrl:(data) =>{ return request('mv/url',data)},// mv 地址
  commentMv:(data) =>{ return request('comment/mv',data)},// mv 评论
  simiMv:(data) =>{ return request('simi/mv',data)},// 相似 mv
}