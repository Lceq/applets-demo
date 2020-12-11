// pages/user/user.js
const {userDetail, userPlaylist} = require('../../api/personality')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: [],
    listenSongs:0,
    playlist: [],
    list1: [],
    list2:[],
    userId: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserDetail(options.id);
    this.getUserPlaylist(options.id);
  },
  getUserPlaylist(id){
    return userPlaylist({
      uid: id
    }).then(res => {
      if(res.code === 200){
        var a = res.playlist || [];
        var list1 = a.filter(function (item) { return item.userId == id })
        
        var list2 = a.filter(function (item) { return item.userId != id })
        this.setData({
          loading: false,
          list1: list1,
          list2: list2
        });
      }
    })
  },
  getUserDetail(id){
    return userDetail({
      uid: id
    }).then(res => {
      if(res.code === 200){
        this.data.user = [res.profile];
        this.setData({
          user: this.data.user,
          listenSongs: res.listenSongs,
          userId: res.profile.userId,
        })
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