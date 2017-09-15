
import { Config } from 'config.js';
import { Token } from 'token.js';

class Base {
  constructor() {
    this.baseRequestUrl = Config.restUrl;
  }

 // 当noRefech为true时，不做未授权重试机制
  request(params, noRefetch) {
    var that = this;
    var url = this.baseRequestUrl + params.url;

    if (!params.type) {
      params.type = 'GET';
    }

    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {        
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);     
        if (startChar == '2') {     
          params.sCallback && params.sCallback(res.data);
        }
        else {
          // console.log(res);
          //AOP
          if (code == '401') {
            // token.getTokenFromServer
            // base.request
            if (!noRefetch) {
              that._refetch(params);
            }
          }
          if(noRefetch){
            params.eCallback && params.eCallback(res.data);
          }
        }
      },
      fail: function (err) {
        console.log(err);
        wx.showToast({
          icon: 'loading',
          title: '网络异常！',
        })        
      }
    })
  }

  _refetch(params) {
    var token = new Token();
    token.getTokenFromServer((token) => {
      this.request(params, true);
    });
  }

  /*获得元素上的绑定的值*/
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };

  checkStatus(){
    var status = wx.getStorageSync('userInfo').status;
    if (!status || status < 1) {
      wx.showModal({
        content: '请先登录！',
        confirmText: '去登录',
        success: function (res) {
          if (res.confirm) {
            callback && callback(res.confirm)
          }
        }
      })
    } else if (1 <= status < 2) {
      wx.showModal({
        title: '提示',
        content: '认证后才可入驻',
        confirmText: '去认证',
        success: function (res) {
          if (res.confirm) {
            callback && callback(res.confirm)
          }
        }
      })
    } else {
      callback && callback(false)
    }
  };

}

export { Base };