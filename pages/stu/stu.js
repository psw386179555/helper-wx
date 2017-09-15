// pages/stu/stu.js
import { Stu } from 'stu-model.js';
var stu = new Stu();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var info = wx.getStorageSync('userInfo');
    that.setData({
      userInfo: info
    })
  },
  inCard: function () {
    wx.showToast({
      title: '暂不启用',
    })
    return false;
    wx.navigateTo({
      url: '../card/card',
    })
  },

  inList: function (e) {
    wx.showToast({
      title: '暂不启用',
    })
    return false;
    console.log(e);
    wx.navigateTo({
      url: '../list/list?type=' + e.currentTarget.dataset.type,
    })
  },

  getUserInfo: function (e) {
    var that = this;
    var userInfo = e.detail.userInfo;
    // console.log(userInfo);
    if(userInfo){
      stu.saveInfo(userInfo, (res) => {
        wx.showToast({
          title: '登录成功！',
        })
      })
      that.setData({
        userInfo: userInfo
      })
      wx.setStorageSync('userInfo', userInfo);
    }else{
      wx.showToast({
        icon:'loading',
        title: '登录失败！',
      })
    }
    
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