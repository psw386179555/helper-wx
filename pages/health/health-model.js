import { Base } from '../../utils/base.js';

class Health extends Base {
  constructor() {
    super();
  }
  getData(callback){
    var params = {
      url: 'health/wechat/list',
      type: 'POST',
      sCallback: function (res) {
        // console.log(res);
        callback && callback(res);
      }
    }
    this.request(params);
  }

  showDoc(url){
    wx.downloadFile({
      url: url,
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            wx.hideLoading();
          }
        })
      }
    })
  }
}
export { Health };