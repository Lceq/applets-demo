const {request} = require('../utils/bsurl.js');
module.exports =  {
  topSong : (data) => { return request('top/song',data) },// 新歌速查
  topAlbum : (data) => { return request('top/album',data) },// 新碟速查
}