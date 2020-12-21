// pages/mymusic/mymusic.js
let app = getApp();
const {userAccount,userDetail} = require('../../api/my-music')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginCookie: '',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let loginCookie =  wx.getStorageSync("loginCookie")
    if(!loginCookie){
      wx.navigateTo({
        url: '../login/login',
      })
    } else {

      this.getUserRequest();

      console.log(wx.getStorageSync('userId'));
    }
    
  },
  getUserAccount(){
    return userDetail({uid: wx.getStorageSync('userId')}).then(res => {
      if(res.code === 200){
        this.setData({
          userInfo: res.profile
        })
        console.log(res,'userAccount');
      }
    })
  },
  getUserRequest(){
    let a = this.getUserAccount();
    Promise.all([a]).then(res => {
      
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