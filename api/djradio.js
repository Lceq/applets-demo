const {request} = require('../utils/bsurl.js');
module.exports =  {
  djDetail : (data) => { return request('dj/detail',data) },// 电台 - 详情
  djProgram : (data) => { return request('dj/program',data) },// 电台 - 详情
}