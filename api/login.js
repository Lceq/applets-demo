const {request} = require('../utils/bsurl.js');
module.exports =  {
  loginCellphone : (data) => { return request('login/cellphone',data) }
}