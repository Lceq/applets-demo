const {request} = require('../utils/bsurl.js');
module.exports =  {
  toplistDetail : (data) => { return request('/toplist/detail',data) },// 排行榜
}