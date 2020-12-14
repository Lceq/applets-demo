// pages/mv/mv.js
const {mvDetail,mvUrl,commentMv,simiMv} = require('../../api/personality')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    mvid: 0,
    mvDetail: {},
    comments: {},
    simi:[],
    mvUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  clickTabItem(e){
    let index = e.currentTarget.dataset.idx;
    this.setData({
      tabIndex: index
    })
    if(index ==0){
      this.getMvDetailRequest();
    } else if(index==1){
      this.getCommentMvRequest();
    }else if(index ==2){
      this.getSimiMvRequest();
    }
  },
  onLoad: function (options) {
    this.setData({
      mvid: options.mvid
    })
    this.getMvDetailRequest();
    this.getMvUrlRequest();
  },
  getMvUrlRequest(){
    return mvUrl({id: this.data.mvid}).then(res => {
      if(res.code === 200){
        this.setData({
          mvUrl:res.data.url
        })
      }
    })
  },
  getCommentMvRequest(){
    return commentMv({id: this.data.mvid}).then(res => {
      if(res.code === 200){
        this.setData({
          comments: res
        })
      }
    })
  },
  getSimiMvRequest(){
    return simiMv({mvid: this.data.mvid}).then(res =>{
      if(res.code === 200){
        this.setData({
          simi: res.mvs
        })
      }
    })
  },
  getMvDetailRequest(){
    return mvDetail({mvid: this.data.mvid}).then(res => {
      if(res.code === 200){
        this.setData({
          mvDetail: res.data
        })
        wx.setNavigationBarTitle({
          title: res.data.name,
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