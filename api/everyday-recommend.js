const {request} = require('../utils/bsurl.js');
module.exports =  {
  recommendSongs : (data) => { return request('recommend/songs',data) },// 获取每日推荐歌曲
}