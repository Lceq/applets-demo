const {request} = require('../utils/bsurl.js');
module.exports =  {
  songUrl : (data) => { return request('song/url',data) },// 获取音乐 url
  songDetail : (data) => { return request('song/detail',data) },// 获取歌曲详情
  simiPlaylist : (data) => { return request('simi/playlist',data) },// 相似歌单
  simiSong : (data) => { return request('simi/song',data) },// 获取相似音乐
  simiUser : (data) => { return request('simi/user',data) },// 获取最近 5 个听了这首歌的用户
}