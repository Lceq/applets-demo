// pages/album/album.js
const {album} = require('../../api/album')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumId:0,
    album: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({albumId: options.id});
    this.getAlbumRequest();

  },
  getAlbumRequest(){
    return album({
      id: this.data.albumId
    }).then(res => {
      if(res.code === 200){
        this.setData({
          album: res
        })
        wx.setNavigationBarTitle({
          title: res.album.name,
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