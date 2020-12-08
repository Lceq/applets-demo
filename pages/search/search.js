// pages/weather/weather.js
const {search, tabsList} = require('../../api/search')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    tabsList: tabsList,
    tabType: 1,
    searchLoading:false
  },

  serachForm: function (e) {
    this.serachRequest(e.detail.value.name)
    this.setData({searchLoading: true})
  },
  serachRequest(data){
    return search({keywords: data}).then(res => {
      if(res.code === 200){
        console.log(res,'serach');
      }
    })
  },
  inputext(e){
    this.setData({value: e.detail.value})
    console.log(tabsList);
    // console.log(e.detail.value,'input');
  },
  clearInput(){
    console.log('dd');
    this.setData({value: ''});
    this.setData({searchLoading: false})
  },
  clickTabItem(e){
    console.log(e.currentTarget.dataset.type);
    let type = e.currentTarget.dataset.type
    this.setData({tabType: type})
         
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

  },
})