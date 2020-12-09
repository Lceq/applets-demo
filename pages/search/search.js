// pages/weather/weather.js
const {
  search,
  tabsList
} = require('../../api/search');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    tabsList: tabsList,
    tabType: 1,
    searchLoading: false,
    songsList: [], // 单曲
    artistsList: [], // 歌手
    albumsList: [], //专辑
    playlists: [], // 歌单
    mvsList: [], // MV
    djRadiosList: [], // 主播电台
    userprofilesList: [], // 用户
    recent: wx.getStorageSync("recent") || [] // 历史记录
  },

  serachForm: function (e) {
    this.searchRequest()
    this.setData({
      searchLoading: true
    })
    let recent  = this.data.recent
    let curname = recent.findIndex(x => x===this.data.value);
    if(curname > -1){
      recent.splice(curname,1)
    }
    recent.unshift(this.data.value);
    if(recent.length > 5){
      recent.pop()
    }
    wx.setStorageSync('recent', recent);
    this.setData({
      recent: recent
    })
  },
  deleteHis(e){
       //删除搜索历史
       var index = e.currentTarget.dataset.index;
       this.data.recent.splice(index, 1);
       this.setData({
         recent: this.data.recent
       })
       wx.setStorageSync('recent', this.data.recent)
  },
  searchRequest() {
    //songsList: [],// 单曲
    //artistsList: [],// 歌手
    //albumsList: [],//专辑
    //playlists: [],// 歌单
    //mvsList: [],// MV
    // djRadiosList: [],// 主播电台
    //userprofilesList: [],// 用户
    let type = this.data.tabType
    return search({
      keywords: this.data.value,
      type: this.data.tabType
    }).then(res => {
      if (res.code === 200) {
        if (type === 1) {
          this.setData({
            songsList: res.result.songs
          })
        } else if (type === 100) {
          this.setData({
            artistsList: res.result.artists
          })
        } else if (type === 10) {
          this.setData({
            albumsList: res.result.albums
          })
        } else if (type === 1000) {
          this.setData({
            playlists: res.result.playlists
          })
        } else if (type === 1004) {
          this.setData({
            mvsList: res.result.mvs
          })
        } else if (type === 1009) {
          this.setData({
            djRadiosList: res.result.djRadios
          })
        } else if (type === 1002) {
          this.setData({
            userprofilesList: res.result.userprofiles
          })
        }
      }
    })
  },
  inputext(e) {
    this.setData({
      value: e.detail.value
    })
  },
  clearInput() {
    this.setData({
      value: ''
    });
    this.setData({
      searchLoading: false
    })
  },
  clickTabItem(e) {
    let type = e.currentTarget.dataset.type
    this.setData({
      tabType: type
    });
    this.searchRequest()

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
