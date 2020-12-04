// pages/weather/weather.js
const app = getApp()
const {banner,personalized,personalizedNewsong,personalizedMv,personalpersonalizedDjprogramizedMv} = require('../../api/personality')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes: 'sssssssssss',
    tabIndex: 0,
    tabIs: 'personality',
    personality: {
      bannerList: [],
      personalizList: [],
    }
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
  // 轮播图
  getBannerRequest(){
    return banner({}).then(res => {
      if(res.code === 200){
        this.data.personality.bannerList =  res.banners
        this.setData({personality: this.data.personality})
       }
     })
   },
   // 推荐歌单
   getPersonalizList(){
     return personalized({}).then(res => {
       if(res.code === 200){
         console.log(res,'res');
         this.data.personality.personalizList = res.result
         this.setData({personality: this.data.personality })
       }
     })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    let b =  this.getBannerRequest();
    let p =  this.getPersonalizList();
    Promise.all([b,p]).then(res => {
      
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