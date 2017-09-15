//app.js
import { Token } from 'utils/token.js';
import { AppModel } from 'app-model.js';
var appModel = new AppModel();
App({
  onLaunch: function () {
    var that = this;
    var token = new Token();
    token.verify();
    var info = wx.getStorageSync('userInfo');
    if (!info) {
      wx.getUserInfo({
        lang: 'zh_CN',
        success: function (res) {
          var userInfo = res.userInfo
          appModel.saveInfo(userInfo, (res) => {
            wx.showToast({
              title: '登录成功！',
            })
          })
          wx.setStorageSync('userInfo', userInfo);
        }
      })
    }
  }
})