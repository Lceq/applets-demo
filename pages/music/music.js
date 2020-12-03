// pages/weather/weather.js
const app = getApp()
const API = require('../../api/personality')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes: 'sssssssssss',
    tabIndex: 0,
    tabIs: 'personality'
  },
  clickTabItem(e){
    this.setData({tabIndex: e.currentTarget.dataset.t})
    let index = e.currentTarget.dataset.t
    if(index == 0){
      this.setData({tabIs: 'personality'})
    } else if(index == 1){
      this.setData({tabIs: 'song-sheet'})
    }  else if(index == 2){
      this.setData({tabIs: 'radio-station'})
    }  else if(index == 3){
      this.setData({tabIs: 'ranking-list'})
    } 
  },
  onClickButton(){
    console.log(API,API.playlistCatlist,'playlistCatlist');
    API.playlistCatlist({}).then(res => {
      console.log(res,'success')
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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