const {request} = require('../utils/bsurl.js');
console.log(request,'requestrequest');
// export const playlistCatlist = (val) => request('/playlist/catlist', val);
module.exports ={
  playlistCatlist:(data) =>{
    return request('/playlist/catlist',data)//热搜接口
  }
}