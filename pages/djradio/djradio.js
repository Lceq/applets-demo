// pages/djradio/djradio.js
const {djDetail, djProgram} =require('../../api/djradio')
const {formatTime} =require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    djId: 0,
    djDetail: {},
    programs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({djId: options.id})
    this.getDjDetail();
    this.getDjProgram();

  },
  getDjDetail(){
    return djDetail({rid: this.data.djId}).then(res => {
      if(res.code === 200){
        this.setData({djDetail: res.data})
      }
    })
  },
  getDjProgram(){
     return djProgram({rid: this.data.djId}).then(res => {
      if(res.code === 200){
        let programs = res.programs.map(x => {
          x.createTime = formatTime(x.createTime);
          return x;
        })
        this.data.programs = programs
        this.setData({programs: this.data.programs})
        // let ff = formatTime('2020/10/10 22:22:22')
        let ff = formatTime('1350052653')
        console.log(ff,11,res);
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