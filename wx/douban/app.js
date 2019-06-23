//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    basePath: 'https://douban.uieee.com'
  },
  // 获取远程数据
  getRemoteData(url){
    return new Promise((resolve,reject) => {
      wx.showLoading({
        title: '疯狂加载中...',
      })
      wx.request({
        url: url,
        header: {
          'content-type': 'json'
        },
        success: res => {
          resolve(res)
          wx.hideLoading()
          wx.showToast({
            title: '加载完成',
          })
        },
        fail: err => {
          reject(err)
          wx.hideLoading()
          wx.showToast({
            title: '加载失败',
          })
        }
      })
    })
  }
})