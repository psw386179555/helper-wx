// pages/say/say.js
import{ Say } from 'say-model.js';
var say = new Say();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false, 
    inputVal: "" , 
    say: []
  },
  submit: function () {
    var that = this;
    if (!that.data.inputVal){
      wx.showToast({
        icon:'loading',
        title: '请填写内容',
      })
      return false;
    }
    let data = {
      content: that.data.inputVal
    }
    say.add(data,(res)=>{      
        that.setData({
          inputVal: "",
          inputShowed: false
        }); 
        that.onPullDownRefresh();
        wx.showToast({
          title: '提交成功！',
        })     
      
    })    
    
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    say.list((res)=>{
      that.setData({
        say:res
      })
      wx.hideLoading();
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
    var that = this;   
    say.list((res) => {
      that.setData({
        say: res
      })      
      setTimeout(function(){
        wx.stopPullDownRefresh();       
      },1000)  
    })
    
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