// pages/weather/weather.js
const app = getApp()
const {banner, personalized, personalizedNewsong, personalizedMv, personalpersonalizedDjprogramizedMv} = require('../../api/personality')
const {playlistCatlist, topPlaylist} = require('../../api/song-sheet')
const {programRecommend,djRecommend,djHot, djBanner} = require('../../api/radio-station')
const {toplistDetail} = require('../../api/ranking-list')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[
      {nickName:'username',avatarUrl:'userImg.jpg'}
   ],
    tabsList:[
      {id: 1,name: '个性推荐',},
      {id: 2,name: '歌单',},
      {id: 3,name: '主播电台',},
      {id: 4,name: '排行榜',},
    ],
    isHidden: false,
    songSheetLoading: false,
    tabIndex: 0,
    tabIs: 'personality',
    personality: {
      bannerList: [],
      personalizList: [],
      newSongList: [],
      mvList: [],
      radioStationList: [],
      thisday: (new Date()).getDate(),
    },
    songSheet:{
      playlists: [],
      cCatlist: [],
      limit: 20,
      offset: 0
    },
    radio:{
      bannerList: [],
    },
    ranking: {
      officialList: [],
      globalList: [],
      singerList: [],
    }
  },
  onUserInfo(e){
    console.log('子组件传值',e.detail);
  },

  // 更多推荐歌单
  songMore(){
    this.setData({tabIs: 'song-sheet'})
    this.setData({tabIndex: 1})
    this.getSongSheetRequest()
  },
  moreMusic(){
    wx.navigateTo({
      url: '../new-music/new',
    })
  },
  moreRedio(){
    this.setData({tabIndex: 2})
    this.setData({tabIs: 'radio-station'})
    this.getRadioStationRequest()
  },
  clickTabItem(e){
    this.setData({tabIndex: e.detail})
    let index = e.detail
    if(index == 0){
      this.setData({tabIs: 'personality'})
      this.data.songSheet.offset = 0;
      this.setData({songSheet: this.data.songSheet})
      this.getPersonalityTemRequest();
    } else if(index == 1){
      this.setData({tabIs: 'song-sheet'})
      this.getSongSheetRequest()
    }  else if(index == 2){
      this.setData({tabIs: 'radio-station'})
      this.getRadioStationRequest()
    }  else if(index == 3){
      this.setData({tabIs: 'ranking-list'})
      this.getRankingList();
    } 
  },
  // 轮播图
  getBannerRequest(){
    return banner({}).then(res => {
      if(res.code === 200){
        this.data.personality.bannerList =  res.banners
        this.setData({personality: this.data.personality})
       }
     })
   },
   // 推荐歌单
   getPersonalizList(){
     return personalized({}).then(res => {
       if(res.code === 200){
         this.data.personality.personalizList = res.result
         this.setData({personality: this.data.personality })
       }
     })
   },
   // 最新音乐
   getNewSongRequest(){
     return personalizedNewsong({}).then(res => {
      if(res.code === 200){
        this.data.personality.newSongList = res.result
        this.setData({personality: this.data.personality })
      }
     })
   },
   // 推荐MV
   getMVListRequest(){
     return personalizedMv({}).then(res => {
       if(res.code === 200){
        this.data.personality.mvList = res.result
        this.setData({personality: this.data.personality })
       }
     })
   },
   // 主播电台
   getRadioStationListRequest(){
    return personalpersonalizedDjprogramizedMv({}).then(res => {
      if(res.code === 200){
       this.data.personality.radioStationList = res.result
       this.setData({personality: this.data.personality })
      }
    })
   },
   // 个性推荐template下的接口
   getPersonalityTemRequest(){
    let b =  this.getBannerRequest();
    let p =  this.getPersonalizList();
    let n =  this.getNewSongRequest();
    let m =  this.getMVListRequest();
    let R=  this.getRadioStationListRequest();
    this.setData({
      isHidden: true
    })
    Promise.all([b,p,n,m,R]).then(res => {
      this.setData({
        isHidden: false
      })
    })
   },
  //  页面上拉触底事件的处理函数（处理分页）
  onReachBottom: function () {
      if (this.data.tabIndex == 1) {
          this.getSongList(1);//更多歌单
      }
  },
    // 歌单分类
   getCatList(){
     return playlistCatlist({}).then(res => {
       if(res.code === 200){
         this.data.songSheet.Catlist = res.sub
       }
     })
   },
  // 歌单列表
  getSongList(isAdd){
    this.setData({
      isHidden: !isAdd ? true : false,
      songSheetLoading: !isAdd ? false : true
    })
    return topPlaylist({
      limit: this.data.songSheet.limit,
      offset: this.data.songSheet.offset,
    }).then(res => {
      if(res.code === 200){
        this.setData({
          isHidden: false,
          songSheetLoading: false
        })
        let list = []
        //  this.data.songSheet.playlists 
        if(!isAdd){
          list = res.playlists;
        } else {
          list= this.data.songSheet.playlists.concat(res.playlists);
        }
        this.data.songSheet.playlists = list
        this.data.songSheet.offset +=res.playlists.length
        this.setData({
          songSheet: this.data.songSheet
        })
      }
    })
  },
    // 歌单template下的接口
   getSongSheetRequest(){
    this.setData({
      isHidden: true
    })
     this.getCatList();
     this.getSongList();
   },
   // 
   getDjradioCatelist(){
    
   },
   getProgramRecommend(){
    return programRecommend({}).then(res => {
      if(res.code === 200){
        this.data.radio.programs = res.programs;
        this.setData({
          radio: this.data.radio
        })
      }
    })
   },
   getDjRecommend(){
     return djRecommend({}).then(res => {
       if(res.code === 200){
         this.data.radio.djRadios  = res.djRadios
         this.setData({
           radio: this.data.radio
         })
       }
     })
   },
   getDjradioHot(){
     return djHot({}).then(res => {
       if(res.code === 200){
         this.data.radio.hotDjRadios = res.djRadios
         this.setData({
          radio: this.data.radio
        })
       }
     })
   },
   // 电台banner
   getDjBannerRequset(){
     return djBanner({}).then(res => {
       if(res.code === 200){
         this.data.radio.bannerList = res.data;
         this.setData({
          radio:  this.data.radio
         })
       }
     })
   },
   // 主播电台 teamplate 下的接口  djradioCatelist（电台分类）,programRecommend（推荐节目）,djRecommend（精选电台）,djHot（热门电台）
   getRadioStationRequest(){
    let cate = this.getDjradioCatelist();
    let rec= this.getProgramRecommend();
    let com= this.getDjRecommend();
    let hot= this.getDjradioHot();
   let banner=  this.getDjBannerRequset();
     this.setData({
      isHidden: true
    })
     Promise.all([cate,rec,com,hot,banner]).then(res => {
      this.setData({
        isHidden: false
      })
     })
   },
   // 获取榜单内容
   getTopListRequest(){
    this.setData({
      isHidden: true
    })
     return toplistDetail({}).then(res => {
       if(res.code === 200){
        this.setData({
          isHidden: false
        })
         this.data.ranking.officialList = res.list.filter(x => x.ToplistType)
         this.data.ranking.singerList = [res.artistToplist]
         this.data.ranking.globalList = res.list.filter(x => !x.ToplistType)
         this.setData({
          ranking:  this.data.ranking
         })
       }
     })
   },
   // 排行榜template下的接口
   getRankingList(){
     this.getTopListRequest()

   },
  /**
   * 生命周期函数--监听页面加载 playlistCatlist
   */
  onLoad: function (options) {
    this.getPersonalityTemRequest();
    
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})