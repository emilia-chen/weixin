//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindAnimationTap:()=>{
    wx.navigateTo({
      url: '/pages/animation/animation'
    }) 
  },
  bindSwiperTap:()=>{
    wx.navigateTo({
      url: '/pages/swiper/swiper'
    }) 
  },
  changeVlaue:function(){
    console.log('this',this)
    this.data.motto='123'
    // this.setData({
    //   motto:13
    // })
    console.log('this1',this)
  },
  useHttp:()=>{
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json?key=oudikeyru8gzhosh&location=beijing&language=zh-Hans&unit=c',
      success:(res)=>{
        console.log('res',res)
      }})
      
  },
  scanCode:()=>{
// 允许从相机和相册扫码
wx.scanCode({
  success (res) {
    console.log(res)
  }
})
  },
  //事件处理函数
  bindViewTap: (e)=> {
    console.log('e',e)
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
    // wx.chooseImage({
    //   count: 1,
    //   sizeType: ['original', 'compressed'],
    //   sourceType: ['album', 'camera'],
    //   success(res) {
    //     // tempFilePath可以作为img标签的src属性显示图片
    //     const tempFilePaths = res.tempFilePaths
    //   }
    // })
  
  },
  // created:()=>{
  //   console.log('created')
  // },
  onUnload: function() {
    console.log('onUnLoad')
  },
  onLoad: function() {
    console.log('onLoad',wx.env,'this',this)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log('this.userInfo')
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
      console.log('res',res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    console.log('onReady')
    // Do something when page ready.
  },
  onShow: function () {
    console.log('onShow')
    // Do something when page show.
  },
  onHide: function () {
    console.log('onHide')
    // Do something when page hide.
  },
  onUnload: function () {
    console.log('onUnload')
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    // Do something when pull down.
  },
  onReachBottom: function () {
    console.log('onReachBottom')
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
    // return custom share data when user share.
  },
  onPageScroll: function () {
    console.log('onPageScroll')
    // Do something when page scroll
  },
  onResize: function () {
    console.log('onResize')
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log('onTabItemTap')
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      console.log('onTabItemTap')
      // this is setData callback
    })
  },
  getUserInfo: function(e) {
    console.log('e123', e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})