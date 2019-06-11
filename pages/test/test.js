//logs.js
const util = require('../../utils/util.js')
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    test: ['2018','2019','2020'],
    list: [],
    toView: 'red',
    scrollTop: 100
  },
  onLoad: function (option) {
    console.log('onLoad1', option)
    // 在test页面加载时调用全局方法getMessage
    const msg = app.getMessage("Edison");
    // 在控制台输出msg结果
    console.log(msg); 
    const currentPage = this
    // 在list页面加载时调用api获取数据
    wx.request({
      url: "https://api.seniverse.com/v3/weather/now.json?key=oudikeyru8gzhosh&location=beijing&language=zh-Hans&unit=c",
      data: {},
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        var data = res.data.results[0];
        console.log(res)
        currentPage.setData({
          list: data
        })
      }
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        console.log('i',i)
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
   onReady: function () {
    console.log('onReady1')
    // Do something when page ready.
  },
  onShow: function () {
    console.log('onShow1')
    // Do something when page show.
  },
  onHide: function () {
    console.log('onHide1')
    // Do something when page hide.
  },
  onUnload: function () {
    console.log('onUnload1')
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh1')
    // Do something when pull down.
  },
  onReachBottom: function () {
    console.log('onReachBottom1')
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    console.log('onShareAppMessage1')
    // return custom share data when user share.
  },
  onPageScroll: function () {
    console.log('onPageScroll1')
    // Do something when page scroll
  },
  onResize: function () {
    console.log('onResize1')
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log('onTabItemTap1')
  },
})
