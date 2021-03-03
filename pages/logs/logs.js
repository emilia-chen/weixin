//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onUnload: function() {
    console.log('onUnLoad1')
  },
  onLoad: function () {
    console.log('onLoad')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
