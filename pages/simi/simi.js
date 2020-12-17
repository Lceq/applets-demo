// pages/simi/simi.js
const {simiPlaylist,simiSong,simiUser} = require('../../api/playing')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    simiId: 0,
    playlists: [],
    songs: [],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      simiId: options.id
    })
    this.getSimiDetailRequest();
  },
  getSimiPlaylistRequest(){
    return simiPlaylist({id: this.data.simiId}).then(res => {
      if(res.code === 200){
        this.setData({playlists: res.playlists})
        console.log('simiPlaylist',res);
      }
    })
  },
  getSimiSongRequest(){
    return simiSong({id: this.data.simiId}).then(res => {
      if(res.code === 200){
        this.setData({songs: res.songs})
        console.log('simiSong',res);
      }
    })
  },
  getSimiUserRequest(){
    return simiUser({id: this.data.simiId}).then(res => {
      if(res.code === 200){
        console.log('simiUser',res);
      }
    })
  },
  getSimiDetailRequest(){
    let p = this.getSimiPlaylistRequest();
    let s = this.getSimiSongRequest();
    let u = this.getSimiUserRequest();
    Promise.all([p,s,u]).then(res => {
      this.setData({loading: true})

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