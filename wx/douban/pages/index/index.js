// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:0,
    width:50,
    index:0,
    all:[[],[]]
  },

  change(e){
    let index = e.currentTarget.dataset.index
    this.setData({
      left:index*this.data.width,
      index:index
      })
    if(this.data.all[index].length === 0){
      this.changeAll(this.backstage.paths[index], index)
    }
  },

  backstage:{
    paths:[
      app.globalData.basePath + '/v2/movie/in_theaters.com',
      app.globalData.basePath + '/v2/movie/coming_soon'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.changeAll(this.backstage.paths[0],0)
  },

  changeAll(path,index){
    app.getRemoteData(path)
      .then(res => {
        let temp = this.data.all
        temp[index] = temp[index].concat(res.data.subjects)
        this.setData({ all: temp })
      })
      .catch(err => {
        console.error(err)
      })
  },

  refresh(path,index){
    app.getRemoteData(path)
      .then(res => {
        let temp = this.data.all
        temp[index] = res.data.subjects
        this.setData({ all: temp })
        wx.stopPullDownRefresh()
        wx.showToast({
          title: '刷新成功！',
          icon:'none',
          duration:3000
        })
      })
      .catch(err => {
        console.error(err)
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
    let index = this.data.index
    this.refresh(this.backstage.paths[index],index)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let all = this.data.all,
    index = this.data.index
    this.changeAll(this.backstage.paths[index]
    +'?start='+all[index].length,index)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})