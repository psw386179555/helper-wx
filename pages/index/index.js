//index.js
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 500  
  },

  onLoad: function () {
  },

  inFunction: function (e) {
    var that =this; 
    switch (e.currentTarget.dataset.type) {
      case '1':
        wx.showToast({
          title: '暂不启用',
        })
        return false;
        wx.navigateTo({
          url: '../apply/apply?type=' + e.currentTarget.dataset.type,
        })
        break;
      case '2':
        wx.showToast({
          title: '暂不启用',
        })
        return false;
        wx.navigateTo({
          url: '../apply/apply?type=' + e.currentTarget.dataset.type,
        })
        break;
      case '3':      
        wx.navigateTo({
          url: '../health/health'
        })
        break;
      default:
        wx.showToast({
          title: '暂不启用',
        })
        return false;     
    }
    console.log(e);
    
  }, 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
