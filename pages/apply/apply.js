// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [],
    imageCount: 9,
    type:null,
    get_time:'',
    classItem: ["国家级", "省级", "校级", "院级"],
    classIndex: 0,
    rankItem: ["特等奖", "一等奖", "二等奖", "三等奖","参与奖"],
    rankIndex: 0,   
    placeItem: ["队长", "队员", "个人"],
    placeIndex: 0,   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      type:options['type']
    })
    wx.setNavigationBarTitle({
      title:options['type']  == 1 ? 'G3成绩申请' : '创新学分申请'
    })
  },

  bindClassChange: function (e) {
    this.setData({
      classIndex: e.detail.value
    })
  },
  bindRankChange: function (e) {
    this.setData({
      rankIndex: e.detail.value
    })
  },
  bindPlaceChange: function (e) {
    this.setData({
      placeIndex: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      get_time: e.detail.value
    })
  },

  chooseImage: function () {
    var that = this
    var count = that.data.imageCount;
    if (that.data.imageList.length >= 9) {
      wx.showToast({
        title: '不多于9张',
        icon: 'success',
        image: '/image/jinggao.png',
        duration: 2000
      })
      return false;
    }
    wx.chooseImage({
      count: count,
      success: function (res) {
        // console.log(res)
        var oldImageList = that.data.imageList;
        var imageList = oldImageList.concat(res.tempFiles)
        // console.log(imageList);
        that.setData({
          imageList: imageList,
          imageCount: 9 - imageList.length
        })
      }
    })
  },
  previewImage: function (e) {
    var that = this
    var current = e.target.dataset.src
    var imageListUrl = [];
    for (var i = that.data.imageList.length - 1; i >= 0; i--) {
      imageListUrl[i] = that.data.imageList[i]['path']
    }
    wx.previewImage({
      current: current,
      urls: imageListUrl
    })
  },
  deleteImage: function () {
    var that = this
    var imageList = that.data.imageList;
    var length = imageList.length - 1;
    var newImageList = imageList.slice(0, length);
    that.setData({
      imageList: newImageList
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