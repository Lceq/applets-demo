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
    isShowM: true,
    songs:{},
    songUrl: '',
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
    app.globalData.userInfo = 's'
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
        console.log(11,res,this.data.songs);
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
        console.log(this.data.songs);
        wx.playBackgroundAudio({
          dataUrl: res.data[0].url,
          title: this.data.songs.songs[0].name
        })
        console.log('获取URL',res);
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
          console.log('获取URL后',res,res.duration);
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
          }
        })
      },1000)
    },1000)
  },
  onClickSlider(e){
    this.setData({
      percent: e.detail.value
    })
    let currentPosition = e.detail.value / 100 * this.data.totalDuration
    console.log(e.detail.value, currentPosition);
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