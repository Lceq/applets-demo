const {playlistDetail} = require('../../api/personality');
var id2Url = require('../../utils/base64md5.js');
let app = getApp();
Page({
  data: {
    privileges: [],
    playlist: [],
    cover: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPlaylistDetail(options.id)
    
  },
  getPlaylistDetail(e){
    return playlistDetail({
      id: e
    }).then(res => {
      if(res.code === 200){
        this.setData({
          playlist: [res.playlist],
          privileges: res.privileges,
          cover: id2Url.id2Url('' + (res.playlist.coverImgId_str || res.playlist.coverImgId))
        })
        app.globalData.playList = res.playlist.trackIds;// tracks
        app.globalData.playListId = res.playlist.id;// tracks
        wx.setNavigationBarTitle({
          title: res.playlist.name
        })
      }
    })
  },
  userplaylist(e){
    var userid = e.currentTarget.dataset.userid;
    wx.redirectTo({
      url: '../user/user?id=' + userid
    })
  }
})