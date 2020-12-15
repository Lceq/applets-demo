// pages/artist/artist.js
const {artistMv,
  artistDesc,
  simiArtist,
  artistAlbum,
  artistDetail,
  artistTopSong} =require('../../api/artist')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:0,
    artistId: 0,
    artist: {},
    hotSongsList: [],
    artistAlbums: {} ,
    artistMvList:[],
    artistDesc: {},
    simi:[]
  },
  clickTabItem(e){
    let index = e.currentTarget.dataset.idx;
    this.setData({
      tabIndex: index
    })
    if(index == 0){
      this.getArtistTopSongRequest();
    } else if(index== 1){
      this.getArtistAlbumRequest();
    }else if(index== 2){
      this.getArtistMvRequest();
    }else if(index== 3){
      this.getArtistDescRequest();
    }
  },
  getArtistAlbumRequest(){
    return artistAlbum({id: this.data.artistId}).then(res => {
      if(res.code === 200){
        this.setData({
          artistAlbums: res
        })
      }
    })
  },
  getArtistMvRequest(){
    return artistMv({id:this.data.artistId}).then(res => {
      if(res.code=== 200){
        this.setData({
          artistMvList : res.mvs
        })
      }
    })
  },
  getArtistDescRequest(){
    artistDesc({id: this.data.artistId}).then(res => {
      if(res.code === 200){
        this.setData({
          artistDesc: res
        })
      }
    })
    simiArtist({id: this.data.artistId}).then(res => {
      if(res.code === 200){
        this.setData({
          simi: res.artists
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let artistId = options.id;
    this.setData({
      artistId: artistId
    })
    this.getArtistDetailRequest();
    this.getArtistTopSongRequest();
  },
  getArtistTopSongRequest(){
    return artistTopSong({id: this.data.artistId}).then(res => {
      if(res.code === 200){
        this.setData({
          hotSongsList: res.songs
        })
      }
    })
  },
   getArtistDetailRequest(){
     return artistDetail({id: this.data.artistId}).then(res => {
       if(res.code === 200){
         this.setData({
          artist: res.data.artist
         })
         wx.setNavigationBarTitle({
           title: res.data.artist.name ,
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