// module.exports="http://localhost:3000/"
const bsurl = "http://localhost:3000"
const request = (url,data) => {
  let _url = bsurl + url;
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: "get",
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)
        
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
module.exports = {request}