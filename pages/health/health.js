// pages/health/health.js
import { Health } from 'health-model.js';
var health = new Health();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekItem: ["请选择","第一周", "第二周", "第三周", "第四周", "第五周", "第六周",
      "第七周", "第八周", "第九周", "第十周", "第十一周", "第十二周", "第十三周",
      "第十四周", "第十五周", "第十六周", "第十七周", "第十八周", "第十九周", "二十周第一周"],
    weekIndex: 0,
    proItem: ["新能源", "节能", "流体", "热能", "节能", "流卓", "建环"],
    proIndex: 0,
    classItem: [1401, 1402, 1501, 1502, 1601, 1602, 1701, 1702],
    classIndex: 0,
    areaItem: ["老生楼后楼", "A", "B", "C", "D", "E", "F", "G"],
    areaIndex: 0,
    buildItem: ["请选择", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    buildIndex: 0,
    roomId: '',
    searchWord: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // health.getData((res) => {
    //   console.log(res);
    //   that.setData({
    //     list: res.rows
    //   })
    // })
  },
  bindProChange: function (e) {
    this.setData({
      proIndex: e.detail.value
    })
  },
  bindClassChange: function (e) {
    this.setData({
      classIndex: e.detail.value
    })
  },
  bindWeekChange: function (e) {
    this.setData({
      weekIndex: e.detail.value
    })
  },
  bindAreaChange: function (e) {
    this.setData({
      areaIndex: e.detail.value
    })
  },
  bindBuildChange: function (e) {
    this.setData({
      buildIndex: e.detail.value
    })
  },
  inputRoomId: function (e) {
    this.setData({
      roomId: e.detail.value
    })
  },
  formSubmit: function (e) {
    var year = e.detail.value.year;
    var room;
    var areaItem = this.data.areaItem;
    var areaIndex = this.data.areaIndex;
    var roomId = this.data.roomId;
    var buildItem = this.data.buildItem;
    var buildIndex = this.data.buildIndex;
    var weekIndex = this.data.weekIndex;
    var proIndex = this.data.proIndex;
    var classIndex = this.data.classIndex;
    var proItem = this.data.proItem;
    var classItem = this.data.classItem;

    if (weekIndex==0) {
      wx.showToast({
        title: '输入周数',
        icon: 'loading',
        duration: 500,
      })
      return false;
    }
    if (areaIndex != 0 && buildIndex == 0) {
      wx.showToast({
        title: '输入楼栋信息',
        icon: 'loading',
        duration: 500,
      })
      return false;
    }
    if (!roomId) {
      wx.showToast({
        title: '输入宿舍号',
        icon: 'loading',
        duration: 500,
      })
      return false;
    }
    if (areaIndex == 0) {
      room = areaItem[areaIndex] + '-' + roomId;
    } else {
      room = areaItem[areaIndex] + '-' + buildItem[buildIndex] + '-' + roomId;
    }
    // console.log(room);
    var proClass = proItem[proIndex] + classItem[classIndex]
    wx.navigateTo({
      url: '../data/data?room=' + room +
      '&week=' +weekIndex +
      '&class=' + proClass +
      '&year=' + year,
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