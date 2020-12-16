// pages/playing/playing.js
const {songUrl, songDetail} = require('../../api/playing')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songId: 0,
    music:{
      st: false
    },
    commentscount:false,
    shuffle: '1',
    playing: false,
    isMore: true,
    isShowM: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({songId: options.id})
    console.log(options.id);
    this.getSongDetail()
  },
  onClickShuffle(e){
    let s = e.currentTarget.dataset.s;
    this.setData({
      shuffle: s
    })
  },
  onClickPlay(e){
    let p = e.currentTarget.dataset.p;
    if(p == 1){
      this.setData({playing: false})
    } else {
      this.setData({playing: true})
    }
  },
  onClickMore(){
    this.setData({
      isMore: false,
      isShowM: false
    })
  },
  onClickShow(){
    this.setData({
      isMore: true,
      isShowM: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   

  },
  getSongDetail(){
    return songDetail({ids: this.data.songId}).then(res => {
      if(res.code ===200){
        console.log('url',res);
      }
    })
  },
  getSongUrl(){
    return songUrl({id: this.data.songId}).then(res => {
      if(res.code ===200){
        console.log('url',res);
      }
    })
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