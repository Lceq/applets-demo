const {request} = require('../utils/bsurl.js');
module.exports =  {
  playlistCatlist : (data) => { return request('playlist/catlist',data) },// 歌单分类
  topPlaylist : (data) => { return request('top/playlist',data) } //歌单列表
}