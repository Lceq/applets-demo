// pages/mymusic/mymusic.js
let app = getApp();
const {userAccount,userDetail, avatarUpload} = require('../../api/my-music')
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
    console.log('onLoad');
   let loginCookie =  wx.getStorageSync("loginCookie")
    if(!loginCookie){
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      this.getUserRequest();
      console.log('onLoad',wx.getStorageSync('userId'));
    }
  },
  changeUpload(){
    // wx.redirectTo({
    //   url: `../upload/upload?avatarUrl=${this.data.userInfo.avatarUrl}`,
    // })
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(res) => {
        this.data.userInfo.avatarUrl = res.tempFilePaths[0]
        this.setData({
          userInfo: this.data.userInfo
        })
        wx.showToast({
          title: '头像更换成功',
          icon: 'warn',
          duration: 2000
        })
        console.log('wx.getStorageSync',wx.getStorageSync('cookie'));
        // wx.request({
        //   url: `http://localhost:3000/avatar/upload?cookie=${wx.getStorageSync('cookie')}`,
        //   data: {
        //     imgFile: res.tempFiles
        //   },
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   complete: (res) => {
        //     console.log('更新成功',res );
        //   }
        // })
      }
    })
  },
    //图片放大
  showImg:function(e){
    wx.previewImage({
        urls: [this.data.userInfo.avatarUrl],
        current: this.data.userInfo.avatarUrl
    })
  },
  getUserDetail(){
    console.log('1-1');
    return userDetail({uid: wx.getStorageSync('userId')}).then(res => {
      console.log('1-2');
      if(res.code === 200){
        this.setData({
          userInfo: res.profile
        })
        console.log(res,'userAccount');
      }
    })
  },
  getUserRequest(){
    console.log(11);
    let d = this.getUserDetail();
    console.log(22);
    Promise.all([d]).then(res => {
      
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