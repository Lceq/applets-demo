const {request} = require('../utils/bsurl.js');
module.exports =  {
  userAccount : (data) => { return request('user/account',data) },// 获取账号信息
  userDetail : (data) => { return request('user/detail',data) },// 获取用户详情
  avatarUpload : (data) => { return request('avatar/upload',data) },// 更新头像
}