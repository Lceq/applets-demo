const {playlistDetail} = require('../../api/personality')
Page({
  data: {
    privileges: [],
    playlist: [],
    obj:{
      name: '李四',
      age: 18

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPlaylistDetail(options.id)
    
  },
  getPlaylistDetail(e){
    var _this = this
    return playlistDetail({
      id: e
    }).then(res => {
      if(res.code === 200){
        this.setData({
          playlist: [res.playlist],
          privileges: res.privileges
        })
        wx.setNavigationBarTitle({
          title: res.playlist.name
        })
         console.log('privileges',this.data.playlist,res);
      }
    })
  }
})