const {request} = require('../utils/bsurl.js');
module.exports =  {
  songUrl : (data) => { return request('song/url',data) },// 获取音乐 url
  songDetail : (data) => { return request('song/detail',data) },// 获取歌曲详情
}