const {request} = require('../utils/bsurl.js');
module.exports =  {
  album : (data) => { return request('album',data) },// 获取专辑内容
}