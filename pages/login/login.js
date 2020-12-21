// pages/login/login.js
const {loginCellphone} = require('../../api/login')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '13037568259'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  login(e){
    let data = e.detail.value
    return loginCellphone({
      phone: data.phone,
      password: data.password
    }).then(res => {
      if(res.code === 200){
        wx.setStorageSync('loginCookie', res.token);
        wx.setStorageSync('userId', res.account.id);
        console.log(res);
        if(res.token){
          wx.navigateTo({
            url: '../mymusic/mymusic',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})