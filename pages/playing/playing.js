// pages/playing/playing.js
const {songUrl, songDetail} = require('../../api/playing')
let app = getApp();
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
    playing: true,
    isMore: true,
    isPlayList: true,
    isShowM: true,
    songs:{},
    songUrl: '',
    playList: [],
    totalDuration: 0,
    duration: '00:00', //歌曲总时长
    currentPosition: '00:00', // 已经播放的时间
    progressPercent: 0,//进度条占比
    percent: 0 //滑轮占比
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({songId: options.id})
    this.getSongDetail();
    // this.getSongUrl();
    this.setData({
      playList: app.globalData.playList,
      playIndex:  app.globalData.playIndex
    })
    app.globalData.playIndex = Number(options.playIndex)
    },
  // 上一首/下一首
  onOtherClick(e){
    let other = Number(e.currentTarget.dataset.other)
    // 单曲循环
    if(this.data.shuffle ==1){
      // app.globalData.playIndex = app.globalData.playIndex
    }
    // 列表循环
    if(this.data.shuffle ==2){
      if(app.globalData.playIndex > 0){
        app.globalData.playIndex += other
      } else {
        app.globalData.playIndex = app.globalData.playList.length - 1
      }
    }
    //  随机播放
    if(this.data.shuffle ==3){
      if(Math.random() - (0.5)){
        if(app.globalData.playIndex > 0){
          app.globalData.playIndex += -1
        } else {
          app.globalData.playIndex = app.globalData.playList.length - 1
        }
      } else{
        if(app.globalData.playIndex < app.globalData.playList.length -1){
          app.globalData.playIndex += 1
        } else {
          app.globalData.playIndex = 0
        }
      }
    }

    let id = app.globalData.playList[app.globalData.playIndex].id;
    this.setData({
      songId: id,
      playing: true,
      playIndex: app.globalData.playIndex
    })
    this.getSongDetail();
  },
  setNextSong(){
    if(app.globalData.playIndex < app.globalData.playList.length -1){
      app.globalData.playIndex += 1
    } else {
      app.globalData.playIndex = 0
    }
    let id = app.globalData.playList[app.globalData.playIndex].id;
    this.setData({
      songId: id,
      playing: true,
      playIndex: app.globalData.playIndex
    })
    this.getSongDetail();
  },
  onClickSong(e){
    let index = e.currentTarget.dataset.idx;
    app.globalData.playIndex = index;
    this.setData({
      playIndex: app.globalData.playIndex 
    })
    let id = app.globalData.playList[app.globalData.playIndex].id;
      this.setData({
        songId: id,
        playing: true,
        playIndex: app.globalData.playIndex
      })
      this.getSongDetail();
  },
  onClickShuffle(e){
    let s = e.currentTarget.dataset.s;
    this.setData({
      shuffle: s
    })
    var msg = "";
    switch (this.data.shuffle) {
      case '1':
        msg = "顺序播放";
        break;
      case '2':
        msg = "单曲播放";
        break;
      case '3':
        msg = "随机播放"
    }
    wx.showToast({
      title: msg,
      duration: 2000
    })
  },
  // 播放/暂停
  onClickPlay(e){
    let p = e.currentTarget.dataset.p;
    if(p == 1){
      this.setData({playing: false})
      wx.pauseBackgroundAudio()
    } else {
      this.setData({playing: true})
      wx.playBackgroundAudio({
        dataUrl: this.data.songUrl,
        title: this.data.songs.songs[0].name
      })
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
      isShowM: true,
      isPlayList: true
    })
  },
  onClickPlaying(){
    this.setData({
      isPlayList: false,
      isShowM: false
    })
  },
  onClickClosePaly(){
    this.setData({
      isPlayList: true,
      isShowM: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   

  },
  getSongDetail(){
    // return songDetail({ids: 347230}).then(res => {
    return songDetail({ids: this.data.songId}).then(res => {
      if(res.code ===200){
        this.setData({
          songs:res
        })
        wx.setNavigationBarTitle({
          title: res.songs[0].name,
        })
        this.getSongUrl()
      }
    })
  },
  getSongUrl(){
    return songUrl({id: this.data.songId}).then(res => {
      if(res.code ===200){
        this.setData({
          songUrl: res.data[0].url
        })
        wx.playBackgroundAudio({
          dataUrl: res.data[0].url,
          title: this.data.songs.songs[0].name
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
    let _this = this
    setTimeout(() => {
      wx.getBackgroundAudioPlayerState({
        complete(res){
          _this.setData({
            duration: _this.setTime(res.duration),
            totalDuration: res.duration
          })
        }
      })
      setInterval(() => {
        wx.getBackgroundAudioPlayerState({
          complete(res){
            _this.setData({
              currentPosition: _this.setTime(res.currentPosition),
              progressPercent: (res.currentPosition/ res.duration)*100,
              percent: ((res.currentPosition/ res.duration)*100)
            })
            if(res.currentPosition == res.duration){
              _this.setNextSong();
            }
          }
        })
      },1000)
    },1000)
  },
  onClickSlider(e){
    this.setData({
      percent: e.detail.value
    })
    let currentPosition = e.detail.value / 100 * this.data.totalDuration;
    wx.seekBackgroundAudio({
      position: currentPosition
    })
  },
  setTime(time){
    let duration = "";
    let m ;
    let s
    // 小于60
    if(time< 60){
      duration = time < 10 ? "00:0" + time: "00:" + time
    } else{
      m = parseInt(time/60) < 10 ? "0"+ parseInt(time/60): parseInt(time/60)
      s = time - parseInt(time/60)*60
      s = s < 10 ? "0" +s :s
      duration = m + ":"+ s
    }
    return duration
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