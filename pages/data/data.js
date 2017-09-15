// pages/data/data.js
import{  Data } from 'data-model.js';
var dataModel = new Data();
var wxCharts = require('../../wx-chart/wxcharts.js');
var columnChart = null;
var chartData = {
  title: '',
  categories: ['床', '地面', '桌面', '阳台'],
  preWeek:  [],
  currentWeek:[5,5,5,5]
}; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartTitle: chartData.title,
    isMainChartDisplay: true,
    classInfo:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;
    dataModel.getData(options,(res)=>{
      console.log(res);
      if(!res.cur&&!res.pre){
        wx.showToast({
          title: '暂无数据',
          icon:'loading',
          duration:1000
        })
        setTimeout(function(){
          wx.navigateBack({
            delta:1
          })
        },1100)
        return false;

      }
      wx.setNavigationBarTitle({
        title: res.cur.year,
      })
      that.setData({
        chartTitle: res.cur.class + res.cur.room,
        classInfo:'寝室得分：'+res.cur.room_score+'；班级均分：'+
        res.cur.class_score+'；班级排名：'+res.cur.rank
      })
      if(res.pre){
        chartData.preWeek = [res.pre.bed, res.pre.floor, res.pre.desktop, res.pre.balcony]
      }
      if (res.cur) {
        chartData.currentWeek = [res.cur.bed, res.cur.floor, res.cur.desktop, res.cur.balcony]
      }
     this.setChart();
    })
  },
  setChart:function(){
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.categories,
      series: [{
        name: '上周',
        data: chartData.preWeek,
        format: function (val, name) {
          return val + '分';
        }
      }, {
        name: '本周',
        data: chartData.currentWeek,
        format: function (val, name) {
          return val + '分';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '分';
        },
        title: '分数',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth,
      height: 200,
    });
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