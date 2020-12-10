// pages/weather/weather.js
const {
  topSong,topAlbum
} = require('../../api/new-music');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newIdx: 0,
    tabIndex: 0,
    tabAIndex: 0,
    song: [
      {name: '华语',type: 7,image: 'hy',idx: 0,songList: []},
      {name: '欧美',type: 96,image: 'om',idx: 1,songList: []},
      {name: '欧美',type: 8,image: 'hg',idx: 2,songList: []},
      {name: '日本',type: 16,image: 'rb',idx: 3,songList: []},
    ],
    album: [
      {name: '华语',area: 'ZH',image: 'hy',idx: 0,albumList: []},
      {name: '欧美',area: 'EA',image: 'om',idx: 1,albumList: []},
      {name: '欧美',area: 'KR',image: 'hg',idx: 2,albumList: []},
      {name: '日本',area: 'JP',image: 'rb',idx: 3,albumList: []},
    ],
    songType: 7,
    albumArea: 'ZH'
  },
  getNewSongRequest(){
    return topSong({
      type: this.data.songType
    }).then(res => {
      if(res.code === 200){
        this.data.song[this.data.tabIndex].songList = res.data;
        this.setData({
          song: this.data.song
        })
      }
    })
  },
  getNewAlbumRequest(){
    return topAlbum({
      area: this.data.albumArea
    }).then(res => {
      if(res.code === 200){
        this.data.album[this.data.tabAIndex].albumList = res.monthData
        this.setData({
          album: this.data.album
        })

      }
    })
  },
  onClickNewTab(e) {
    this.setData({
      newIdx: e.currentTarget.dataset.newidx
    })
    if(this.data.newIdx == 0){
      this.getNewSongRequest();
    } else {
      this.getNewAlbumRequest();
    }
  },
  clickTabItem(e){
    this.setData({
      tabIndex: e.currentTarget.dataset.t
    });
    this.setData({
      songType: this.data.song[e.currentTarget.dataset.t].type
    });
    this.getNewSongRequest();
  },
  clickATabItem(e){
    this.setData({
      tabAIndex: e.currentTarget.dataset.t
    });
    this.setData({
      albumArea: this.data.album[e.currentTarget.dataset.t].area
    });
    this.getNewAlbumRequest();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewSongRequest();
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